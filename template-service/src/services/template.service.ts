import { prisma } from "../config/db.config";

export class TemplateService {
  async getAll() {
    return prisma.template.findMany();
  }
  async render(templateId: string, vars: Record<string, string>) {
    const template = await prisma.template.findUnique({ where: { id: templateId } });
    if (!template) throw new Error("Template not found");
    return template.body.replace(/\{\{(.*?)\}\}/g, (_, key) => vars[key.trim()] || "");
  }
}