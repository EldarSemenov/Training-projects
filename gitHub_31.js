class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}

import { Helper } from "./help.js";

import { settings, votingAge } from "./help.js";

console.log(new Helper("word"));

console.log(settings);
console.log(votingAge);

import { getWelcomeMesasge, votingAge } from "./help.js";

console.log(getWelcomeMesasge());
console.log(`The voting age is ${votingAge}`);

import { Helpers } from "./help.js";
import NumericHelper from "./help.js";

const capitalizeName = name => {
    return new Helpers(name).capitalize();
};
console.log(capitalizeName("eldar"));
console.log(capitalizeName("aLEX"));

const lowerName = name => {
    return new Helpers(name).toLowerCase();
};
console.log(lowerName("JASON"));

const upperName = name => {
    return new Helpers(name).toUpperCase();
};
console.log(upperName("wetin"));

const isNumberOdd = number => {
    return new NumericHelper(number).isOdd();
};
console.log(isNumberOdd(13));
console.log(isNumberOdd(14));
