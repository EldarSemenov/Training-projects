const tabs = document.querySelectorAll(".tabs .tab");

tabs.forEach(tab => {
    tab.addEventListener("click", event => {
        document.querySelector(".tab.active")?.classList.remove("active");
        event.currentTarget.classList.add("active");

        document.querySelector(".content.show")?.classList.remove("show");

        const element = event.currentTarget.dataset.content;
        // document.querySelector(element)?.classList.add("show");
        element?.classList.add("show");
    });
});
