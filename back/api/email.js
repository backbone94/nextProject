import nodemailer from "nodemailer";
import config from "../config/index.js";
import express from "express";
import auth from "../middleware/auth.js";

// 몽고 DB 콜렉션
import User from "../models/user.js";

const router = express.Router();

import "@babel/polyfill";

const { NAVER_ID, NAVER_PW } = config;

// 사용자에게 메일 보내는 host 설정
const smtpTransport = nodemailer.createTransport({
  service: "naver",
  host: "smtp.naver.com",
  port: 465,
  auth: {
    user: NAVER_ID,
    pass: NAVER_PW,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// POST api/email/alarm 로그인하면 메일로 알람
router.post("/alarm", auth, async (req, res) => {
  try {
    const { email, alarm } = req.body.object;
    console.log("알람 이메일: ", email, "알람 alarm: ", alarm);

    const result = alarm.map((a) => {
      // 개봉까지 며칠 남았는지 계산
      const temp = new Date(a.releaseDate).getTime() - new Date().getTime();
      const diff = Math.floor(temp / (1000 * 60 * 60 * 24) + 1);
      return `🍿 영화 "${a.title}" 의 개봉일이 ${diff}일 남았습니다.\n`;
    });
    result.push("\n\n😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊");
    console.log(result.join("\n"));

    // 이메일 전송
    const mailOptions = {
      from: NAVER_ID,
      to: email,
      subject: "jun's MovieTalk",
      text: result.join("\n"),
    };

    smtpTransport.sendMail(mailOptions, (err, res) => {
      if (err) console.log(err);
      else {
        console.log("사용자에게 보낸 이메일 결과: ", res.response);
      }
      smtpTransport.close();
    });
  } catch (e) {
    console.log(e);
  }
});

/* min ~ max까지 랜덤으로 숫자를 생성하는 함수 */
const generateRandom = function (min, max) {
  let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
};

// POST api/email/ 이메일 인증
router.post("/", async (req, res) => {
  try {
    const number = generateRandom(111111, 999999);
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      console.log("이미 존재하는 이메일입니다.");
      return res.json({ error: "이미 존재하는 이메일입니다." });
    } else {
      // 이메일 인증
      const mailOptions = {
        from: NAVER_ID,
        to: email,
        subject: "jun's MovieTalk",
        text: "숫자 6자리를 입력해주세요😊 : " + number,
      };

      smtpTransport.sendMail(mailOptions, (err, res) => {
        if (err) console.log(err);
        else {
          console.log("사용자에게 보낸 이메일 결과: ", res.response);
        }
        smtpTransport.close();
      });
    }
    res.json(number);
  } catch (e) {
    console.log(e);
  }
});

export default router;
