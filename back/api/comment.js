import express from "express";

// 몽고 DB 콜렉션
import Comment from "../models/comment.js";

import auth from "../middleware/auth.js";

const router = express.Router();

import "@babel/polyfill";
import User from "../models/user.js";

export default router;

// 리뷰 달기 POST api/comment
router.post("/", auth, async (req, res) => {
  try {
    console.log(req.body);
    const { movie, rate, text, user, nickName, profile } = req.body.comment;
    let newComment = await Comment.create({
      movie,
      rate,
      text,
      user,
      nickName,
      profile,
    });
    newComment = await newComment.populate("user");

    // 유저 정보에, 작성한 리뷰 연결시키기
    await User.findByIdAndUpdate(
      { _id: user },
      { $push: { comments: newComment } }
    );
    console.log("댓글 달기 result: ", newComment);
    res.json(newComment);
  } catch (e) {
    console.log(e);
  }
});

// 좋아요 수 변경 POST api/comment/like
router.post("/commentLike", async (req, res) => {
  try {
    console.log(req.body);
    const { _id, like } = req.body;

    // comment의 좋아요 수 변경
    const updateComment = await Comment.findOneAndUpdate(
      { _id },
      { like },
      { new: true }
    ).populate("user");

    console.log("좋아요 수 변경 result: ", updateComment);
    res.json(updateComment);
  } catch (e) {
    console.log(e);
  }
});

// 리뷰 리스트 불러오기 GET api/comment
router.get("/", async (req, res) => {
  try {
    const { movie } = req.query;
    console.log(movie);
    // const commentList = await Comment.find({ movie });
    // res.json(commentList);
    await Comment.find({ movie })
      .populate("user")
      .then((commentList) => {
        console.log(commentList);
        res.json(commentList);
      });
  } catch (e) {
    console.log(e);
  }
});
