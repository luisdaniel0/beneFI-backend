import mongoose from "mongoose";
const Schema = mongoose.Schema;
import Transactions from "./Transaction.js"


let UserProfile = new Schema({

  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String },
  avatarImg: { type: String },
  transactions: [{ type: Schema.Types.ObjectId, ref : "Transactions" }]
})

export default mongoose.model("UserProfiles", UserProfile)