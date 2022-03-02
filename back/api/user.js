import express from "express";
import "@babel/polyfill";

// 몽고 DB 콜렉션
import User from "../models/user.js";

const router = express.Router();

// GET api/user
router.get("/", async (req, res) => {
  const { email, password } = req.query;
  console.log("email: ", email, " password: ", password);

  const result = await User.findOne({ email, password });
  if (result === null) {
    console.log("아이디 또는 비밀번호를 확인하세요.");
    res.json({ error: "아이디 또는 비밀번호를 확인하세요." });
  } else {
    console.log("계정 불러오기 result: ", result);
    res.json(result);
  }
});

// POST api/user
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("name: ", name, " email: ", email, " password: ", password);

    const result = await User.findOne({ email });
    if (result !== null) {
      console.log("이미 존재하는 아이디입니다.");
      res.json({ error: "이미 존재하는 아이디입니다." });
    } else {
      const newAccount = await User.create({
        name,
        email,
        password,
      });
      console.log("계정 생성 result: ", newAccount);
      res.json(newAccount);
    }
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
      _id: req.body._id,
    });
    console.log("계정 삭제 result: ", result);
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

export default router;
