import mongoose from "mongoose";
import moment from "moment";

const UserSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  likeComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  role: {
    type: String,
    default: "user",
  },
  profile: {
    type: String,
    default:
      "https://my-blog1684.s3.ap-northeast-2.amazonaws.com/next/defaultImage.png",
  },
  introduce: {
    type: String,
    default: "<p></p>\n",
  },
  registerDate: {
    type: Date,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
});

const User = mongoose.model("user", UserSchema);

export default User;
