import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
  firstname: string,
  lastname: string,
  username: string,
  password: string,
});

module.exports = mongoose.model("Users", UserSchema);
