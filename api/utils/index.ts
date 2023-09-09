import { Response } from "express";

export const sendError = (error: any, res: Response): void => {
  console.error("Database query failed:", error);
  res.status(500).send("Database query failed");
};
