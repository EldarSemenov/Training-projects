//
import {Helper} from "./learnJavaScript118.js";

new Helper();
//
import {votingAge} from "./learnJavaScript118.js";
import {settings} from "./learnJavaScript118.js";
import {settings, votingAge} from "./learnJavaScript118.js";
//
export const votingAge = 18;

export const getWelcomeMessage = () => {
    return `Welcome to our website`;
}
export const sum = (a, b) => {
    return a + b;
}
//
export class Helpers {
    constructor(word) {
        this.word = word
    }
    upperCase() {
        return this.word.toUpperCase();
    }
    lowerCase() {
        return this.word.toLowerCase();
    }
    capitalize() {
        return this.word[0].toUpperCase() + this.word.substring(1).toLowerCase();
    }
}
//
export class Voting {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    canVote(age) {
        return age >= 18;
    }
}
//
export default class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + 
        word.substring(1).toLowerCase();
    }
}
//
export default class Helper {}

export const votingAge = 18;
//
export default class NumericHelper {
    constructor(number) {
        this.number = number;
    }
    isEven() {
        return this.number % 2 === 0;
    }
    isOdd() {
        return this.number % 2 === 1;
    }
}
//
export default class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
}
//
export default class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        }).then(response => response.json());
    }
}
//
export default class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
}