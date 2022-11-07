import Transaction from "../models/Transaction.js";
import User from "../models/UserProfile.js"

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findById(id)
    if (transaction) {
      return res.json(transaction);
    }
    res.status(404).json({ message: "Transaction not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
    console.log(transaction._id)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const linkTransaction = async (req, res) => {
    try {
        const { transactionId, userId } = req.params
        const transaction = await Transaction.findById(transactionId)
        const user = await User.findById(userId)
        user.transactions.push(transaction)
        user.save()
        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}

export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Transaction.deleteOne({ '_id': id });
    
    if (deleted) {
      return res.status(200).send("Transaction deleted!");
    }

    throw new Error("Transaction not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
