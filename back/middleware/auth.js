import jwt from "jsonwebtoken";
import config from "../config/index.js";
const { JWT_SECRET } = config;

const auth = (req, res, next) => {
  const token = req.body.headers.Authorization;
  if (!token) {
    return res.json({ error: "토큰이 존재하지 않습니다." });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.body = { ...req.body, decoded };
    next();
  } catch (e) {
    console.log(e);
    res.json({ error: "토큰이 유효하지 않습니다." });
  }
};

export default auth;
