import express from "express";
import "@babel/polyfill";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/index.js";
const { JWT_SECRET } = config;

// 몽고 DB 콜렉션
import User from "../models/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET api/user/logIn 로그인
router.post("/logIn", async (req, res) => {
  const { email, password } = req.body;
  console.log("email: ", email, " password: ", password);

  const result = await User.findOne({ email });
  if (result === null) {
    console.log("아이디 또는 비밀번호를 확인하세요.");
    res.json({ error: "아이디 또는 비밀번호를 확인하세요." });
  } else {
    bcrypt.compare(password, result.password).then((isMatch) => {
      if (!isMatch)
        return res.json({ error: "아이디 또는 비밀번호를 확인하세요." });
      jwt.sign(
        { email: result.email },
        JWT_SECRET,
        { expiresIn: "2h" },
        (err, token) => {
          if (err) throw err;
          console.log("계정 불러오기 result: ", result);
          res.json({
            token,
            result,
          });
        }
      );
    });
  }
});

// POST api/user/signUp 회원가입
router.post("/signUp", async (req, res) => {
  try {
    const { email, password, nickName, profile } = req.body;
    console.log(
      " email: ",
      email,
      " password: ",
      password,
      "nickName: ",
      nickName,
      "profile: ",
      profile
    );

    User.findOne({ email }).then((user) => {
      if (user) {
        console.log("이미 존재하는 이메일입니다.");
        return res.json({ error: "이미 존재하는 이메일입니다." });
      } else {
        const newUser = new User({
          email,
          password,
          nickName,
          profile,
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then((user) => {
              jwt.sign(
                { email: user.email },
                JWT_SECRET,
                { expiresIn: "2h" },
                (err, token) => {
                  if (err) throw err;
                  res.json({
                    token,
                    newUser,
                  });
                }
              );
            });
          });
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
});

// 이미지 & 닉네임 & 자기소개 변경 POST api/user/changeNickOrIntro
router.post("/changeNickOrIntro", auth, async (req, res) => {
  try {
    const { email, profile, nickName, introduce } = req.body.user;
    console.log(
      "email: ",
      email,
      "profile",
      profile,
      "nickName: ",
      nickName,
      " introduce: ",
      introduce
    );
    const updateUser = await User.findOneAndUpdate(
      { email },
      { profile, nickName, introduce },
      { new: true }
    );
    console.log("닉네임 or 자기소개 수정 result: ", updateUser);
    res.json(updateUser);
  } catch (e) {
    console.log(e);
  }
});

// 비밀번호 변경 api/user/changePw
router.put("/changePw", auth, async (req, res) => {
  try {
    const { email, password } = req.body.user;
    User.findOne({ email }).then((user) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          user.save().then((user) => {
            console.log("비밀번호 수정 result: ", user);
            res.json(user);
          });
        });
      });
    });
  } catch (e) {
    console.log(e);
  }
});

// DELETE api/user
router.delete("/", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    const result = await User.deleteOne({
      email: req.body.email,
    });
    console.log("계정 삭제 result: ", result);
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

// 토큰 확인 POST api/user/token
router.post("/token", auth, (req, res) => {
  res.json({ msg: "토큰 유효" });
});

export default router;
