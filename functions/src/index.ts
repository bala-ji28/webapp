/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
const { initializeApp } = require("firebase-admin/app");
import { getMessaging } from "firebase-admin/messaging";


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

initializeApp();
const messaging = getMessaging();

export const subscribeToTopic = onRequest(
    { cors: true }, // TODO: update CORS policy only for admin panel url.
    async (request, response) => {
        try {
            const token = (request as any).query.token;
            const unSubscribe = (request as any).query.unSubscribe;
            if (!token) {
                response.status(500).send("Token not found");
                return;
            }
            if (!unSubscribe && unSubscribe === true) {
                await messaging.unsubscribeFromTopic(token, 'admin');
            } else {
                await messaging.subscribeToTopic(token, 'admin');
            }
            response.status(200).send("Success!");
        } catch (error) {
            response.status(500).send(error);
        }
    });
