// // Your web app's Firebase configuration
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

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

async function requestPermission() {
    console.log('Requesting permission...');
    try {
        await messaging.requestPermission();        
    } catch (err) {
        console.log('Error while requesting permission', err);
    }
}
async function getToken() {
    try {
        await messaging.deleteToken();
    } catch (error) {
        console.log('An error occurred while deleting token. ', error);
    }
    try {
        const currentToken = await messaging.getToken({ vapidKey: 'BL1ta_wwUBxYgHgK6cOPYY3LIdBtrC9tdNl6_v-6GwRwWvWjHDPAF5bXjdxU2pRQkSDIUUq37YY1ErW88Y-Jpaw' });
        console.log(currentToken);
        return currentToken;
    } catch (error) {
        console.log('An error occurred while retrieving token. ', error);
    }
    return null;
}