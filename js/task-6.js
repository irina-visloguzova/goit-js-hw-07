const input = document.querySelector('#validation-input');
const isValid = () => {

    if (Number(input.value.length) === Number(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.remove("invalid"); 
    }
    else if (Number(input.value.length) === 0) {
        input.classList.remove("valid", "invalid");   
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        
    }
};

input.addEventListener('blur', isValid);