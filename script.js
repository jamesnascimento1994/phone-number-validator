let btn = document.querySelector('.output-btn');
let phoneNumberInput = document.querySelector('.phone-input');
let output = document.querySelector('.output');
let regex = /^[\d, \s, \+, \-]{5,20}/;



btn.addEventListener('click',  () => {

    if (phoneNumberInput.value == "") {
        output.innerText = "Please Enter a Number";
    } else if (phoneNumberInput.value.match(regex)) {
        output.innerText = "This phone number is valid";
    } else {
        output.innerText = "This phone number is invalid";
    }
});