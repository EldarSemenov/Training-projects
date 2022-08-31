const email = document.querySelector("#email");
console.log(email.value);

const emptyName = () => {
    return (document.querySelector("#user-name").value = "");
};
const emptyButton = document.querySelector("#empty-name");
emptyButton.addEventListener("click", () => {
    emptyName();
});

const addButton = document.querySelector("#add-name");
const value = document.querySelector("#user-name");
addButton.addEventListener("click", () => {
    value = `<li>${value[value]}</li>`;
});

const getSelectedCountry = () => {
    const dropdown = document.querySelector("#countries-dropdown");
    return dropdown.value;
};

const dropdown = document.querySelector("#countries-dropdown");

dropdown.addEventListener("change", () => {
    console.log(getSelectedCountry());
});

const getUserComment = () => {
    const userComment = document.querySelector("#user-comment");
    return userComment.value;
};

const userComment = document.querySelector("#user-comment");

userComment.addEventListener("keydown", () => {
    console.log(getUserComment());
});

const getFullName = () => {
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    return `${firstName.value} ${lastName.value}`;
};

const fullName = document.querySelector("#full-name");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

const updateFullName = () => {
    fullName.textContent = getFullName();
};

firstName.addEventListener("keyup", () => {
    updateFullName();
});
lastName.addEventListener("keyup", () => {
    updateFullName();
});

const getFullName = () => {
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    return `${firstName.value} ${lastName.value}`;
};

const newName = document.querySelector("#new-name");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

const updateFullName = () => {
    newName.textContent = getFullName();
};

firstName.addEventListener("keyup", () => {
    updateFullName();
});
lastName.addEventListener("keyup", () => {
    updateFullName();
});

const element = document.querySelector("#first-item");
element.classList.add("highlighted");
console.log(element);

element.classList.remove("highlighted");
console.log(element);

const box = document.querySelector("#box");
console.log(box.classList.contains("activated"));
console.log(box.classList.contains("highlighted"));

const box = document.querySelector("#box");
box.classList.toggle("activated");
console.log(box);
box.classList.toggle("activated");
box.classList.toggle("activated");
box.classList.replace("activated", "vegetables");
box.classList.add("active", "highlighted");
box.classList.remove("vegetables", "highlighted");

const handleItemClick = li => {
    li.classList.toggle("highlighted");
};

document.querySelectorAll("#shopping-list li").forEach(li => {
    li.addEventListener("click", event => {
        handleItemClick(event.currentTarget);
    });
});

const banner = document.querySelector("#banner");

console.log(banner.getAttribute("id"));
console.log(banner.getAttribute("disabled"));

const button = document.querySelector("#login");
console.log(button.getAttribute("disabled"));
button.removeAttribute("disabled");
button.setAttribute("disabled", "disabled");
banner.setAttribute("id", "navbar");
console.log(button.hasAttribute("disabled"));
console.log(banner);

console.log(button);

const disableStart = button => {
    button.setAttribute("disabled", "disabled");
};
const enableStart = button => {
    button.removeAttribute("disabled");
};

const disStart = document.querySelector("#disable-btn");
const enStart = document.querySelector("#enable-btn");
const start = document.querySelector("#start-btn");

disStart.addEventListener("click", () => {
    disableStart(start);
});

enStart.addEventListener("click", () => {
    enableStart(start);
});
