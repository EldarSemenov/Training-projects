const title = document.querySelector('h1');
console.log(title);
const navbar = document.querySelector('#navbar');
console.log(navbar);
const item = document.querySelector('.item');
console.log(item);
const b = document.querySelector('#banner .b');
console.log(b);
const correct = document.querySelector('a.menu-link');
console.log(correct);
const attribute = document.querySelector("[disabled]");
console.log(attribute);
//
const div = document.querySelector('div');
console.log(div.textContent);

const paragraph = document.querySelector('p');
console.log(paragraph?.textContent);
if(paragraph) {
    console.log(paragraph.textContent);
}
//
const elements = document.querySelectorAll('p');
console.log(elements);
//
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs.length);
console.log(paragraphs[0]);
console.log(paragraphs[1]);
paragraphs.forEach(p => {
    console.log(p.textContent);
});
//
const links = document.querySelectorAll('a');
const logLinks = [...links].filter(link => link.textContent === 'Login');
console.log(logLinks);
//
const getShortParagraphs = () => {
    return [...document.querySelectorAll('p')].filter(p => p.textContent.length <= 5);
}
console.log(getShortParagraphs());
//
const element = document.querySelector('#test');
element.textContent = 'But this text is the second one';
element.innerHTML = '<strong>Hello World!</strong>';
//
const banner = document.querySelector('#banner');
banner.innerHTML = '';
//
const setWelcomeMessage = name => {
    return document.querySelector('#name').textContent = name;
}
console.log(setWelcomeMessage('Tom!'));
//
const email = document.querySelector('#email');
console.log(email.textContent);
console.log(email.value);

const submit = document.querySelector('#');
//
const getCommentUser = () => {
    return document.querySelector('#user-comment').value;
}
console.log(getCommentUser());
//
const getFullName = () => {
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    return `${firstName.value} ${lastName.value}`;
}
console.log(getFullName());
//
const grade = 15;
if(grade >= 10) {
    console.log('Passing grade');
}

const num = 3;
if(num >= 10) {
    console.log('Passing grade');
}else {
    console.log('Failing grade');
}
//
const grade = 10;
if(grade > 10) {
    console.log('Passing grade');
} else if(grade === 10) {
    console.log('Passing on the limit');
}else {
    console.log('Failing grade');
}
//
function canVote(age) {
    if(age >= 18) {
        return true;
    } return false;
}
console.log(canVote(90));
console.log(canVote(12));
//
const getDescriptionText = text => {
    if(text.length > 10) {
        return text.substring(0, 11) + '...';
    } return text;
}
console.log(getDescriptionText('Hello World!'));
console.log(getDescriptionText('Hello'));
console.log(getDescriptionText('This is a long text area'));
//
function isPassing(grade) {
    if(grade >= 10) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPassing(90));
console.log(isPassing(2));
//
function isPassing(grade) {
    return grade >= 10;
}
console.log(isPassing(9));
console.log(isPassing(11));
//
const numbers = [10, 8, 13, 15];
numbers.push(200);
console.log(numbers);
//
let numbers = [9, 5, 14, 3, 11];

let numberAboveTen = numbers.filter(number => number >= 10);
console.log(numberAboveTen);