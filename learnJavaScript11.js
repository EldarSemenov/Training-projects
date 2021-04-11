const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
const removeFirstElement = apps => {
    apps.splice(0, 1);
    return apps;
}; console.log(removeFirstElement(apps));
//
const $apps = ['calculator', 'tv', 'phone', 'smartphone'];
const removeSecond = $apps => {
    $apps.splice(1, 1);
    return $apps;
}; console.log(removeSecond($apps));
//
const browsers = ['Chrome', 'Firefox', 'Safari', 'Opera'];
const emtyArray = browsers => {
    browsers.length = 0;
    return browsers;
}; console.log(emtyArray(browsers));
//
const concatTwoArrays = (firstHalf, secondHalf) => {
    return [...firstHalf, ...secondHalf];
}; console.log(concatTwoArrays(["Me", "You"], ["I", "We"]));
// SPLIT INTO AN ARRAY
const splitString = string => {
    return [...string];
}; console.log(splitString("Hi, how are you?"));
//
/*
const getLatLng = location => {
  
    const [lat, lng] = location;
    return `The lat is ${lat} and the lng is ${lng}`;
};
const location = [12.343434, 12.434083];
console.log(getLatLng(location));
*/
const isItZero = number => {
    if (number === 0) {return true;}
    else if (number !== 0) {return false;}
};
console.log(isItZero(""));
console.log(isItZero(12));
console.log(isItZero(0));
console.log(isItZero(-2));
//
const person = {
    first_name: "George",
    last_name: "Larson",
    age: 17
};
const getFirstVoteMessage = person => {
    if (person.age < 18) {return 'Sorry, you are not able to vote';}
    else if (person.age === 18) {return 'This is your first vote';}
    else {return "You have already voted. Thank you!"}
}; console.log(getFirstVoteMessage(person));
//
const getCapitalizeWord = word => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}; console.log(getCapitalizeWord("Antolio"));
//
let upperCaseFunction = (firstName) => {
    return firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
};
let upperCaseLastName = (lastName) => {
    return lastName[0].toUpperCase() + lastName.substring(1).toLowerCase();
}
console.log(upperCaseFunction(`nATASHA`));
console.log(upperCaseLastName(`laGUtiNA`));
//
function testNumber (a) {
    let result;
    if (a > 0) {
        result = `positive`;
    } else {
        result = `negative`
    }
    return result;
}console.log(testNumber(-78));
//
const canVote = age => {
    return age >= 18;
}; console.log(canVote(19));
//





