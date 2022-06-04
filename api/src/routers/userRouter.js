import express from "express";
import { createUser, findUser } from "../modules/user/User.model.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    //send data to db query
    const result = await createTable(req.body);

    console.log(result);

    res.json({
      status: "success",
      message: "user created successfully",
    });
  } catch (error) {
    let message = error.message;

    if (message.includes("E11000 duplicate key error")) {
      message = "This email is already registered";
    }
    res.json({
      status: "error",
      message,
    });
  }
});

// user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUser({ email, password });

    if (user?._id) {
      user.password = undefined;
      return res.json({
        status: "success",
        message: "Login Successfully",
        user,
      });
    }

    return res.json({
      status: "success",
      message: "Login Unsuccessful",
      user: user,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
export default router;
