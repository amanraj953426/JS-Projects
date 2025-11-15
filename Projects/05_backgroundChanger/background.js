// generate Random colour

const randomColor = function () {
    const hex = "123456789ABCDEFG";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;

};

let intervalId;
const startChangingColor = function () {
    if (!intervalId) {
        randomColor();
    }
    intervalId = setInterval(changeBgColor, 1000);
    function changeBgColor() {
        const changeBgColor = document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId == null;
}

const start = document.querySelector("#start").addEventListener('click', startChangingColor)

const stop = document.querySelector("#stop").addEventListener('click', stopChangingColor);


