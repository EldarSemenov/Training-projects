const getUserIdCard = () => {
    const card = document.querySelector("#user-card");
    const userId = card.dataset.userId;
    return Number.parseInt(userId, 10) + 10;
}
console.log(getUserIdCard());
//
const getTeslaLongRangePrice = () => {
    const tesla = document.querySelector("#tesla");
    const teslaPrice = tesla.dataset.teslaPrice;
    return Number.parseInt(teslaPrice, 10) + 2000;
}
console.log(getTeslaLongRangePrice());
//
const getIsActiveFromCard = () => {
    const card = document.querySelector("#user-card");
    const isActive = card.dataset.isActive;
    return isActive === "false";
}
console.log(getIsActiveFromCard());
//
const getUserIdFromCard = () => {
    const card = document.querySelector("#user-card");
    const userId = card.dataset.userId;
    return Number.parseInt(userId, 10);
}
console.log(getUserIdFromCard());
//
const getIsActiveFromCard = () => {
    const card = document.querySelector("#user-card");
    const isActive = card.dataset.isActive;
    return isActive === 'true';
}
console.log(getIsActiveFromCard());
//
const getTeslaPrice = () => {
    const car = document.querySelector("#tesla");
    const price = car.dataset.price;
    return Number.parseInt(price, 10);
}
console.log(getTeslaPrice());
//
const deliveryInformation = () => {
    const car = document.querySelector("#tesla");
    const delivery = car.dataset.isDelivered;
    return delivery === 'true';
}
console.log(deliveryInformation());
//
const h1 = document.querySelector("h1");
console.log(h1.parentElement);
//
const li = document.querySelector("li");
console.log(li);
console.log(li.parentElement);
//
const element = document.querySelector('h1');
console.log(element.parentElement);
//
const h1 = document.querySelector('h1');
h1.closest('.main');
console.log(h1);
console.log(h1.closest('.main'));
//
const h1 = document.querySelector('h1');
console.log(h1.closest('.second'));
//
const element = document.querySelector('h1');
console.log(element.parentElement);
//
const getParentElemnt = element => {
    return element.parentElement;
}
console.log(getParentElemnt(document.querySelector('h1')));
console.log(getParentElemnt(document.querySelector('p')));
//
const getUserIdFromElement = element => {
    const card = element.closest('.user-card');
    return Number.parseInt(card.dataset.userId, 10);
}
console.log(getUserIdFromElement(document.querySelector('#name')));
console.log(getUserIdFromElement(document.querySelector('#description')));
//
const getNumberFromDataSet = element => {
    const item = element.closest('.container');
    return Number.parseInt(item.dataset.userId, 10);
}
console.log(getNumberFromDataSet(document.querySelector("#title")));
console.log(getNumberFromDataSet(document.querySelector("#description")));
//
const getInfoOfExam = element => {
    const item = element.closest('.container');
    return item.dataset.isPassedExam === 'true';
}
console.log(getInfoOfExam(document.querySelector("#question")));
console.log(getInfoOfExam(document.querySelector("#answer")));
//
const getAgeNumber = element => {
    const item = element.closest('.box');
    return Number.parseInt(item.dataset.isAge, 10);
}
console.log(getAgeNumber(document.querySelector("#question")));
console.log(getAgeNumber(document.querySelector("#answer")));
//
const div = document.querySelector("#container");
div.innerHTML += `<p>Another paragraph</p>`;
div.innerHTML += `<h1>The title goes here</h1>`;
//
const positions = document.querySelector('#job-position');
positions.insertAdjacentHTML("beforeend", `<div class="position">2015-2020</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2020-2021</div>`);
//
const position = document.querySelector("#job");
position.insertAdjacentHTML("beforeend", `<div class="position2">2002-2003</div>`);
position.insertAdjacentHTML("beforeend", `<div class="position3">2004-2005</div>`);
position.insertAdjacentHTML("beforeend", `<div class="position4">2006-2007</div>`);
//
const year = document.querySelector("#years");
year.insertAdjacentHTML("beforeend", 
`<p class="year2">2002-2003</p>`);
year.insertAdjacentHTML("beforeend",
`<p class="year3">2004-2005</p>`);
year.insertAdjacentHTML("beforeend",
`<p class="year4">2006-2007</p>`);
year.insertAdjacentHTML("beforeend",
`<p class="year5">2008-2009</p>`);
year.insertAdjacentHTML("afterbegin", 
`<p class="year0">1998-1999</p>`);
year.insertAdjacentHTML("afterbegin", 
`<p class="-1">1996-1997</p>`);
//
const number = document.querySelector("#number");
number.insertAdjacentHTML("beforeend",
`<h1>101</h1>`);
number.insertAdjacentHTML("afterbegin",
`<h1>99</h1>`);
//
element.insertAdjacentHTML("beforeend",
`<p>An example of a... ... very long paragraph</p>`);
//
const apps = ['Calculator', 'Phone', 'Messages'];
const list = document.querySelector("#apps-list");

