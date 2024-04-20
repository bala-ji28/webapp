import 'dart:developer';
import 'dart:js' as js;
import 'dart:js_interop';
import 'dart:js_util';

import 'package:cloud_functions/cloud_functions.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Firebase Notification'),
    );
  }
}

// Future<void> notifications(RemoteMessage message) async {
//   RemoteNotification? notification = message.notification;
//   log('---->$notification');
// }

Future<void> notifications(RemoteMessage message) async {
  RemoteNotification? notification = message.notification;
  log('---->$notification');
  js.context.callMethod("sendNotification");
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

@JS()
external JSPromise<JSString> getToken();

class _MyHomePageState extends State<MyHomePage> {
  // @override
  // void initState() {
  //   js.context.callMethod("getToken");
  //   FirebaseMessaging.onBackgroundMessage(notifications);
  //   FirebaseMessaging.onMessage.listen(notifications);
  //   super.initState();
  // }

  Future requestToken() async {
    final token = await promiseToFuture(getToken());
    log('--->$token');
    final HttpsCallable callable =
        FirebaseFunctions.instanceFor(region: 'us-central1')
            .httpsCallable('subscribeToTopic');
    var res = await callable.call(<String, dynamic>{
      'token': token.toString(),
      'unSubscribe': false,
    });
    log('------>>>>${res.data.toString()}');
    // log('--Token-->$token');
    // js.context.callMethod("sendNotification");
    // final fcm = FirebaseMessaging.instance;
    // NotificationSettings settings = await fcm.requestPermission();
    // if (settings.authorizationStatus == AuthorizationStatus.authorized) {
    //   await fcm.deleteToken();
    //   var token = await fcm.getToken(
    //       vapidKey:
    //           "BMSHwYZeC5byVQtFN1YAwDtGV7c0wxQxcB_mvUTbw6JYIt7pz_plcwJCSLk69thEwE7U48KM12wpKRzwiu0AygY");
    //   log('--Token-->$token');
    // }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          children: [
            const Text('Firebase Notification'),
            ElevatedButton(
              onPressed: () {
                // getToken();
                requestToken();
                // send();
              },
              child: const Text("Request Token"),
            )
          ],
        ),
      ),
    );
  }
}
