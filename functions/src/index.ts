import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
const fcm = admin.messaging();

export const sendNotification = functions.firestore
  .document("users/{admin}")
  .onUpdate(async (change, context) => {
    const topic = "admin";
    const newValue = change.after.data();
    const name = newValue.name;
    try {
      const payload = {
        topic: topic,
        notification: {
          title: "New KYC Request",
          body: name+" has submitted a request for KYC verification",
        },
      };
      return fcm.send(payload).then((response) => {
        return {
          sucsess: true, response: "sucsessfully send notification" + response,
        };
      }).catch((error) => {
        return {error: error};
      });
    } catch (error) {
      throw new functions.https.HttpsError("invalid-argument", "error", error);
    }
  });


