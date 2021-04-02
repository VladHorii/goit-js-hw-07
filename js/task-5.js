const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');
const defaultValue = 'незнакомец';

const onInputName = e => {
  outputNameRef.textContent = e.target.value;
  if (outputNameRef.textContent === '') {
    outputNameRef.textContent = defaultValue;
  }
};

inputNameRef.addEventListener('input', onInputName);

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */
