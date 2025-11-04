const clock = document.querySelector('#clock')
console.log(clock);

// let date = new Date();
// console.log(date.toLocaleTimeString());


setInterval(function(){
    let time = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = time.toLocaleTimeString();
    
}, 1000)

