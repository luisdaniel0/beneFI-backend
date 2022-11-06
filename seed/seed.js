import db from "../db/connection.js";
import Transaction from "../models/Transaction.js"
import UserProfile from "../models/UserProfile.js"
import profileData from "./profileData.json" assert {type: "json"};
import transactionData from "./transactionData.json" assert {type: "json"};


/*
const updateProfile = async () => {

  let profiles = UserProfile.find().toArray()
  let transactions = Transaction.find().toArray()

  await profiles.forEach((user) => {
      transactions.forEach((transaction) => {
        if (user.email === (transaction.to || transaction.from)) {
          let thisUser = UserProfile.find({ _id: user._id })
          let thisTransaction = Transaction.find({ _id: transaction._id})
        thisUser.transactions.push(thisTransaction)
        thisUser.save()
      }
    })
  })
}
*/

const createDatabase = async () => {
  await db.dropDatabase();
  await UserProfile.create(profileData)
  await Transaction.create(transactionData)
  await db.close()
}

createDatabase();

