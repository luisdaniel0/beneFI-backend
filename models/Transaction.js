import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Transaction = new Schema({

  to: { type: String },
  from: { type: String }, 
  currency: { type: String },
  amount: { type: Number },
  sentOn: {type: Date}

})

export default mongoose.model("Transactions", Transaction)