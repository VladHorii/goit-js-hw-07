let width = 30;
let height = 30;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createBoxes = amount => {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomColor();

    const element = document.createElement('div');
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.backgroundColor = `#${randomColor}`;

    width += 10;
    height += 10;
    elements.push(element);
  }

  return elements;
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
  width = 30;
  height = 30;
};

const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const inputRef = document.querySelector('input');
const boxes = document.querySelector('#boxes');

renderBtnRef.addEventListener('click', () => {
  const elements = createBoxes(inputRef.value);

  boxes.append(...elements);
});

destroyBtnRef.addEventListener('click', destroyBoxes);

{
  /* <div id="controls">
      <input type="number" min="0" max="100" step="1" />
      <button type="button" data-action="render">Создать</button>
      <button type="button" data-action="destroy">Очистить</button>
    </div>

    <div id="boxes"></div> */
}
