const getSelectedCountry = () => {
    return document.querySelector("#select").value;
};

const dropdown = document.querySelector("#select");
const h1 = document.querySelector("h1");

dropdown.addEventListener("change", event => {
    console.log(getSelectedCountry());
});

const getUserComment = () => {
    return document.querySelector("#user-comment").value;
};

const comment = document.querySelector("#user-comment");
comment.addEventListener("keyup", () => {
    console.log(getUserComment());
});

const getUserName = () => {
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    return `${firstName.value} ${lastName.value}`;
};

const form = document.querySelector("#form");
const fullName = document.querySelector("#full-name");

form.addEventListener("keyup", () => {
    fullName.textContent = getUserName();
});

const getFullName = () => {
    const fullName = document.querySelector("#full-name");
    return `${fullName.value}`;
};

const form = document.querySelector("#form");
const name = document.querySelector("#name");

form.addEventListener("keyup", () => {
    name.textContent = getFullName();
});

const disableButton = button => {
    return button.setAttribute("disabled", "disabled");
};

const enableButton = button => {
    return button.removeAttribute("disabled");
};

const disButton = document.querySelector("#btn-disable");
const enButton = document.querySelector("#btn-enable");
const startButton = document.querySelector("#start");

disButton.addEventListener("click", () => disableButton(startButton));
enButton.addEventListener("click", () => enableButton(startButton));

startButton.addEventListener("click", () => {
    console.log("The START button is activated");
});

const banner = document.querySelector("#banner");
banner.style.backgroundColor = "red";

const showOrHideEuConsent = user => {
    const element = document.querySelector("#eu-consent");
    if (user.isEu) {
        element.style.display = "";
    } else {
        element.style.display = "none";
    }
};

showOrHideEuConsent({
    id: 1,
    isEu: true,
});
