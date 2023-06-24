const cars = {
    model: {
        bmw: "BMW M-3 model",
        mercedes: "Mercedes-Benz E-class 400",
        audi: "AUDI A-4",
        volvo: "Volvo CX-54",
        mazda: "Mazda-3ie",
        honda: "Honda Accord",
        chevrolet: "Chevrolet Camaro 12",
    },
};
const getCar = selected => {
    return cars.model[selected] ?? "Error";
};
const dropdown = document.querySelector("#dropdown");
const output = document.querySelector("#output");

dropdown.addEventListener("change", () => {
    output.textContent = getCar(dropdown.value);
});
