const apps = ['Calculator', 'Phone', 'Messages'];

const list = document.querySelector('#apps-list');

apps.forEach(app => {
  list.insertAdjacentHTML('beforeend', `<li>${app}</li>`);
});

const cars = ['BMW', 'Mersedes-Bentz', 'Tesla'];
const carList = document.querySelector("#list");

cars.forEach(car => {
  carList.insertAdjacentHTML('beforeend', `<li>${car}</li>`)
});

const sampleList = ['Banana', 'Coffee', 'Apples', 'Mashrooms', 'Sugar'];

const renderShoppingList = items => {
  const shoppingList = document.querySelector("#shopping-list");

  items.forEach(item => {
    return shoppingList.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
  });
}
console.log(renderShoppingList(sampleList));

const addItemToShoppingList = item => {
  const list = document.querySelector("#shopping-list");
  list.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
}
addItemToShoppingList('Onion');
addItemToShoppingList('Vine');

const init = () => {
  const shoppingList = document.querySelector("#shopping-list");

  fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      shoppingList.insertAdjacentHTML('beforeend', `<li>${item.item}</li>`);
    });
  });
}
init();

const paragraph = document.createElement('p');
paragraph.textContent = 'Hello World';
paragraph.classList.add('text-center');
paragraph.style.color = 'red';
console.log(paragraph);
document.body.appendChild(paragraph);

const p = document.createElement('h1');
p.textContent = 'HELLO WORLD!';
p.style.color = '#554477';
p.classList.add('hello');
console.log(p);
document.body.appendChild(p);

const createImage = (url, className) => {
  const image = document.createElement('img');
  image.setAttribute('src', url);
  image.classList.add(className);
  document.body.appendChild(image);
  return image;
}
console.log(createImage('images/magnolia-grandiflora.jpg', 'flower'));

const br = document.createElement('br');
document.body.appendChild(br);
const br1 = document.createElement('br');
document.body.appendChild(br1);
const br2 = document.createElement('br');
document.body.appendChild(br2);

const h1 = document.createElement('h1');
h1.classList.add('break');
h1.textContent = 'BREAK BETWEEN PHOTOS';
h1.style.color = '#111947'
document.body.appendChild(h1);
console.log(h1);

console.log(createImage('images/blue-add-button.jpg', 'button'));

const but = document.createElement('button')
but.setAttribute('id', 'app-button');
but.textContent = 'CLICK';
document.body.appendChild(but);

const button = document.querySelector('#app-button');

button.addEventListener('click', () => {
  console.log('Button clicked');
});

const BUTTON = document.createElement('button');
BUTTON.textContent = 'Get Greeting';
BUTTON.setAttribute('id', 'button');
document.body.appendChild(BUTTON);

const button = document.querySelector('#button');

button.addEventListener('click', () => {
  const h1 = document.createElement('h1');
  h1.style.color = '#204585'
  h1.textContent = '🦙🐏🦧WELCOME TO MY WEBSITE!☘️🌿🍀';
  document.body.appendChild(h1);
})

const BUT = document.createElement('button');
BUT.setAttribute('id', 'button');
BUT.textContent = 'Get Welcome Message!';
document.body.appendChild(BUT);

const button = document.querySelector('#button');

button.addEventListener('click', () => {
  const h1 = document.createElement('h1');
  h1.style.color = '#183750';
  h1.textContent = '🐈 Welcome to my WebCatsite! 🦧';
  document.body.appendChild(h1);
  console.log('Welcome!');
});