const form = document.querySelector('#address-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('form submitted');
});
//
const form = document.querySelector('#weather-form');
const city = document.querySelector('#city');
const submit = document.querySelector('#submit')

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Form submitted');
    console.log(submit.value);
    console.log(city.value);
});
//
const button = document.querySelector('#button');

const handleClick = () => {
    console.log('Button clicked');
}
button.addEventListener('click', handleClick);
//
const button = document.querySelector('#button');
const handleClick = () => {
    console.log('The button Start has clicked');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
//
const button = document.querySelector('#button');
button.addEventListener('click', () => {
    console.log(button.textContent);
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
    console.log('USER REMOVED FOCUS FROM THE NAME');
});
//
const firstName = document.querySelector('#name');

firstName.addEventListener('focus', () => {
    console.log('User focused');
});
firstName.addEventListener('blur', () => {
    console.log('USER REMOVED HIS FOCUS FROM THE FIRSTNAME');
});
//
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready');
});
window,addEventListener('scroll', () => {
    console.log('page scrolled');
});
//
const countries = document.querySelector('#countries');

countries.addEventListener('change', () => {
    console.log(countries.value);
});
//
document.addEventListener('keyup', event => {
    console.log(event.key);
});
//document.addEventListener('keyup', event => {
//    console.log(event.key);
//});
//
const email = document.querySelector('#login-email');
const password = document.querySelector("#login-password");
const login = document.querySelector('#submit-button');

email.addEventListener('focus', () => {
    console.log('user focused on the email section');
    console.log(email.value);
});
email.addEventListener('blur', () => {
    console.log('user got out from the email section');
});

password.addEventListener('focus', () => {
    console.log(password.value);
    console.log('user focused on the password section');
});
password.addEventListener('blur', () => {
    console.log('user got out from the password section');
});

login.addEventListener('click', event => {
    event.preventDefault();
});
//
const countries = document.querySelector('#countries-dropdown');

const handleSelection = event => {
    console.log(event.currentTarget.value);
}
countries.addEventListener('change', handleSelection);
//
const name = document.querySelector('#user-name');
name.addEventListener('keyup', event => {
    console.log(event.key);
});
//
const username = document.querySelector('#user-name');

username.addEventListener('blur', () => {
    if(username.value.length >= 5) {
        console.log(username.classList.add('success'));
        console.log(username.classList.remove('error'));
    } else {
        console.log(username.classList.add('error'));
        console.log(username.classList.remove('success'));
    }
});
//
const aoutomobiles = {
    car: {
        country1: 'Germany',
        country2: 'Japan'
    }
}
const getCountry = country => {
    return aoutomobiles.car[country];
}
const select = document.querySelector('#auto');
const output = document.querySelector('#output');

select.addEventListener('change', () => {
    output.textContent = getCountry(select.value);
});
//
const autos = {
    cars: {
        germany: 'BMW M3',
        usa: 'Tesla Model 3',
        gb: 'Mini 3'
    }
};
const getCarByCountry = country => {
    return autos.cars[country] ?? 'Country';
}

const country = document.querySelector('#country-list');
const output = document.querySelector('#output');

country.addEventListener('change', () => {
    output.textContent = getCarByCountry(country.value);
});
//
const automobiles = {
    countries: {
        usa: 'Tesla Model 3',
        germany: 'Mersedes-Benz AMG3',
        italy: 'Porshe Outback',
        japan: 'Subaru Legacy',
        gb: 'Range Rover Siluet',
        france: 'Pegeot m1',
        korea: 'Kia FrontLine 2',
        canada: 'Leaf Up 3'
    }
}
const getCarByCountry = country => {
    return automobiles.countries[country] ?? 'Something went wrong';
}
const options = document.querySelector('#select');
const output = document.querySelector('#output');

options.addEventListener('change', () => {
    output.textContent = getCarByCountry(options.value);
});
//
const cars = {
    models: {
    tesla_model_3: 45000,
    mersedes_amg3: 90000,
    toyota: 49000
    }
};
const getPriceByCar = price => {
    return cars.models[price];
}

const select = document.querySelector('#options');
const getPrice = document.querySelector('#price');

select.addEventListener('change', () => {
    getPrice.textContent = getPriceByCar(select.value);
});