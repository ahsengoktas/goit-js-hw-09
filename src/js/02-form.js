const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailInputEl = formEl.elements.email;
const messageInputEl = formEl.elements.message;

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const state = {
    email: emailInputEl.value.trim(),
    message: messageInputEl.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function onFormSubmit(event) {
  event.preventDefault();

  const state = {
    email: emailInputEl.value.trim(),
    message: messageInputEl.value.trim(),
  };

  if (!state.email || !state.message) {
    return;
  }

  console.log(state);

  localStorage.removeItem(STORAGE_KEY);
  formEl.reset();
}

function fillFormFromStorage() {
  const savedState = localStorage.getItem(STORAGE_KEY);

  if (!savedState) {
    return;
  }

  const { email = '', message = '' } = JSON.parse(savedState);

  emailInputEl.value = email;
  messageInputEl.value = message;
}

fillFormFromStorage();
