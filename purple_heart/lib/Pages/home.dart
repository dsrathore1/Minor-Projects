import 'package:flutter/material.dart';
import 'package:purple_heart/Pages/base.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.deepPurple[300],
      body: const Center(
        child: BaseButton(),
      ),
    );
  }
}
