import express from "express";
import { createTransaction, findTransactions } from "../modules/transaction/Transaction.model.js";
const router = express.Router();

router.get("/", (req, res) => {
  try{
    const {authorization} = req.headers;
    const filter = {userID: authorization}
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await createTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "Added Successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create Transaction",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
export default router;
