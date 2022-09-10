const inputEl = document.querySelector('#validation-input');

const addRemovePassword = (remove, add) => {
  inputEl.classList.remove(`${remove}`);
  inputEl.classList.add(`${add}`);
};
const validPassword = e => {
  if (Number(inputEl.dataset.length) === e.currentTarget.value.length) {
    addRemovePassword('invalid', 'valid');
  } else {
    addRemovePassword('valid', 'invalid');
  }
};

inputEl.addEventListener('blur', validPassword);
