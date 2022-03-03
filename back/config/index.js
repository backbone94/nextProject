import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NAVER_ID: process.env.NAVER_ID,
  NAVER_PW: process.env.NAVER_PW,
};
