import { connectRabbitMQ } from "../../shared/lib/rabbitmq";
import { consumeEmails } from "./consumers/email.consumer";

(async () => {
  const conn = await connectRabbitMQ(process.env.RABBIT_URL || "amqp://guest:guest@rabbitmq:5672");
  await consumeEmails(conn);
})();