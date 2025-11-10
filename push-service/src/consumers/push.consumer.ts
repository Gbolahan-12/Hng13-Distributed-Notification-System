import { Connection } from "amqplib";
import { PushService } from "../services/push.service";

export const consumePushes = async (connection: Connection) => {
  const channel = await connection.createChannel();
  await channel.assertQueue("push_queue", { durable: true });
  const pushService = new PushService();

  console.log("📲 Push Service listening to push_queue");
  channel.consume("push_queue", async (msg) => {
    if (!msg) return;
    const data = JSON.parse(msg.content.toString());
    try {
      await pushService.send(data);
      channel.ack(msg);
    } catch (err) {
      console.error("❌ Push failed:", err.message);
      channel.nack(msg, false, false);
    }
  });
};