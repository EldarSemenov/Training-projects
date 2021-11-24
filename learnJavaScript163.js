const headline = document.querySelector('#headline');
headline.remove();
document.body.style.backgroundColor = 'yellow';
document.documentElement.classList.add('dark-mode');
//
document.documentElement.style.backgroundColor = 'pink';
//
const remoeveWelcomeMessage = () => {
    const element = document.querySelector('#welcome-message');
    element?.remove();
}
remoeveWelcomeMessage();
//
const form = document.querySelector("#payment-form");
console.log(form.dataset);
const currency = form.dataset.currency;
console.log(currency);
//
const form = document.querySelector('#payment-form');
console.log(form.dataset);
console.log(form.dataset.currency);
console.log(form.dataset.userId);
//
const navbar = document.querySelector('#navbar');
navbar.dataset.userId = 1000;
console.log(navbar.dataset);
navbar.dataset.rememberMe = false;
console.log(navbar.dataset);
//
const getUserIdFromCard = () => {
    const card = document.querySelector('#user-card');
    const userId = card.dataset.userId;
    return Number.parseInt(userId, 10);
}
console.log(getUserIdFromCard());
//
const getIsActiveFromCard = () => {
    const card = document.querySelector('#user-card');
    const isActive = card.dataset.isActive;
    return isActive === 'true';
}
console.log(getIsActiveFromCard());
//
const h1 = document.querySelector('h1');
console.log(h1.parentElement);
//
const h1 = document.querySelector('h1');
console.log(h1.closest('.main'));
console.log(h1);
//
const getUserIdFromElement = element => {
    const card = element.closest('.user-card');
    return Number.parseInt(card.dataset.userId, 10);
}
console.log(getUserIdFromElement(document.querySelector('#name')));
console.log(getUserIdFromElement(document.querySelector('#description')));
//
const headline = document.querySelector('#headline');
headline.remove();
document.body.style.backgroundColor = 'pink';
document.documentElement.style.backgroundColor = 'green';
document.documentElement.classList.add('dark-mode');
//
const form = document.querySelector('#payment');
console.log(form.dataset);
const currency = form.dataset.currency;
console.log(currency);
console.log(form.dataset.currency);
console.log(form.dataset);
console.log(Number.parseInt(form.dataset.userId, 10));
//
const navbar = document.querySelector('#navbar');
console.log(navbar.dataset);
navbar.dataset.userId = 20;
navbar.dataset.rememberMe = false;
navbar.dataset.cardNumber = 8247634;
console.log(navbar.dataset);
navbar.dataset.rememberMe === 'true';
console.log(navbar.dataset);
//
const h1 = document.querySelector('h1');
console.log(h1.parentElement);
//
const h1 = document.querySelector('h1');
h1.closest(".main");
console.log(h1);
//
const getUserIdFromElement = element => {
    const card = element.closest('.user-card');
    return Number.parseInt(card.dataset.userId, 10);
}
console.log(getUserIdFromElement(document.querySelector('#name')));
console.log(getUserIdFromElement(document.querySelector('#description')));
//
const user = {
    id: 1,
    name: 'Sam Green',
    age: 29
};
const values = Object.values(user);
const keys = Object.keys(user);
const entries = Object.entries(user);
console.log(values);
console.log(keys);
console.log(entries);
//
const age = 18;
const person = {
    name: 'Jhon',
    age
}
//
const isAdmin = false;
const darkMode = true;

const settings = {
    isAdmin,
    darkMode
}
console.log(settings);
//
const sum = (a, b) => {
    console.log(a);
    console.log(b);
    let total = a + b;
    console.log(total);
    return total;
}
sum(1, 3);
//
const sum = (a, b) => {
    console.log({a});
    console.log({b});
    let total = a + b;
    console.log({total});
    return total;
}
sum(2, 2);
//
const getUser = (id, name) => {
    return {id, name};
}
console.log(getUser(2, 'Sam'));
console.log(getUser(5, 'Alex'));
//
const getProduct = (a, b) => {
    console.log({a, b});
    let product = a * b;
    console.log({product});
    return product;
}
getProduct(3, 3);
//
const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true
    }
};
//const id = config.id;
//const isAdmin = config.isAdmin;
//const theme = config.theme;

