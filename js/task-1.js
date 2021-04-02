const items = document.querySelectorAll('ul#categories li.item');

const countItems = items.length;
console.log(`В списке ${countItems} категории.`);

items.forEach(el => {
  const title = el.querySelector('h2').textContent;
  const count = el.querySelectorAll('li').length;
  console.log(`Категория: ${title}
Количество элементов: ${count}`);
});

/* <ul id="categories">
      <li class="item">
        <h2>Животные</h2>

        <ul>
          <li>Кот</li>
          <li>Хомяк</li>
          <li>Лошадь</li>
          <li>Попугай</li>
        </ul>
      </li>
      <li class="item">
        <h2>Продукты</h2>

        <ul>
          <li>Хлеб</li>
          <li>Петрушка</li>
          <li>Творог</li>
        </ul>
      </li>
      <li class="item">
        <h2>Технологии</h2>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </li>
    </ul>
    */
