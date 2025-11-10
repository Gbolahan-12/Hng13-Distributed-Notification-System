import { Request, Response, NextFunction } from "express";

export const validateNotification = (req: Request, res: Response, next: NextFunction) => {
  const { requestId, type, userId, templateId } = req.body;
  if (!requestId || !type || !userId || !templateId)
    return res.status(400).json({ message: "Missing required fields" });
  next();
};