class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
    get(endpoint){
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
    put(endpoint, body) {
        return this._send('put', endpoint, body);
    }
    post(endpoint, body) {
        return this._send('post', endpoint, body);
    }
    delete(endpoint, body) {
        return this._send('delete', endpoint, body);
    }
}
////////////////////////////////////////////////////
const form = document.querySelector('#todo-form');
const button = document.querySelector('#button-add');
const title = document.querySelector('#todo-title');
const category = document.querySelector('#todo-category');
const list = document.querySelector('#todos-list');

const API = new FetchWrapper('https://api.learnjavascript.online/demo');

const getTodos = () => {
    API.get('/todos').then(data => {
        console.log(data.todos);
        list.innerHTML = "";
        data.todos.forEach(todo => {
            list.insertAdjacentHTML('beforeend', 
            `<li><div class="card">[${todo.category}] ${todo.title}</div></li>`)
        });
    });
}

form.addEventListener('submit', event => {
    event.preventDefault();
    button.setAttribute('disabled', 'disabled');

    API.put('/todos', {
        title: title.value,
        category: category.value
    }).then(data => {
        console.log(data);

        if(!data.error) {
            getTodos()
        }
    })
    .finally(() => {
        button.removeAttribute('disabled');
    });
});

getTodos();
///////////////////////////////////////////

const FORM = document.querySelector('#form');
const INPUT = document.querySelector('#product');
const SELECT = document.querySelector('#select');
const LIST = document.querySelector('list');

const addList = () => {
    LIST.innerHTML = ''
    LIST.insertAdjacentHTML('beforeend',
    `<li>[${INPUT.value}] ${SELECT.value}</li>`);
}

FORM.addEventListener('submit', event => {
    event.preventDefault();
    addList();
});
//
class User {
    constructor(age) {
        this.age = age;
    }
    getInfo() {
        const isLegal = () => {
            return this.age >= 18;
        }
        return {
            age: this.age,
            isLegal: isLegal()
        };
    }
}
const user = new User(12);
console.log(user.getInfo());
//
const delay = (callback, milliseconds) => {
    setTimeout(() => {
        callback()
    }, milliseconds);
};
delay(() => {
    console.log('This will be delayed after 2 seconds');
}, 2000);
//
console.log('Step 1');
try{
    nonExistingFunction();
    console.log('Step 2');
}catch(error) {
    console.log('Step 3');
    console.error(error);
}
console.log('Step 4');
//
const sayHello = () => {
    console.log('Hello!');
}
console.log('Step 1');
try{
    sayHello();
    console.log('Step 2');
}catch(error) {
    console.log('Step 3');
    console.error(error);
}
console.log('Step 4');
//
const sayHello = name => {
    if(!name) {
        throw new Error('name must be provided');
    }
    console.log(`Hello ${name}`);
}
console.log(sayHello('Sam'));
console.log(sayHello());
//
console.log('Code before');
try{
    sayHello();
}catch(error) {
    console.error('Wrong usage for sayHello')
}
console.log('Code After');
//
const canVote = age => {
    if(!age) {
        throw new Error('Age is required');
    } 
    return age >= 18;
}
console.log(canVote(20));
console.log(canVote(14));
console.log(canVote());
try{
    canVote();
} catch (error) {
    console.error(error);
}
//
const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}
getUsers();
//
const getUsers = async () => {
    const response = await
    fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
}
getUsers();
//
const getNumber = () => {
    return new Promise(resolve => {
        resolve(42);
    });
}
getNumber().then(value => {
    console.log(value);
});
//
const getNumber = () => {
    return new Promise(resolve => {
        resolve(42);
    });
}
getNumber().then(value => {
    console.log(value);
});
//
const getNumber = async () => {
    return 42;
}
getNumber().then(value => {
    console.log(value);
});
//
const receiveNumber = async () => {
    return 2973;
}
receiveNumber().then(value => {
    console.log(value);
});
//
const getNum = async () => {
    return 924734;
}
getNum().then(value => {
    console.log(value);
});
//
const getNumber = async () => {
    return 3872039845;
}
getNumber().then(value => {
    console.log(value);
});
//
const getRandomNumber = async () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}
getRandomNumber().then(value => {
    console.log(value);
});
//
const getMinimumVotingAge = async () => {
    return 18;
}
getMinimumVotingAge().then(value => {
    console.log(value);
});
//
async function getValue() {
    return 42;
}
getValue().then(value => {
    console.log(value);
});
//
const getValue = async () => {
    return 42;
}
getValue().then(value => {
    console.log(value);
});
//
class User {
    async isAdmin(type) {
        return type === 'admin';
    }
}
const user = new User;
user.isAdmin('admin').then(value => {
    console.log(value);
});
//
class User{
    async isAdmin(type) {
        return type === 'CODE';
    }
}
const user = new User;
user.isAdmin('CODE').then(value => {
    console.log(value);
});
//
const canVote = async (age) => {
    return age >= 18;
}
canVote(18).then(result => {
   console.log(result);
});
canVote(17).then(result => {
    console.log(result);
});
//
class User {
    constructor(age) {
        this.age = age;
    }
    async canVote() {
        return this.age >= 18;
    }
}
const user = new User(18);
user.canVote().then(result => {
    console.log(result);
});
//
async function getValue() {
    return 42;
}
const init = () => {
    getValue().then(result => {
        console.log(result);
    });
}
init();
//
async function getValue() {
    return 34;
}
const init = async () => {
    const result = await getValue();
    console.log(result); 
}
init();
//
async function getValue() {
    return 345;
}
const init = async () => {
    console.log(await getValue());
}
init();
//
const getValue = async () => {
    return 45;
}
const init = async () => {
    console.log(await getValue());
}
init();
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds);
    });
}
const init = async () => {
    console.log('A');
    await wait(1000);
    console.log('B');
}
init();