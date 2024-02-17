import 'dart:convert';
import 'dart:developer';
import 'package:http/http.dart' as http;

class NotificationServices {
  String messageBody(String token, String body) {
    return jsonEncode({
      'to': token,
      'data': {
        'via': 'FlutterFire Cloud Messaging',
      },
      'notification': {
        'title': 'Firebase Notification',
        'body': body,
      },
    });
  }

  Future sendPushMessage(String token, String body) async {
    try {
      String serverKey = '';
      await http.post(
        Uri.parse('https://fcm.googleapis.com/fcm/send'),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'key=$serverKey'
        },
        body: messageBody(token, body),
      );
      log('message send.');
    } catch (e) {
      log('---error--->>>$e');
    }
  }
}
