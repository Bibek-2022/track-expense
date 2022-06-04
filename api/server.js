import "dotenv/config";

import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

import cors from "cors";
app.use(cors());

//db connection
import createConnection from "./src/config/dbConfig.js";
createConnection();

//load middlewares
import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/users", userRouter);

//for frontend static content
app.get("/", (req, res) => {
  res.send("we will send react app here");
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`server is running on port http://localhost:${PORT}`);
});
