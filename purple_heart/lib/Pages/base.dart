import 'package:flutter/material.dart';

class BaseButton extends StatefulWidget {
  const BaseButton({Key? key}) : super(key: key);

  @override
  _BaseButtonState createState() => _BaseButtonState();
}

class _BaseButtonState extends State<BaseButton> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        height: 180,
        width: 180,
        child: const Icon(
          Icons.favorite,
          color: Colors.white,
          size: 50,
        ),
        decoration: BoxDecoration(
          color: Colors.deepPurple[300],
          shape: BoxShape.circle,
          boxShadow: [
            BoxShadow(
              color: Colors.deepPurple.shade700,
              offset: const Offset(4, 4),
              blurRadius: 15,
              spreadRadius: 1,
            ),
            BoxShadow(
              color: Colors.deepPurple.shade200,
              offset: const Offset(-4, -4),
              blurRadius: 15,
              spreadRadius: 1,
            )
          ],
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Colors.deepPurple.shade200,
              Colors.deepPurple.shade400,
            ],
            stops: const [
              0.1,
              0.9,
            ],
          ),
        ),
      ),
    );
  }
}
