import db from "../db/connection.js";
import Transaction from "../models/Transaction.js"
import UserProfile from "../models/UserProfile.js"
import profileData from "./profileData.json" assert {type: "json"};
import transactionData from "./transactionData.json" assert {type: "json"};




const createDatabase = async () => {
  await db.dropDatabase();
  await UserProfile.create(profileData)
  await Transaction.create(transactionData)
  await db.close()
}

createDatabase();

