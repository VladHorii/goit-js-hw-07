let counterValue = 0;

const ref = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

const onIncrement = () => {
  counterValue += 1;
  updateInterface(counterValue);
};
const onDecrement = () => {
  counterValue -= 1;
  updateInterface(counterValue);
};
const updateInterface = value => (ref.value.textContent = value);

ref.increment.addEventListener('click', onIncrement);
ref.decrement.addEventListener('click', onDecrement);