apps.forEach(app => {
    list.insertAdjacentHTML("beforeend", `<li>${app}</li>`);
});
//
const cars = ['Tesla 3', 'Volvo', 'Subaru'];
const ol = document.querySelector("#cars");

cars.forEach(car => {
    ol.insertAdjacentHTML("beforeend", `<li>${car}</li>`);
});
//
const cars = ['Tesla 3', 'Volvo', 'BMW 3', 'Subaru', 'Acura'];
const ul = document.querySelector("#cars");
cars.forEach(car => {
    ul.insertAdjacentHTML("beforeend", `<li>${car}</li>`);
});
//
const products = ['apple', 'pear', 'orange', 'watermelon', 'lemon'];
const list = document.querySelector("#list");
products.forEach(item => {
    list.insertAdjacentHTML("beforeend",
    `<li>${item}</li>`);
});
list.insertAdjacentHTML("afterbegin", `<p>Things to buy:</p>`);
//
const renderShoppingList = items => {
    const shoppingList = document.querySelector("#shopping-list");
    items.forEach(item => {
        shoppingList.insertAdjacentHTML("beforeend", 
        `<li>${item}</li>`);
    });
}
const sampleList = ['Orange', 'Banana', 'Coffee', 'Paper'];
console.log(renderShoppingList(sampleList));
//
const iterateCars = models => {
    const cars = document.querySelector("#cars");
   return models.forEach(model => {
        cars.insertAdjacentHTML("beforeend", 
        `<li>${model}</li>`);
    });
}
const firstModelList = ['Tesla Model S', 'Tesla Model 3', 'Tesla Model X'];
const secondModelList = ['Nissan', 'Subaru', 'Toyota', 'AUDI'];
console.log(iterateCars(firstModelList));
console.log(iterateCars(secondModelList));
//
const demonstrateShopList = items => {
    const shoppingList = document.querySelector("#shopping-list");
    items.forEach(item => {
        shoppingList.insertAdjacentHTML("beforeend",
        `<li>${item}</li>`);
    });
}
const list = ['apple', 'orange', 'watermelon'];
console.log(demonstrateShopList(list));
//
const addItemToList = item => {
    const shoppingList = document.querySelector("#shopping-list");
    shoppingList.insertAdjacentHTML("beforeend",
    `<li>${item}</li>`);
}
console.log(addItemToList('Smart Phone'));
console.log(addItemToList('Automobile'));
console.log(addItemToList('Apple Company'));
//
const init = () => {
    const shoppingList = document.querySelector("#shopping-list");
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            shoppingList.insertAdjacentHTML("beforeend",
            `<li>${item.item}</li>`);
        });
    });
}
init();
//
const init = () => {
    const shopList = document.querySelector("#shopping-list");
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            shopList.insertAdjacentHTML("beforeend",
            `<li>${item.item}</li>`);
        });
    });
}
init();
//
const paragraph = document.createElement("p");
paragraph.classList.add("text-center");
paragraph.textContent = 'Hello World!';
console.log(paragraph);
//
document.body.appendChild(paragraph);
//
const div = document.createElement('div');
if(isDarkMode()) {
    div.classList.add("dark-mode");
} else {
    div.classList.add("light-mode");
}
div.textContent = 'Hello Helen!';
document.body.appendChild(div);
*/
const createAvatar = (url, className) => {
    const img = document.createElement('img');
    img.src = url;
    img.classList.add(className);
    return img;
}
console.log(createAvatar('/avatar/person.png', 'circle'));
console.log(createAvatar('/avatar/user.png', 'rounded'));