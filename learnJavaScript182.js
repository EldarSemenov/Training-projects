const banner = document.querySelector('#banner');
console.log(banner.getAttribute('id'));
console.log(banner.getAttribute('disabled'));

const button = document.querySelector('#login');
console.log(button.getAttribute('disabled'));
button.removeAttribute('disabled');
console.log(button);

button.setAttribute('disbaled', 'disabled');
console.log(button);

console.log(button.hasAttribute('disabled'));
console.log(button.hasAttribute('id'));
//
const banner = document.querySelector('#banner');
banner.style.color = 'red';
banner.style.display = 'none';
//
const email = document.querySelector("#email");
//console.log(email.textContent);
console.log(email.value);
//
const element = document.querySelector("#first-item");
element.classList.add('highlighted');
console.log(element);
element.classList.remove('highlighted');
console.log(element);
//
const box = document.querySelector("#box");
console.log(box.classList.contains('activated'));
console.log(box.classList.contains('highlighted'));
box.classList.toggle('activated');
console.log(box);
console.log(box.classList.contains('activated'));
box.classList.toggle('activated');
console.log(box.classList.contains('activated'));
box.classList.replace('activated', 'show');
console.log(box);
//
const banner = document.querySelector("#banner");
console.log(banner.getAttribute('id'));
console.log(banner.getAttribute('disabled'));

const button = document.querySelector('#login');
console.log(button.getAttribute('disabled'));
button.removeAttribute('disabled');
console.log(button);
button.setAttribute('disabled', 'disabled');
console.log(button);
banner.setAttribute('id', 'navbar');
console.log(banner);
console.log(button.hasAttribute('disabled'));
//
const banner = document.querySelector("#banner");
banner.style.backgroundColor = '#405694';
banner.style.display = 'none';
//
const headline = document.querySelector("#headline");
headline.remove();
document.body.style.backgroundColor = '#405694';
document.documentElement.classList.add('dark-mode');
console.log(document.documentElement);
document.body.classList.add('bodyClass');
document.body.setAttribute('id', 'body');
console.log(document.body);
//
const toggleDarkTheme = () => {
    document.documentElement.classList.toggle('dark');
}

const button = document.querySelector('#theme-btn');
button.addEventListener('click', () => {
    toggleDarkTheme();
})
//
const form = document.querySelector('#payment-form');
console.log(form.dataset);
const currency = form.dataset.currency;
console.log(currency);
console.log(form.dataset);
//
const navbar = document.querySelector("#navbar");
navbar.dataset.userId = 45;
navbar.dataset.rememberMe = '';
console.log(navbar);
const rememberMe = navbar.dataset.rememberMe === 'false';
console.log(navbar);
//
const h1 = document.querySelector("h1");
console.log(h1.parentElement);
//
const h1 = document.querySelector('h1');
console.log(h1.closest(".banner"));
//
const getUserIdFromElement = element => {
   const cardNumber = element.closest('.user-card');
   return Number.parseInt(cardNumber.dataset.userId, 10);
}
console.log(getUserIdFromElement(document.querySelector('#name')));
console.log(getUserIdFromElement(document.querySelector('#description')));
//
const div = document.querySelector('#container');
div.innerHTML += `<p>Another paragraph</p>`;
//
const positions = document.querySelector('#job-positions');
positions.insertAdjacentHTML('beforeend', `<div class='position'>2002-2003</div>`);
positions.insertAdjacentHTML('beforeend', `<div class='position'>2003-2004</div>`);
positions.insertAdjacentHTML('beforeend', `<div class="position">2004-2005</div>`);
positions.insertAdjacentHTML('beforeend', `<div class="position">2005-2006</div>`);
positions.insertAdjacentHTML('beforeend', `<div class="word">Room №1</div>`);
positions.insertAdjacentHTML('beforeend', `<div class=""word>Room №2</div>`);
console.log(positions);
positions.insertAdjacentHTML('afterbegin', `<div class="begin">Let's get started!</div>`);
//
const element = document.querySelector('.element');
element.insertAdjacentHTML('beforeend', `<p class="paragraph">An example of a ... very long paragraph.</p>`)
element.style.color = '#058684';
element.style.fontWeight = 900;
element.style.width = '100px';
console.log(element);
console.log(document.querySelector('p.paragraph'));
//
const apps = ['Calculator', 'Phone', 'Messages'];
const list = document.querySelector('#apps-list');

const act = apps.forEach(app => {
    list.insertAdjacentHTML('beforeend', `<li>${app}</li>`);
});