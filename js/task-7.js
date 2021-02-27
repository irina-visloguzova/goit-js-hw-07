const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.min = 1;
input.max = 60;
input.value = 20;
text.style.fontSize = input.value + 'px';
input.addEventListener('input', () => {
    text.style.fontSize = input.value + 'px';
});