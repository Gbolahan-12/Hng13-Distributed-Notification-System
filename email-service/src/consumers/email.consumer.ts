import { Connection } from "amqplib";
import { EmailService } from "../services/email.service";

export const consumeEmails = async (connection: Connection) => {
  const channel = await connection.createChannel();
  await channel.assertQueue("email_queue", { durable: true });
  const emailService = new EmailService();

  console.log("📩 Email Service listening to email_queue");
  channel.consume("email_queue", async (msg) => {
    if (!msg) return;
    const data = JSON.parse(msg.content.toString());
    try {
      await emailService.send(data);
      channel.ack(msg);
    } catch (err) {
      console.error("❌ Email send failed:", err.message);
      channel.nack(msg, false, false); // dead-letter
    }
  });
};