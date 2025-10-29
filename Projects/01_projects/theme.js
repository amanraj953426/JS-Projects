const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
// console.log(buttons);


buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        // console.log(e);
        if(e.target.id === 'gray'){
            // console.log(e.target.id);
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === 'red') {
            body.style.backgroundColor = 'red';
        }
        else if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === 'black') {
            body.style.backgroundColor = e.target.id;
        }
    });
});