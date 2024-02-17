importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyBndvS2lg3ehJlPUP11N4ZYWdGqwuS8D8k",
    authDomain: "web-notification-44f09.firebaseapp.com",
    projectId: "web-notification-44f09",
    storageBucket: "web-notification-44f09.appspot.com",
    messagingSenderId: "879335603711",
    appId: "1:879335603711:web:470d259b11de938599fbca",
    measurementId: "G-7ZPEQGWK7C"
});

const messaging = firebase.messaging();

// Optional:
// messaging.onBackgroundMessage((message) => {
//     console.log("onBackgroundMessage", message);
// });
