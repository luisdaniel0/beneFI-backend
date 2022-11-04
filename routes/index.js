import { Router } from "express";
import transactionRoutes from "./transaction.js";
import userProfileRoutes from "./UserProfile.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/transaction", transactionRoutes);
router.use("/UserProfile", userProfileRoutes);

export default router;
