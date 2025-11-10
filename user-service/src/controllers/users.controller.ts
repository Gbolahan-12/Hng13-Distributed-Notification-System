import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const service = new UserService();

export const getUsers = async (_req: Request, res: Response) => {
  const users = await service.getAll();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await service.create(req.body);
  res.status(201).json(user);
};