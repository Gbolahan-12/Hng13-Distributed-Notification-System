import { prisma } from "../config/db.config";

export class UserService {
  async getAll() {
    return prisma.user.findMany();
  }
  async create(data: any) {
    return prisma.user.create({ data });
  }
}