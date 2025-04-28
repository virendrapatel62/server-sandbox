import { RequestHandler } from "express";

export const pingHandler: RequestHandler = (req, res) => {
  res.json("pong");
};
