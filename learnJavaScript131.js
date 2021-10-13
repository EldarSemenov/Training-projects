const form = document.querySelector("#address-form");
form.addEventListener("submit", event => {
    event.preventDefault();
});
//
form.addEventListener("submit", event => {
    event.preventDefault();
});
//
form.addEventListener("submit", event => {
    event.preventDefault();
});
form.addEventListener("submit", event => {
    event.preventDefault();
});
//
const form = document.querySelector("#address-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log('Submitted?');
});
//
const form = document.querySelector("#login-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log('form submitted');
});
//
const form = document.querySelector("#weather-form");

form.addEventListener("submit", event => {
    event.preventDefault();

});
//
const form = document.querySelector("#weather-form");
const city = document.querySelector("#city");

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(city.value);
    getWeatherInfo(city.value);
});
//
const button = document.querySelector("#button");
button.addEventListener('click', () => {
    console.log('Button clicked');
});
//
const button = document.querySelector("#button");

const handleClick = () => {
    console.log('Button is clicked');
}
button.addEventListener('click', handleClick);
//
const button = document.querySelector("#button");
const buttonHandle = () => {
    console.log('This button has clicked.');
}
button.addEventListener('click', buttonHandle);
//
const button = document.querySelector("#button");

const buttonHandle = () => {
    console.log('One');
    console.log('Two');
    console.log('Three');
}
button.addEventListener("click", buttonHandle);

button.removeEventListener('click', buttonHandle);
//
const button = document.querySelector("#button");

const handleButton = () => {
    console.log('One');
    console.log('Two');
    console.log('Three');
}
button.addEventListener("click", handleButton);

button.removeEventListener("click", handleButton);
//
const button = document.querySelector("#button");

const buttonHandle = () => {
    console.log('One');
    console.log('Two');
    console.log('Three');
}
button.addEventListener("click", buttonHandle => {
}
//
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    console.log('One');
    console.log('Two');
    console.log('Three');
}, {
    once: true
});
//
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    console.log('One');
    console.log('Two');
    console.log('Three');
}, {
    once: true
});
//
const button = document.querySelector("#button");

const handleButton = () => {
    console.log("Button is clicked");
}
button.addEventListener("click", handleButton);

button.removeEventListener('click', handleButton);
//
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    console.log('One');
    console.log('Two');
    console.log('Three');
}, {
    once: true
});
//
const button = document.querySelector("#button");

button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent);
}, {
    once: true
});
//
const button = document.querySelector("#button");

const handleButton = event => {
    console.log(event.currentTarget.textContent);
}
button.addEventListener("click", handleButton);

setTimeout(() => {
button.removeEventListener("click", handleButton);
}, 10000);
//
const button = document.querySelector("#button");

const buttonHandle = event => {
   console.log(event.currentTarget.textContent);
}
button.addEventListener("click", buttonHandle);

setTimeout(() => {
    button.removeEventListener("click", buttonHandle);
}, 10000);
//
const button = document.querySelector("#button");

const handleButton = event => {
    console.log(event.currentTarget.textContent);
}
button.addEventListener("click", handleButton);

setTimeout(() => {
    button.removeEventListener("click", handleButton);
}, 3000);