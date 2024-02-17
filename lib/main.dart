import 'dart:developer';

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

Future<void> notifications(RemoteMessage message) async {
  RemoteNotification? notification = message.notification;
  log('---->$notification');
  // showDialog(
  //   context: context,
  //   builder: (context) => AlertDialog(
  //     title: Text(notification!.title.toString()),
  //     content: Text(notification.body.toString()),
  //     actions: [
  //       TextButton(
  //         onPressed: () => Navigator.pop(context),
  //         child: const Text('Ok'),
  //       ),
  //     ],
  //   ),
  // );
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Future listenNotifications() async {
    FirebaseMessaging.onBackgroundMessage(notifications);
    FirebaseMessaging.onMessage.listen(notifications);
  }

  Future getToken() async {
    var token = await FirebaseMessaging.instance.getToken();
    log('--Token-->$token');
  }

  @override
  void initState() {
    getToken();
    listenNotifications();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: const Center(child: Text('Firebase Notificaion')),
    );
  }
}
