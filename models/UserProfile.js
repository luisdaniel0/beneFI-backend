import mongoose from "mongoose";
const Schema = mongoose.Schema;
import Transaction from "./Transaction.js"

let UserProfile = new Schema({

  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String },
  avatarImg: { type: String },
  transaction: [Transaction]
})

export default mongoose.model("UserProfiles", UserProfile)