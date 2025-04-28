import express, { Router } from "express";
import morgan from "morgan";
import { appConfig } from "config";

const APP_NAME = "auth";
const SERVER_PORT = appConfig.authServerPort;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: `${APP_NAME} is running`,
  });
});

const apiRouter = Router();

app.use(apiRouter);

app.listen(SERVER_PORT, () => {
  console.log(`${APP_NAME} server running on port ${SERVER_PORT}`);
});

export { app };
