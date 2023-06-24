const fab = document.querySelector("#fab");
const attendee = document.querySelector("#attendee-name");
const modal = document.querySelector("#app-modal");
const form = document.querySelector("#ateendee-form");
const list = document.querySelector("#list");

const toggleModal = () => {
    modal.classList.toggle("show");
    fab.classList.toggle("rotate");
    if (modal.classList.contains("show")) {
        attendee.focus();
    } else {
        attendee.blur();
    }
};

const init = () => {
    fab.addEventListener("click", toggleModal);

    form.addEventListener("submit", event => {
        event.preventDefault();
        toggleModal();
        attendee.blur();
        list.insertAdjacentHTML(
            "afterbegin",
            `<li tabindex="0" class="deletable">${attendee.value}</li>`
        );
        attendee.value = "";
    });
};
init();

document.addEventListener("keyup", event => {
    const key = event.key;
    if (key === "n" && !modal.classList.contains("show")) {
        toggleModal();
    }
    if (key === "Escape" && modal.classList.contains("show")) {
        toggleModal();
    }
});
