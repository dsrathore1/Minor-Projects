const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");
const purple = document.querySelector(".purple");
const pink = document.querySelector(".pink");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const body = document.querySelector(".body")
const circle = document.querySelector(".circle");

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// console.log(getBGColor(red))

const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        circle.style.backgroundColor = color;
    });
}


magicColorChanger(red, getBGColor(red));
magicColorChanger(blue, getBGColor(blue));
magicColorChanger(green, getBGColor(green));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(purple, getBGColor(purple));
magicColorChanger(yellow, getBGColor(yellow));