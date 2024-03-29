// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for ios - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.macOS:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for macos - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyBndvS2lg3ehJlPUP11N4ZYWdGqwuS8D8k',
    appId: '1:879335603711:web:470d259b11de938599fbca',
    messagingSenderId: '879335603711',
    projectId: 'web-notification-44f09',
    authDomain: 'web-notification-44f09.firebaseapp.com',
    storageBucket: 'web-notification-44f09.appspot.com',
    measurementId: 'G-7ZPEQGWK7C',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyAfJiucPm0jBbTn3OXZ88osUBYfRRjfODE',
    appId: '1:879335603711:android:58fcddc7c4f0fd2f99fbca',
    messagingSenderId: '879335603711',
    projectId: 'web-notification-44f09',
    storageBucket: 'web-notification-44f09.appspot.com',
  );
}
