import { Router } from "express";
import * as controllers from "../controllers/transaction.js";
const router = Router();

router.get("/", controllers.getTransactions);
router.get("/:id", controllers.getTransaction);
router.post("/", controllers.createTransaction);
router.put("/:transactionId/:userId", controllers.linkTransaction);

export default router;
