import express from "express";
import brandRouter from "./routes/brand.js";

const app = express();
app.use(express.json());

global.fileName = "car-list.json";

app.use("/brands", brandRouter);

app.listen(3333, () => {
  console.log("API Started");
});
