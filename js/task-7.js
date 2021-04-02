const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeFontSize = e => {
  const value = Number(e.currentTarget?.value) || Number(e.value);
  textRef.style.fontSize = `${value}px`;
};

changeFontSize(rangeRef);

rangeRef.addEventListener('input', changeFontSize);

{
  /* <input id="font-size-control" type="range" />
    <br />
    <span id="text">Абракадабра!</span> */
}
