import mongoose from "mongoose";
import moment from "moment";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
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
  role: {
    type: String,
    default: "user",
  },
  profile: {
    type: String,
  },
  registerDate: {
    type: Date,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
});

const User = mongoose.model("user", UserSchema);

export default User;