const {id, isAdmin, theme} = config;
//
const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {id, name, isAdmin = false} = user;
console.log(isAdmin);
//
const name = 'Document title';
const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {id, name: UserName, isAdmin} = user;
console.log(user);
console.log(UserName);
//
const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {id, name, isAdmin: admin} = user;
console.log(admin);
//
const firstPerson = {
    name: 'Sam',
    age: 18
};
const secondPerson = {
    age: 25,
    type: 'admin'
};
const mergeObjects = {...firstPerson, ...secondPerson};
console.log(mergeObjects);
//
const userLocation = {
    lat: 24.8374,
    lng: 2.3433
};
const getLatLng = userLocation => {
    const {lat, lng} = userLocation;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
}
console.log(getLatLng(userLocation));
//
const user = {
    details: {
        name: {
            firstName: 'Sam'
        }
    },
    data: null
};
console.log(user.details?.name?.firstName);
console.log(user.data);
console.log(user.data?.id);
console.log(user.children?.names);
console.log(user.details?.parent?.firstName);
//
const data = {
    temperatures: [-3, 14, 4]
}
let firstValue = undefined;
if(data.temperatures) {
    firstValue = data.temperatures[0];
}
const firstValue = data.temperatures?.[0];
//
const person = {
    age: 43,
    name: 'Sam'
};
const upperCasedName = person.name?.toUpperCase();
console.log(upperCasedName);
//
const sum = values => {
    return values?.[0] + values?.[1];
}
console.log(sum([3, 5]));
console.log(sum([]));
//
const getName = name => {
    return name ?? 'N/A';
}
console.log(getName('Sam'));
console.log(getName());
console.log(getName(undefined));
//
const getPlaceHolder = () => {
    console.log('getPlaceHolder called');
    return 'N/A';
}

const sayHello = name => {
    return `Hello ${name ?? getPlaceHolder()}`;
}
console.log(sayHello('Eldar'));
console.log(sayHello(''));
console.log(sayHello());
//
const getPushMessage = status => {
    const message = {
        received: 'Restaurant started working on your order.',
        prepared: 'Driver is picking up your food.',
        en_route: 'Driver is cycling your way!',
        arrived: 'Enjoy your food!'
    };
    return message[status] ?? 'Unknown status';
}
console.log(getPushMessage('received'));
//
const tweets = [
    {
        id: 93473743874,
        message: 'Hello Tweeter',
        created_at: '2020-01-03 11:46:00',
        author: {
            id: 934934,
            firstName: 'Jad',
            lastName: 'Joubran',
            handle:'JoubranJad'
        }
    },
    {
        id: 923849288888888,
        message: 'How do you keep track of your notes?',
        created_at: '2021-02-19 15:32:00',
        author: {
            id: 3233775774,
            firstName: 'Sam',
            lastName: 'Green',
            handle: 'SamGreen'
        }
    }
];
tweets.forEach(tweet => {
    console.log(tweet.author.handle);
});
//
const tweets = [
    {
    id: 934783842983290,
    message: 'Hello Twitter',
    created_at: '2020-01-03 11:46:00'
    },
    {
        id: 200394888838888,
        message: 'How do you keep track of your notes?',
        created_at: '2021-02-19 15:32:00'
    }
];
const messages = tweets.map(tweet => tweet.message);
console.log(messages);
*/
const tweets = [
    {
        id: 10512,
        message: "Hello Twitter 👋",
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 41241,
        message: "How do you keep track of your notes?",
        stats: {
            likes: 14,
            retweets: 20
        }
    }
];
const act = tweets.filter(tweet => {
    return tweet.stats.likes > 30;
});
console.log(act)