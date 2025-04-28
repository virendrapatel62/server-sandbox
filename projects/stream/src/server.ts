import express, { Router } from "express";
import { pingHandler } from "./handlers/ping.handlers";
import { meetingRouter } from "./handlers/meetings.handlers";
import morgan from "morgan";
import { appConfig } from "config";

const APP_NAME = "stream";
const SERVER_PORT = appConfig.streamServerPort;

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

app.listen(SERVER_PORT, () => {
  console.log(`${APP_NAME} server running on port ${SERVER_PORT}`);
});

export { app };
