const colors = ["green", "blue", "pink", "#49a6e9","#7125ff","#deff25"]
const changeColor = document.querySelector('.change-color')
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const randomChange = getChange()
    console.log(randomChange);

    document.body.style.backgroundColor = colors[randomChange]
    
    changeColor.textContent = colors[randomChange]
    changeColor.style.color = colors[randomChange];
});

const getChange = () => {
    return Math.floor(Math.random() * colors.length);
};