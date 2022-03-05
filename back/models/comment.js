import mongoose from "mongoose";
import moment from "moment";

const CommentSchema = new mongoose.Schema({
  movie: {
    type: String,
  },
  rate: {
    type: Number,
  },
  text: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  registerDate: {
    type: Date,
    default: moment(),
  },
  like: {
    type: Number,
    default: 0,
  },
  dislike: {
    type: Number,
    default: 0,
  },
});

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;
