import { Request, Response, NextFunction } from "express";

export const validateUserIdParam = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    return res.status(400).send("Invalid user id");
  }
  next();
};

export const validateUserUsernameField = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send("Missing username field");
  }
  next();
};

export const validateUserAgeField = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { age } = req.body;
  if (!age) {
    return res.status(400).send("Missing age field");
  }
  if (isNaN(Number(age))) {
    return res.status(400).send("Invalid user age");
  }
  next();
};
