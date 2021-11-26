const div = document.querySelector('#container');
div.innerHTML += `<p>Another paragraph</p>`;
//
console.log('Hello World');
console.log(2);
//
const positions = document.querySelector('#job');
positions.insertAdjacentHTML('beforeend', `<div class="position">2002-2003</div>`);
console.log(positions);
positions.insertAdjacentHTML('afterbegin', `<div class="position">1999-2000</div>`);
//
const apps = ['Calculator', 'Phone', 'Messages'];
const list = document.querySelector('#apps-list');
apps.forEach(app => {
    list.insertAdjacentHTML('beforeend', `<li>${app}</li>`);
});
//
const todos = ['Learn JavaScript', 'Learn HTML', 'Learn CSS', 'Learn React'];

const organizedList = document.querySelector('#id');

todos.forEach(todo => {
    organizedList.insertAdjacentHTML('beforeend', `<li>${todo}</<li>`);
});
//
const products = ['Apples', 'Tomatoes', 'Pears'];

const shoppingList = document.querySelector('#shopping-list');

products.forEach(product => {
    shoppingList.insertAdjacentHTML('beforeend', `<li>${product}</li>`);
});
//
const sampleList = ['Orange', 'Banana', 'Coffee', 'Paper'];

const renderShoppingList = items => {
    const shoppingList = document.querySelector('#shopping-list');
    items.forEach(item => {
        shoppingList.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
    });
}
renderShoppingList(sampleList);
//
const addItemToShoppingList = item => {
    const shoppingList = document.querySelector('#shopping-list');
    shoppingList.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
}
addItemToShoppingList('Paper');
addItemToShoppingList('Train');
//
const init = () => {
    const shoppingList = document.querySelector('#shopping-list');
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            shoppingList.insertAdjacentHTML('beforeend', `<li>${item.id}</li>`);
        });
    });
}
init();
//
const paragraph = document.createElement('h1');
paragraph.classList.add('text-center');
paragraph.setAttribute('id', 'world');
paragraph.textContent = 'Hello World!';
console.log(paragraph);
document.body.appendChild(paragraph);
//
const heading = document.createElement('h1');
heading.classList.add('headings');
heading.setAttribute('id', 'head');
heading.textContent = 'Hello World!';
document.body.appendChild(heading);
console.log(heading);
//
const createAvatar = (url, className) => {
    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.classList.add(className);
    document.body.appendChild(img);
    return img;
}
console.log(createAvatar('/avatar/person.png', 'circle'));
console.log(createAvatar('/avatar/user.png', 'rounded'));
document.body.appendChild(createAvatar('/avatar/person.png', 'circle'));
//
const button = document.querySelector('#app-button');
button.addEventListener('click', () => {
    console.log('Button clicked');
});
//
const button = document.querySelector('#app-button');
button.addEventListener('click', () => {
    setTimeout(() => {
          console.log('Button is clicked already');
    }, 2000);
});
//
const button = document.querySelector('#app-button');
console.log('A');
button.addEventListener('click', () => {
    console.log('B');
});
console.log('C');
//
const button = document.querySelector('#app-button');
console.log('a');
button.addEventListener('click', () => {
    console.log('b');
});
console.log('c');
//
const button = document.querySelector('#app-button');
button.addEventListener('click', () => {
    button.setAttribute('disabled', 'disabled');
    console.log('Clikced');
});
//
const button = document.querySelector('#app-button');
button.addEventListener('click', () => {
    button.setAttribute('disabled', 'disabled');
    button.textContent = 'Loding...';
    console.log('Loding...');
});
//
const button = document.querySelector('#app-button');
button.addEventListener('click', () => {
    button.setAttribute('disabled', 'disabled');
    button.textContent = 'The app is loading...';
    console.log('Loding...');
});
//
const button = document.querySelector('#app-button');
button.addEventListener('click', () => {
    setTimeout(() => {
        console.log('Hello World!');
    }, 2000);
});
//
const button = document.querySelector('#app-button');
button.addEventListener('click', () => {
    setTimeout(() => {
       button.setAttribute('disabled', 'disabled');
       button.textContent = 'Loading.......';
       console.log('Button is clicked after 3 seconds');
       alert('Time has elapsed');
    }, 3000);
});
//
const button = document.querySelector('#menu-sidebar');
const sidebar = document.querySelector('#app-sidebar');
button.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});
//
const button = document.querySelector('#theme');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
});
//
///////////////////////////////////////////////////
const disable = document.querySelector('#disable');
const enable = document.querySelector('#enable');
const start = document.querySelector('#start');
const color = document.querySelector('#color');
const white = document.querySelector('#white');
const text = document.querySelector('#heading');

disable.addEventListener('click', () => {
    start.setAttribute('disabled', 'disabled');
});
enable.addEventListener('click', () => {
    start.removeAttribute('disabled');
});
start.addEventListener('click', () => {
    text.insertAdjacentHTML('beforeend', `<h1>Hello World!</h1>`);
});
color.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
});
white.addEventListener('click', () => {
    setTimeout(() => {
        document.body.style.backgroundColor = 'gray';
    }, 3000);
});
//
//////////////////////////////////////////////////
button.addEventListener('click', event => {
    //event callback
});
//
const button = document.querySelector('#my-button');
button.addEventListener('click', event => {
    console.log(event);
});
//
button.addEventListener('click', event => {
    console.log(event.currentTarget);
});
//
const button = document.querySelector('#my-button');
button.addEventListener('click', event => {
    const clickedElement = event.currentTarget;
    console.log(clickedElement.textContent);
    console.log(event.currentTarget);
});
//
const button = document.querySelector('#my-button');
button.addEventListener('click', event => {
    console.log(event.currentTarget);
});
//
const button = document.querySelector('#my-button');
button.addEventListener('click', event => {
    console.log(event.currentTarget.classList.toggle('active'));
});
//
const button = document.querySelector('button');
button.addEventListener('click', event => {
    console.log(event.currentTarget);
});
//
const buttons = document.querySelector('button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log(event.currentTarget);
    });
});
//
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget); // the <button> that was clicked
    });
});
//
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log(event.currentTarget.textContent);
    });
});
//
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log(event.currentTarget.textContent);
    });
});
//
const buttons = document.querySelectorAll('button');