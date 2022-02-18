// ignore_for_file: file_names
import 'package:flutter/material.dart';

// ignore: must_be_immutable
class HomePage extends StatelessWidget {
  // ignore: prefer_typing_uninitialized_variables
  final onTapButton;
  bool isButtonPressed;
  // ignore: use_key_in_widget_constructors
  HomePage({this.onTapButton, required this.isButtonPressed});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTapButton,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 0),
        height: isButtonPressed ? 500 : 160,
        width: isButtonPressed ? 350 : 160,
        padding: isButtonPressed
            ? const EdgeInsets.only(left: 15, right: 15)
            : const EdgeInsets.all(0),
        child: isButtonPressed
            ? const Center(
                child: Text(
                  "I love You Bachha!!\nHappy Valentine's Day(I know its too late) but Jaan I am sorry for everthing and, I want to ask you one thing will you be my wife?\n\n!! I LOVEEEE YOU FOREVER !!\n \nHAPPY VALENTINE'S DAY",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 25,
                  ),
                ),
              )
            : Icon(
                Icons.favorite,
                size: 60,
                color: Colors.red[400],
              ),
        decoration: BoxDecoration(
          color: Colors.grey[300],
          borderRadius: BorderRadius.circular(12),
          boxShadow: isButtonPressed
              ? [
                  // NO SHADOW IF BUTTON PRESSED
                ]
              : [
                  BoxShadow(
                    color: Colors.grey.shade600,
                    offset: const Offset(6, 6),
                    blurRadius: 15,
                    spreadRadius: 1,
                  ),
                  const BoxShadow(
                    color: Colors.white,
                    offset: Offset(-6, -6),
                    blurRadius: 15,
                    spreadRadius: 1,
                  )
                ],
        ),
      ),
    );
  }
}
