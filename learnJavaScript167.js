const button = document.querySelector('button');

const handleClick = () => {
    console.log('Button clicked');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('button clicked');
}, {
    once: true
})
//
const button = document.querySelector('#my-button');

button.addEventListener('click', event => {
    console.log(event.currentTarget.textContent);
}, {
    once: true
});
//
const button = document.querySelector('#my-button');

const handleClick = event => {
    console.log(event.currentTarget.textContent);
}

button.addEventListener('click', handleClick);

setTimeout(() => {
   button.removeEventListener('click', handleClick);
}, 5000);
//
const name = document.querySelector('#name');

name.addEventListener('focus', () => {
    console.log('User focused inside the name');
});
name.addEventListener('blur', () => {
    console.log('User removed focus from the name');
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is Ready!');
});
window.addEventListener('scroll', () => {
    console.log('Page scrolled');
});
//
const countries = document.querySelector('#countries');

countries.addEventListener('change', () => {
    console.log(countries.value);
});

document.addEventListener('keydown', event => {
    console.log(event.key);
});

document.addEventListener('keyup', event => {
    console.log(event.key);
});
//
const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');

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
window.addEventListener('scroll', event => {
    console.log('User scrolled');
});
//
const select = document.querySelector('#countries-dropdown');

select.addEventListener('change', event => {
    console.log(event.currentTarget.value);
});
//
const translations = {
    welcome: {
        dutch: 'Welkom',
        french: 'Bienvenue',
        english: 'Welcome'
    }
}
const getTranslation = language => {
    return translations.welcome[language] ?? 'WELCOME!';
}

const select = document.querySelector('#languages-list');
const output = document.querySelector('#output-text');

select.addEventListener('change', () => {
    output.textContent = getTranslation(select.value);
});
//
const cars = {
    model: {
        USA: 'Tesla Model 3',
        Germany: 'BMW M3',
        Japan: 'Toyota Supra',
        Italy: 'Fiat Lux',
        GB: 'Mini'
    } 
}
const getCarByCountry = auto => {
    return cars.model[auto];
}
const select = document.querySelector('#list');
const result = document.querySelector('#result');

select.addEventListener('change', () => {
    result.textContent = getCarByCountry(select.value);
});