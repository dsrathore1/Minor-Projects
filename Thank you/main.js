const onClick = () => {
    const start = () => {
        setTimeout(function () {
            confetti.start();
        }, 1);
    };
    const stop = () => {
        setTimeout(function () {
            confetti.stop();
        }, 5000)
    }
    const message = () => {
        //! Message
        document.getElementById("message").innerHTML = "Those wonderful birthday wishes from you really went a long way in putting a big smile on my face. I was overwhelmed by all the messages which I received for my birthday.So I thank you not only for the birthday wishes but also for all your love and support! I am flabbergasted 💓💓💓 "

        //! Target of button
        document.getElementById("onClick").innerHTML = "🙏 Jay Shree Krishna 🙏";

        //! Box shadow inset
        document.getElementById("onClick").style.boxShadow = 'inset -3px -3px 7px 1px #efffff81, inset 3px 3px 5px 1px rgba(94, 104, 121, 0.384)';
    }
    const image = () => {
        document.getElementById("image").src = "ty.png";
    }
    start();
    stop();
    message();
    image();

};