function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const spanEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}
