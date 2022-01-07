const Name = document.querySelector('#name');

Name.addEventListener('focus', (event) => {
  console.log('User focused inside the name');
});

Name.addEventListener('blur', () => {
  console.log("User removed focus from the name");
});
//
const text = document.querySelector(".text");

text.addEventListener('focus', () => {
  console.log('Focused!');
});
text.addEventListener('blur', () => {
  console.log('Out of focus');
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom is ready!');
});

window.addEventListener('scroll', () => {
  console.log('Page scrolled');
});
//
const countries = document.querySelector("#countries");

countries.addEventListener('change', () => {
  console.log(countries.value);
});

document.addEventListener("keydown", event => {
  console.log(event.key);
});

document.addEventListener("keyup", event => {
  console.log(event.key);
});
//
const email = document.querySelector("#login-email");
const password = document.querySelector("#login-password");

email.addEventListener('focus', () => {
  console.log('email: focus inside (cursor in)');
});
email.addEventListener('blur', () => {
  console.log('email: blur (cursor out)');
});

password.addEventListener('focus', () => {
  console.log('password: focus (cursor in)');
});
password.addEventListener('blur', () => {
  console.log('password: blur (cursor out)');
});
//
const getDescriptionText = text => {
  if (text.length <= 10) {
    return text;
  } else {
    return text.substring(0, 10) + '...';
  }
}
console.log(getDescriptionText('Hello World!'));
console.log(getDescriptionText('Hello!'));
console.log(getDescriptionText('This is a long text that is'));

const grades = [10, 8, 13];

grades.forEach(grade => {
  console.log(grade);
});
//
window.addEventListener('scroll', event => {
  console.log('User scrolled');
});

const select = document.querySelector('#countries-dropsown');

//select.addEventListener('change', event => {
//  console.log(select.value);
//});

select.addEventListener('change', event => {
  console.log(event.currentTarget.value);
});