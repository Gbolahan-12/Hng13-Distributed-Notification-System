import admin from "firebase-admin";
import serviceAccount from "../config/fcm.config.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

export class PushService {
  async send({ token, title, body }: any) {
    await admin.messaging().send({ token, notification: { title, body } });
    console.log(`✅ Push sent to ${token}`);
  }
}