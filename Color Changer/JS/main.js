const colors = ["green", "blue", "pink", "#49a6e9", "#7125ff", "#deff25","#3E766B"]
const changeColor = document.querySelector('.change-color')
const btn = document.querySelector(".btn");
const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");

head1.addEventListener("click", () => head1.style.color = "#81c9e6");
head2.addEventListener("click", () => head2.style.color = "#81c9e6");

btn.addEventListener("click", () => {
    const randomChange = getChange()
    // console.log(randomChange);

    document.body.style.backgroundColor = colors[randomChange]

    changeColor.textContent = colors[randomChange]
    changeColor.style.color = colors[randomChange];
});

const getChange = () => {
    return Math.floor(Math.random() * colors.length);
};