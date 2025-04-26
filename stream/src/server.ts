import express, { Router } from "express";

import { appConfig } from "./config/app.config";
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

app.listen(appConfig.serverPort, () => {
  console.log(`Server running on port ${appConfig.serverPort}`);
});

export { app };
