import amqp from "amqplib";
import { logger } from "./logger";

let connection: amqp.Connection | null = null;

export const connectRabbitMQ = async (url: string) => {
  if (!connection) {
    connection = await amqp.connect(url);
    logger.info("✅ Connected to RabbitMQ");
  }
  return connection;
};

export const publishMessage = async (queue: string, data: object) => {
  if (!connection) throw new Error("RabbitMQ not initialized");
  const channel = await connection.createChannel();
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)), { persistent: true });
  logger.info(`📤 Published message to ${queue}`);
};