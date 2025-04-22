import express from "express";
import { pingHandler } from "@/controllers/ping.controller";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "api is running",
  });
});

app.get("/ping", pingHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app };
