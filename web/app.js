// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARizMOw49asTpx49b8RIiv23EoR0TAcIM",
    authDomain: "flutterwebpoc-5146e.firebaseapp.com",
    projectId: "flutterwebpoc-5146e",
    storageBucket: "flutterwebpoc-5146e.appspot.com",
    messagingSenderId: "386122069873",
    appId: "1:386122069873:web:c4ede45e8659494af8e8d0",
    measurementId: "G-N62VQ3ZDG6"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onMessage((payload) => {
    console.log(
        '[app.js] Received foreground message ',
        payload
    );
    // Customize notification here
    const notificationTitle = 'Foreground Message Title';
    const notificationOptions = {
        body: 'Foreground Message body.',
        icon: '/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});


// messaging.setBackgroundMessageHandler(function (payload) {
//     console.log('Received background message ', payload);
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         icon: '/firebase-logo.png'
//     };

//     return self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });

// messaging.onBackgroundMessage((payload) => {
//     console.log('Message received.onBackgroundMessage ', payload);
// });


// function getToken() {
//     messaging.getToken({ vapidKey: 'BL1ta_wwUBxYgHgK6cOPYY3LIdBtrC9tdNl6_v-6GwRwWvWjHDPAF5bXjdxU2pRQkSDIUUq37YY1ErW88Y-Jpaw' }).then((currentToken) => {
//         if (currentToken) {
//             console.log(currentToken);
//         } else {
//             console.log('No registration token available. Request permission to generate one.');
//         }
//     }).catch((err) => {
//         console.log('An error occurred while retrieving token. ', err);
//     });
// }

async function getToken() {
    // try {
    //     await messaging.deleteToken();
    // } catch (error) {
    //     console.log('An error occurred while deleting token. ', error);
    // }
    try {
        const currentToken = await messaging.getToken({ vapidKey: 'BL1ta_wwUBxYgHgK6cOPYY3LIdBtrC9tdNl6_v-6GwRwWvWjHDPAF5bXjdxU2pRQkSDIUUq37YY1ErW88Y-Jpaw' });
        console.log(currentToken);
        return currentToken;
    } catch (error) {
        console.log('An error occurred while retrieving token. ', error);
    }
    // return null;
}
// messaging.getToken({ vapidKey: 'BL1ta_wwUBxYgHgK6cOPYY3LIdBtrC9tdNl6_v-6GwRwWvWjHDPAF5bXjdxU2pRQkSDIUUq37YY1ErW88Y-Jpaw' }).then((currentToken) => {
//     console.log('---token--> $currentToken');
//     console.log(currentToken);
// }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
// });

console.log("App.js is loaded");

