import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import users from "./routes/userRoute";

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error: any) => {
  console.log(error);
});

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.use("/", users);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
