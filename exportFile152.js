export class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}

export const votingAge = 18;

export const settings = {
    theme: 'light',
    admin: false
}
//
export const votingAge = 18;

export const getWelcomeMessage = () => {
    return "Welcome to our website";
}
//
export class Helpers {
    constructor(word) {
        this.word = word;
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
export default class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}
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