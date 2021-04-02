const validationInputRef = document.querySelector('#validation-input');
const validationInputLength = Number(validationInputRef.dataset.length);

const removeClassOnInput = className => {
  if (validationInputRef.classList.contains(className)) {
    validationInputRef.classList.remove(className);
  }
};
const onValidationInput = () => {
  const inputLength = validationInputRef.value.length;

  if (inputLength === validationInputLength) {
    removeClassOnInput('invalid');
    validationInputRef.classList.add('valid');
  } else {
    removeClassOnInput('valid');
    validationInputRef.classList.add('invalid');
  }
};
validationInputRef.addEventListener('blur', onValidationInput);
{
  /* <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      #validation-input {
        border: 3px solid #bdbdbd;
      }

      #validation-input.valid {
        border-color: #4caf50;
      }

      #validation-input.invalid {
        border-color: #f44336;
      }
    </style>
  </head>
  <body>
    <input
      type="text"
      id="validation-input"
      data-length="6"
      placeholder="Введи 6 символов"
    />
  </body> */
}
