const isLegal = (age) => {
    return age >= 18;
}; console.log(isLegal(17));
//
const isItLegal = (age) => age >= 18;
console.log(isItLegal(19));
//
const LegalAge = (age) => { return age >= 18;};
console.log(LegalAge(11));
//
const lAge = age => age >= 20;
console.log(lAge(90));
//
const getSum = (a, b) => a + b;
console.log(getSum(90, 10));
//
const double = x => x * 2;
console.log(double(100));
//
const multiply = (a, b) => a * b;
console.log(multiply(22, 90));
// filter method
const friends = [
    {name: "Dolly", age: 23},
    {name: "Bobby", age: 17},
    {name: "Jason", age: 22},
    {name: "Larson", age: 15}
];
console.log(friends.filter(friend => friend.age >= 18));
//
const words = ['limit', 'spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 4);
console.log(result);
//
const dates = [
    {year: 1988},
    {year: 1976},
    {year: 2022},
    {year: 2045},
    {year: 2019}
];
const newDates = dates.filter(date => date.year > 2000);
console.log(newDates);
//
const $words = ["Apolo", "MALDINA", "Rome", "CAPRISE"];
const $newWords = $words.filter(word => word.length > 4);
console.log($newWords);
//
const apps = ["phone", "calculator", "applewatch", "clock"];
console.log(apps.includes("phone"));
console.log(apps.includes("C++"));
//
const arrayNumber = [12, 1, 90, 100, 2938, 44, 121, 834];
console.log(arrayNumber.includes(90));
//
const pets = ['cat', 'dog', 'bear', 'goat', 'tiger'];
console.log(pets.includes('cat'));
console.log(pets.includes('chetas'));
//
const elements = ["Drink", "Sleep", "Code", "Repeat the process"];
console.log(elements.join("   -   "));
//
const str = "Eat,Sleep,Code,Repeat";
console.log(str.split(","));
// 
const string = 'The quick brown fox jumps over the lazy dog';
const words_s = string.split(' ');
console.log(words_s[7]);
//
const chars = string.split('');
console.log(chars[8]);
//
const ages = [18, 20, 33, 90];
const agesPlusOne = ages.map(age => age + 100);
console.log(agesPlusOne);
//
const $arrayNumber = [2, 2, 2, 2, 2];
const map1 = $arrayNumber.map(x => x * 5);
console.log(map1);






 