
// Generate color

const randomColor = function () {
    const hex = "123456789ABCDEFG";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}



let intervalId
const startChangingColor = function () {
    if (intervalId) return;
    intervalId = setInterval(changeBgColor, 1000);

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }

}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

const start = document.getElementById('start').addEventListener('click', startChangingColor);


const stop = document.getElementById('stop').addEventListener('click', stopChangingColor);

// keydown Event
const insert = document.getElementById('insert');
const keycode = document.querySelector('.keycode');

window.addEventListener('keydown', function (e) {
    keycode.innerHTML = `
   
        <table>
            <tr>
                <th>key</th>
                <th>keycode</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    
`;
});