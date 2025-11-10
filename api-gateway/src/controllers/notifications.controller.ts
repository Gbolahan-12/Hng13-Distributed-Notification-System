import { Request, Response } from "express";
import { isDuplicateRequest } from "../../../shared/utils/idempotency";
import { publishMessage } from "../../../shared/lib/rabbitmq";
import { success, failure } from "../../../shared/lib/response-format";

export const sendNotification = async (req: Request, res: Response) => {
  const { requestId, type } = req.body;

  if (await isDuplicateRequest(requestId)) {
    return res.status(409).json(failure(null, "Duplicate request"));
  }

  try {
    const queue = type === "email" ? "email_queue" : "push_queue";
    await publishMessage(queue, req.body);
    res.json(success(null, "Notification queued"));
  } catch (err) {
    res.status(500).json(failure(err.message));
  }
};