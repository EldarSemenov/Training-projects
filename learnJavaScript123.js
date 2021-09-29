const showOrHideConsent = user => {
    const element = document.querySelector('#eu-consent');
    if(user.isEU) {element.style.display = "";}
    else {element.style.display = 'none';}
}
showOrHideConsent({
    id: 1,
    isEU: false
});
showOrHideConsent({
    id: 2,
    isEU: true
});
//
const showPayment = user => {
    const element = document.querySelector("#payment");
    if(user.payment) {element.style.display = "";}
    else {element.style.display = 'none';}
}
showPayment({
    name: 'Alex',
    payment: false
});
showPayment({
    name: 'Tom',
    payment: true
});
//
const passExam = student => {
    const element = document.querySelector("#exam");
    if(student.passedExam) {element.style.display = ''}
    else {element.style.display = 'none'} 
}
passExam({
    name: 'Jason Muro',
    passedExam: false
});
passExam({
    name: 'Eldar Neumann',
    passedExam: true
});
//
const showTeslaMessage = customer => {
    const element = document.querySelector(`#tesla`);
    if(customer.bought) {element.style.display = ``;}
    else {element.style.display = `none`;}
}
showTeslaMessage({
    name: 'Katty Poll',
    bought: false
});
showTeslaMessage({
    name: 'Eldar Neumann',
    bought: true
});
//
const hideMessage = () => {
    const element = document.querySelector('.eu');
    element.style.display = 'none';
}
hideMessage();
//
const headline = document.querySelector("#headline");
headline.remove();
//
const removeWelcomeMessage = () => {
    const element = document.querySelector("#welcome-message");
    element?.remove();
}
removeWelcomeMessage();
//
const toggleDarkTheme = () => {
    document.documentElement.classList.toggle(`dark`);
}
toggleDarkTheme();
//
const form = document.querySelector("#payment-form");
console.log(form.dataset);
const currency = form.dataset.currency;
console.log(currency);
//
const element = document.querySelector("#payment-form");
console.log(element.dataset);
//
const navbar = document.querySelector("#navbar");
navbar.dataset.userId = 4000;
navbar.dataset.rememberMe = false;
console.log(navbar.dataset);
const rememberMe = navbar.dataset.rememberMe === 'true';
console.log(navbar.dataset);
//
const getUserIdFromCard = () => {
    const card = document.querySelector("#user-card");
    const userId = card.dataset.userId;
    return Number.parseInt(userId, 10);
}
console.log(getUserIdFromCard());
//
const getPriceTesla = () => {
    const element = document.querySelector("#tesla");
    const price = element.dataset.price;
    return Number.parseInt(price, 10);
}
console.log(getPriceTesla());
//
const getIsActiveFromCard = () => {
    const card = document.querySelector("#user-card");
    const isActive = card.dataset.isActive;
    return isActive === "true";
}
console.log(getIsActiveFromCard());
//
const getIsActiveFromCard1 = () => {
    const card = document.querySelector("#user-card");
    return card.dataset.isActive;
}
console.log(getIsActiveFromCard1());