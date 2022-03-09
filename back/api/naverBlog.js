import express from "express";
import axios from "axios";

const router = express.Router();

import "@babel/polyfill";

// GET /naverBlog/
router.get("/", async (req, res) => {
  try {
    const query = encodeURI("영화 리뷰 ") + `${req.query.title}`;
    console.log("검색어: ", query);
    const start = Math.floor(Math.random() * 5) + 1;
    const result = await axios.get(
      `https://openapi.naver.com/v1/search/blog?query=${query}&start=${start}&display=5`,
      {
        headers: {
          "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
        },
      }
    );
    console.log("검색 결과: ", result.data.items);
    res.json(result.data.items);
  } catch (e) {
    console.log(e);
  }
});

export default router;
