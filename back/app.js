import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config/index.js";
import hpp from "hpp";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

import emailRoutes from "./api/email.js";
import userRoutes from "./api/user.js";
import imageRoutes from "./api/image.js";
import commentRoutes from "./api/comment.js";
import naverBlogRoutes from "./api/naverBlog.js";

const { PORT, MONGO_URI } = config;

const app = express();

// app 미들웨어
app.use(cors({ origin: true, credentials: true }));
app.use(hpp());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));
app.use(express.json());

// 몽고디비 연결
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connecting Success!!"))
  .catch((e) => console.log(e));

// api routes
app.get("/");
app.use("/api/email", emailRoutes);
app.use("/api/user", userRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/naverBlog", naverBlogRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
