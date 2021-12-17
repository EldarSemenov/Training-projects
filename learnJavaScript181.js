//
const element = document.querySelector('#test');
console.log(element.textContent);
console.log(element.innerHTML);
element.textContent = 'This is the new text!'
element.innerHTML = `<strong>This will be bold</strong>`;
//
const banner = document.querySelector('#banner');
banner.innerHTML = '';
//
const setWelcomeMessage = name => {
    document.querySelector('#welcome-message').innerHTML = 
    `Welcome <strong>${name}!</strong>`;
}
setWelcomeMessage('Peter');
//
const setWelcomeMessage = name => {
    document.querySelector('#name').textContent = `${name}!`;
}
setWelcomeMessage('Sam');
//
const email = document.querySelector('#email');
console.log(email.value);
//
const element = document.querySelector('#first-item');
element.classList.add('highlighted');
console.log(element);
element.classList.remove('highlighted');
console.log(element);
//
const box = document.querySelector('#box');
console.log(box.classList.contains('activated'));
console.log(box.classList.contains('highlighted'));
//
const box = document.querySelector('#box');
box.classList.toggle('activated');
console.log(box);
box.classList.toggle('activated');
console.log(box);
box.classList.toggle('activated');
console.log(box);
box.classList.replace('activated', 'show');
console.log(box);
box.classList.add('active', 'dark', 'highlighted');
console.log(box);
box.classList.remove('activated', 'dark', 'highlighted', 'show');
console.log(box);