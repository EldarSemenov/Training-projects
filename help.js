export class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}

export const votingAge = 18;

export const settings = {
    theme: "light",
    admin: false,
};

export const votingAge = 18;

export const getWelcomeMesasge = () => {
    return `Welcome to our website`;
};

export class Helpers {
    constructor(word) {
        this.word = word;
    }
    toLowerCase() {
        return this.word.toLowerCase();
    }
    toUpperCase() {
        return this.word.toUpperCase();
    }
    capitalize() {
        return (
            this.word[0].toUpperCase() + this.word.substring(1).toLowerCase()
        );
    }
}

export default class NumericHelper {
    constructor(number) {
        this.number = number;
    }
    isOdd() {
        return this.number % 2 !== 0;
    }
    isEven() {
        return this.number % 2 === 0;
    }
}
