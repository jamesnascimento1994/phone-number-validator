let btn = document.querySelector('.output-btn');

btn.addEventListener('click',  () => {
    let phoneNumberInput = document.getElementById('phone-input');
    let output = document.querySelector('.output');
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    output.innerHTML = regex.test(phoneNumberInput) ? true : false;
});