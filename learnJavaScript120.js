console.log(document.querySelector("h3").textContent);
//
const getTextFromSelector = cssSelector => {
    const element = document.querySelector(cssSelector);
    return element?.textContent ?? "";
}
console.log(getTextFromSelector("h3"));
//
const getText = cssSelector => {
    const element = document.querySelector(cssSelector);
    return element?.textContent ?? "N/A";
}
console.log(getText("h2"));
//
const getTextFromSelector = cssSelector => {
    const element = document.querySelector(cssSelector);
    return element?.textContent ?? '.......';
}
console.log(getTextFromSelector("h1"));
console.log(getTextFromSelector('h4'));
//
const getTextFomSelector = cssSelector => {
    const element = document.querySelector(cssSelector);
    if(!element) {return "././././.";}
    return element.textContent;
}
console.log(getTextFomSelector("h3"));
console.log(getTextFomSelector('h6'));
//
const getTextContentFromCssSelector = cssSelector => {
    const element = document.querySelector(cssSelector);
    if(!element) {
        return ":)";
    }
    return element.textContent;
}
console.log(getTextContentFromCssSelector('h1'));
console.log(getTextContentFromCssSelector('h7'));
//
const getText = cssSelector => {
    const element = document.querySelector(cssSelector);
    return element?.textContent.toUpperCase() ?? ";-)";
}
console.log(getText('h1'));
console.log(getText('k3'));
//
const getTextFromCssSelector = cssSelector => {
    const element = document.querySelector(cssSelector);
    if(!element) {return ":-)";}
    return element.textContent;
}
console.log(getTextFromCssSelector('h3'));
console.log(getTextFromCssSelector('h9'));
//
const getTextContent = cssSelector => {
    const element = document.querySelector(cssSelector);
    return element?.textContent ?? `__________________`;
}
console.log(getTextContent('h3'));
console.log(getTextContent('j3'));
*/
const getSelectedCurrency = () => {
    return document.querySelector('.card.active')
    .textContent;
}
console.log(getSelectedCurrency());
//
const getSelectedCurrency1 = () => {
    return document.querySelector('.card')
    .textContent;
}
console.log(getSelectedCurrency1());