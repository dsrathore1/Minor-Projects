let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",];

const btn = document.querySelector(".btn");
const changeColor = document.querySelector(".change-color");
const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");

head1.addEventListener("click", () => head1.style.color = "#81c9e6");
head2.addEventListener("click", () => head2.style.color = "#81c9e6");


btn.addEventListener("click", function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += arr[getRandomChange()];
    }

    document.body.style.backgroundColor = hexColor;
    changeColor.textContent = hexColor;
    changeColor.style.color = hexColor;
});

function getRandomChange() {
    return Math.floor(Math.random() * arr.length);
};