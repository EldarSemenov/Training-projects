export class Helper {
    capitalize(word){
        return word[0].toUpperCase() +
        word.substring(1).toLowerCase();
    }
}
//
export const votingAge = 18;

export const settings = {
    theme: "light",
    admin: false
};
export const list = [2, 4, 5];
//export const plus = (a, b) => {
//    return a + b;
//};
//
export default class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
export function printName(user) {
    console.log(`User's name is ${user.name}`)
};
export function printAge(user){
    console.log(`User is ${user.age} years old`)
}
//
export const votingAge = 18;

export const getWelcomeMessage = () => {
    return "Welcome to our website";
};
//
export class Helpers{
    constructor(word){
        this.word = word;
    }
    upperCase(){
        return this.word.toUpperCase();
    }
    lowerCase(){
        return this.word.toLowerCase();
    }
    capitalize(){
        return this.word[0].toUpperCase() + 
        this.word.substring(1).toLowerCase();
    }
};
//
export default class Helper {
    capitalize(word){
        return word[0].toUpperCase() + 
        word.substring(1).toLowerCase();
    }
}
//
export default class Helper {}
export const votingAge = 18;