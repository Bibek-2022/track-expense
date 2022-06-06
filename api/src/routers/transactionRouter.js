import express from "express";
import {
  createTransaction,
  deleteTransactions,
  findTransactions,
} from "../modules/transaction/Transaction.model.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    const filter = { userId: authorization };

    const result = await findTransactions(filter);

    res.json({
      status: "success",
      message: "Transcation List",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
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

router.delete("/", async (req, res) => {
  try {
    const ids = req.body;
    const { authorization } = req.headers;
    const result = await deleteTransactions({ ids, authorization });

    result?.deletedCount
      ? res.json({
          status: "success",
          message: "Selected transactions has been deleted successfully",
        })
      : res.json({
          status: "error",
          message: "unable to delete Transaction",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
