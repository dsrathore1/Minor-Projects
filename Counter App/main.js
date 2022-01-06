// console.log("I am connected")

let count = 0;

const num = document.querySelector(".heading2");
const decrease_btn = document.querySelector(".decrease_btn");
const reset_btn = document.querySelector(".reset_btn");
const increase_btn = document.querySelector(".increase_btn");

const btns = document.querySelectorAll(".btn");

//! Individual Approach
// decrease_btn.addEventListener('click', function (e) {
//     const style = e.currentTarget.classList;
//     if (style.contains("decrease_btn")) {
//         count--;
//     }
//     num.textContent = count;
// });

// reset_btn.addEventListener('click', function (e) {
//     const resetStyle = e.currentTarget.classList;
//     if (resetStyle.contains("reset_btn")) {
//         count = 0;
//     }
//     num.textContent = count;
// });

// increase_btn.addEventListener('click', function (e) {
//     const increaseStyle = e.currentTarget.classList;
//     if (increaseStyle.contains("increase_btn")) {
//         count++;
//     }
//     num.textContent = count;
//     if (count > 0) {
//         value.style.color = "green";
//     }
// });

//! Direct approach to manipulate the buttons
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("increase_btn")) {
            count++;
        } else if (styles.contains("decrease_btn")) {
            count--;
        } else {
            count = 0;
        }
        num.textContent = count;
    });
});