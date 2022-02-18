// ignore_for_file: file_names
import 'package:flutter/material.dart';
import 'package:heart_button/Pages/homePage.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);
  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  bool isButtonPressed = false;
  void buttonPressed() {
    setState(() {
      if (isButtonPressed == false) {
        isButtonPressed = true;
      } else if (isButtonPressed == true) {
        isButtonPressed = false;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: isButtonPressed ? Colors.white : Colors.grey[300],
      body: Center(
        child: HomePage(
          onTapButton: buttonPressed,
          isButtonPressed: isButtonPressed,
        ),
      ),
    );
  }
}
