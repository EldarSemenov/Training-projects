const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(p => console.log(p));

const links = [...document.querySelectorAll("a")];

links.filter(link => console.log(link.textContent === "Login"));

const links = document.querySelectorAll("a");

const action = [...links]
    .filter(link => link.textContent === "Login")
    .map(link => link.textContent)
    .join(", ");

console.log(action);

const links = document.querySelectorAll("a");

const action = [...links]
    .filter(link => link.textContent === "One")
    .map(link => link.textContent.length)
    .join(", ");

console.log(action);

const usersName = name => {
    return (document.querySelector("#name").textContent = name);
};
usersName("Sam");
usersName(`<h2>You have been hakced</h2>`);

const userName = name => {
    return (document.querySelector("span").textContent = name);
};
userName("Eldar");
userName(`<h1>Hello Worlds!</h1>`);

const secondUserName = name => {
    return (document.querySelector("#name").textContent = name);
};
secondUserName("Mike");
secondUserName(`<h1>You have been hacked duke!</h1>`);
secondUserName(alert("You have been hacked!"));

const sampleUsers = [
    {
        id: 2342,
        firstName: "Alex",
        lastName: "Trudo",
    },
    {
        id: 2322,
        firstName: "Jason",
        lastName: "Lee",
    },
];

const logUsersNames = names => {
    names.forEach(name => {
        console.log(`${name.firstName} ${name.lastName}`);
    });
};

logUsersNames(sampleUsers);

const email = document.querySelector("#email");
console.log(email.value);

const getEmail = () => {
    const address = document.querySelector("#email");
    return address.value;
};

document.querySelector("#form").addEventListener("submit", event => {
    event.preventDefault();
    console.log(getEmail());
});

const getFullNameUser = () => {
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    return `${firstName.value} ${lastName.value}`;
};

document.querySelector("#form").addEventListener("submit", event => {
    event.preventDefault();
    console.log(getFullNameUser());
});

const emptyUserName = () => {
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    firstName.value = "";
    lastName.value = "";
};

const getFullNameOfUser = () => {
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    return `${firstName.value} ${lastName.value}`;
};

const form = document.querySelector("#form");

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(getFullNameOfUser());
    emptyUserName();
});
