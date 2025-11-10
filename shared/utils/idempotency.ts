import { redis } from "../lib/redis";

export const isDuplicateRequest = async (requestId: string) => {
  const exists = await redis.exists(`req:${requestId}`);
  if (exists) return true;
  await redis.setEx(`req:${requestId}`, 60, "1"); // expires in 1 min
  return false;
};