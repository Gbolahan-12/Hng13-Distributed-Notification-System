export const config = {
  PORT: process.env.PORT || 3000,
  RABBIT_URL: process.env.RABBIT_URL || "amqp://guest:guest@rabbitmq:5672",
};