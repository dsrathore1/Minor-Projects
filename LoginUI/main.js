const Toggle = () => {
    let temp = document.getElementById("pwdInput");
    let temp2 = document.getElementById("pwdInput1");
    let eyeSec = document.getElementById("eyeSec");

    if (temp.type === "password") {
        temp.type = "text";
        eyeSec.style.color = "#ffc84d"
        eyeSec.className = "fas fa-eye-slash"
    } else {
        temp.type = "password";
        eyeSec.style.color = "black";
        eyeSec.className = "far fa-eye eyeSec";
        eyeSec.style.position ="absolute";
    }
    if (temp2.type === "password") {
        temp2.type = "text";
    } else {
        temp2.type = "password";
    }
};