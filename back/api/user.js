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
    const { name, email, password, nickName, profile, introduce } = req.body;
    console.log(
      "name: ",
      name,
      " email: ",
      email,
      " password: ",
      password,
      "nickName: ",
      nickName,
      "profile: ",
      profile,
      "introduce: ",
      introduce
    );

    User.findOne({ email }).then((user) => {
      if (user) {
        console.log("이미 존재하는 아이디입니다.");
        return res.json({ error: "이미 존재하는 아이디입니다." });
      } else {
        const newUser = new User({
          name,
          email,
          password,
          nickName,
          profile,
          introduce,
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

// POST api/user/updateAccount
router.post("/updateAccount", async (req, res) => {
  try {
    const { name, avatar, newPw, id } = req.body;
    console.log(
      "name: ",
      name,
      " id: ",
      id,
      " avatar: ",
      avatar,
      " newPw: ",
      newPw
    );
    const result = await User.findOneAndUpdate(
      { id },
      { name, avatar, pw: newPw },
      { new: true }
    );
    console.log("계정 수정 result: ", result);
    res.json(result);
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
router.get("/token", auth);

export default router;
