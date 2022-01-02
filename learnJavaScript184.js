const button = document.querySelector('#app-button');

button.addEventListener('click', () => {
  setTimeout(() => {
  button.setAttribute('disabled', 'disabled');
  console.log('button clicked');
  button.textContent = 'Loding...';
  }, 2000);
});
//
const button = document.querySelector("#menu-sidebar");
const sideBar = document.querySelector("#app-sidebar");

button.addEventListener('click', () => {
  sideBar.classList.toggle('show');
});
//
const button = document.querySelector('#my-button');
button.addEventListener('click', event => {
  console.log(event.currentTarget.textContent);
  debugger;
});
//
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    console.log(event.currentTarget.textContent);
  });
});

//console.log('Hello');
const form = document.querySelector('#address-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submitted');
  console.log(form.textContent);
});

const form1 = document.querySelector("#weather-form");
const city = document.querySelector("#city");
const submit = document.querySelector('#submit')

form1.addEventListener('submit', event => {
  event.preventDefault();
  console.log(city.value);
  console.log(submit.value);
});
//
const form = document.querySelector("#login-form");
const email = document.querySelector("#login-email");
const password = document.querySelector("#login-password");

function processLogin (email, password) {}

form.addEventListener('submit', event => {
  event.preventDefault();
  //console.log(email.value);
  //console.log(password.value);
  processLogin(email.value, password.value);
});

const form = document.querySelector("#register-form");
const Name = document.querySelector("#register-name");
const email = document.querySelector("#register-email");
const password = document.querySelector("#register-password");

const processDataUser = (Name, email, password) => {
  console.log({
    Name, email, password
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  processDataUser(Name.value, email.value, password.value);
});
//
const getNextAge = age => {
  if(age === "") {
    return 0;
  } else {
    return Number.parseInt(age, 10) + 1;
  }
}
console.log(getNextAge(''));
console.log(getNextAge('23'));
//
const button = document.querySelector('#button');

const handleClick = () => {
  console.log('Button clicked');
}

button.addEventListener('click', handleClick);

button.removeEventListener('click', handleClick)
//
const button = document.querySelector("#button");

button.addEventListener('click', () => {
  console.log('Button clicked');
}, {
  once: true
});

const restart = document.querySelector("#my-button");

restart.addEventListener('click', event => {
  console.log(event.currentTarget.textContent);
}, {
  once: true
});

const button = document.querySelector("#my-button");

const handleClick = () => {
  console.log(event.currentTarget.textContent);
}

button.addEventListener('click', handleClick);

setTimeout(() => {
    button.removeEventListener('click', handleClick);
}, 2000);