const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeElementsOfIngredients = ingredients =>
  ingredients.map(el => {
    const element = document.createElement('li');
    element.textContent = el;
    return element;
  });

const allElements = makeElementsOfIngredients(ingredients);

document.querySelector('#ingredients').append(...allElements);

{
  /* <ul id="ingredients"></ul> */
}
