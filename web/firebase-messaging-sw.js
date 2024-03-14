importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBndvS2lg3ehJlPUP11N4ZYWdGqwuS8D8k",
//     authDomain: "web-notification-44f09.firebaseapp.com",
//     projectId: "web-notification-44f09",
//     storageBucket: "web-notification-44f09.appspot.com",
//     messagingSenderId: "879335603711",
//     appId: "1:879335603711:web:470d259b11de938599fbca",
//     measurementId: "G-7ZPEQGWK7C"
// };

// firebase.initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARizMOw49asTpx49b8RIiv23EoR0TAcIM",
  authDomain: "flutterwebpoc-5146e.firebaseapp.com",
  projectId: "flutterwebpoc-5146e",
  storageBucket: "flutterwebpoc-5146e.appspot.com",
  messagingSenderId: "386122069873",
  appId: "1:386122069873:web:c4ede45e8659494af8e8d0",
  measurementId: "G-N62VQ3ZDG6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// const app = initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     '[firebase-messaging-sw.js] Received background message ',
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

console.log("Service Worker is registered");