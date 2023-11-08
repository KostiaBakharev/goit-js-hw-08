// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// form.addEventListener('submit', onSubmit);

// const emailInput = form.querySelector("[name='email']");
// const messageInput = form.querySelector('[name="message"]');

// function saveInput() {
//   const localData = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(localData));
//   console.log(localData);
// }
// form.addEventListener('input', throttle(saveInput, 500));

// function onSubmit(event) {
//   event.preventDefault();
//   saveInput();

//   const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
//   console.log(savedData);

//   if (savedData) {
//     emailInput.value = savedData.email;
//     messageInput.value = savedData.message;
//   }
//   localStorage.removeItem('feedback-form-state');
//   form.reset();
// }

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(saveInput, 500));
form.addEventListener('submit', onSubmit);

const emailInput = form.querySelector("[name='email']");
const messageInput = form.querySelector('[name="message"]');

function saveInput() {
  const localData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(localData));
}

document.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
    console.log(savedData);
  }
});

function onSubmit(event) {
  event.preventDefault();
  saveInput();
  if (!(emailInput.value && messageInput.value)) {
    console.log('Please write in all fields');
    return;
  }
  console.log({ email: emailInput.value, message: messageInput.value });
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
// emailInput.value = '';
// messageInput.value = '';

//1  Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
//   у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
//2  Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
//   В іншому випадку поля повинні бути порожніми.
//3  Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email,
//   message та їхніми поточними значеннями.
//4  Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
//   Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
