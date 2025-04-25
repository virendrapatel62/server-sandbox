import express, { Router } from "express";

import { CONFIG } from "./config/config";
import { pingHandler } from "./handlers/ping.handlers";
import { meetingRouter } from "./handlers/meetings.handlers";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "api is running",
  });
});
app.get("/ping", pingHandler);

const apiRouter = Router();
apiRouter.use("/api/meetings", meetingRouter);

app.use(apiRouter);

app.listen(CONFIG.SERVER_PORT, () => {
  console.log(`Server running on port ${CONFIG.SERVER_PORT}`);
});

export { app };
