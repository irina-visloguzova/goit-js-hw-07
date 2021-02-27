let counterValue = 0;
const counterRef = document.querySelector("#value");

const increment = () => {
  counterValue += 1;
  return counterRef.textContent = counterValue;
}

const decrement = () => {
  counterValue -= 1;
  return counterRef.textContent = counterValue;
}

const counterBtn = document.querySelectorAll("button");

const incrementBtn = counterBtn[1];
const decrementBtn = counterBtn[0];

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);