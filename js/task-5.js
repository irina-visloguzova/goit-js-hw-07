const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
const defaultUserName = userName.textContent;
const getUserName = (event) => {
    event.currentTarget.value == '' ? userName.textContent = defaultUserName
        : userName.textContent = event.currentTarget.value   
};

input.addEventListener('input', getUserName);