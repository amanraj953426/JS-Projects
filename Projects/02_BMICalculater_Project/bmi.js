const form = document.querySelector('form');
// console.log(form);


form.addEventListener('submit', function (e) {
    // console.log(e);

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    // console.log(height);
    const weight = parseInt(document.querySelector('#Weight').value);
    console.log(weight);
    const result = document.querySelector('#result');
    // console.log(result);




    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `<span>Result: ${bmi}</br> <h3>Under weight</h3></span>`;
        } else if (bmi > 18.07 && bmi < 24.9) {
            result.innerHTML = `<span>Result: ${bmi}</br> <h3>Normal weight</h3></span>`;
        } else if (bmi > 24.10) {
            result.innerHTML = `<span>Result: ${bmi}</br> <h3>Overweight weight</h3></span>`;
        }

    }


});