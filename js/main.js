
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");


let ms = 0;
let isStoped = true;

setInterval(() => {

    if (isStoped)
        return;

    ms += 1;
    let s = Math.floor(ms / 100) % 60;
    let m = Math.floor(ms / 100 / 60) % 60;
    let h = Math.floor(ms / 100 / 60 / 60) % 60;

    milliseconds.textContent = ms % 100 < 10 ? "0" + ms % 100 : ms % 100;
    seconds.textContent = s < 10 ? "0" + s : s;
    minutes.textContent = m < 10 ? "0" + m : m;
    hours.textContent = h < 10 ? "0" + h : h;
}, 10);

start.addEventListener("click", function () {
    start.classList.add("disabled");
    stop.classList.remove("disabled");
    isStoped = false;
});


stop.addEventListener("click", function () {
    stop.classList.add("disabled");
    start.classList.remove("disabled");
    isStoped = true;
});

reset.addEventListener("click", () => {
    ms = 0;
    stop.classList.add("disabled");
    start.classList.remove("disabled");
    isStoped = true;
    milliseconds.textContent = seconds.textContent = minutes.textContent = hours.textContent = "00";
});


