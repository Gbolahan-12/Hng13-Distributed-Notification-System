import { Request, Response, NextFunction } from "express";
import { failure } from "../../../shared/lib/response-format";

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json(failure(err.message || "Internal Server Error"));
};