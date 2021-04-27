const sumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => sum += grade);
    return sum; 
}; console.log(sumGrades([12, 34, 46]));
//
const isLegal = age => age >= 18;
console.log(isLegal(12));
console.log(isLegal(19));
//
const double = x => x * 2;
console.log(double(10));
//
const friends = [
    {name: "Abby", age: 22},
    {name: "Bobby", age: 13},
    {name: "Coel", age: 17},
    {name: "Danny", age: 16}
];
const ditermine = friends.filter(friend => friend.age >= 18);
console.log(ditermine);
console.log(friends);
//
const words = ['spray', 'limit', 'exuberant', 'present', 'destruction'];
const result = words.filter(word => word.length > 6);
console.log(result);
//
const apps = ['phone', 'calculator', 'clock'];
const r = apps.includes('phone');
console.log(r);
//
const array1 = [1, 2, 3];
console.log(array1.includes(2));
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('dragon'));
//
const elements = ['eat', 'sleep', 'code', 'repeat'];
console.log(elements.join(", "));
//
const elements1 = ['fire', 'air', 'water'];
console.log(elements1.join());
console.log(elements1.join(''));
console.log((elements1.join('-')));
//
const scv = 'Eat,Sleep,Code,Repeat';
console.log(scv.split(","));
//
const str = 'The quick brown fox jumps over the lazy dog.';
const words1 = str.split(' ');
console.log(words1);
console.log(words1[3]);
const chars = str.split('');
console.log(chars);
console.log(chars[8]);
const strCopy = str.split();
console.log(strCopy);
//
const ages = [18, 20, 21, 29];
const agesPlusTwenty = ages.map(age => age + 20);
console.log(agesPlusTwenty);
//
const array2 = [2, 4, 6, 8, 10];
const map = array2.map(x => x * 2);
console.log(map);
//
const array3 = [10, 10];
const qw = array3.forEach(x => console.log(x));
//
const getPassingGrades = grades1 => {
    return grades1.filter(grade => grade >= 10);
}; console.log(getPassingGrades([10, 12, 38, 4, 9, 8]));
//
const getFreezingTemperature = temperatures => {
    return temperatures.filter(temperature => temperature < 0);
}; console.log(getFreezingTemperature([-10, 34, -1, 23, -12, 78]));
//
const IncludesMinneapolis = cities => {
    return cities.includes("Minneapolis");
}; console.log(IncludesMinneapolis(["New-York", "Boston", "Seattle", "Minneapolis"]));
//
const people = ["Jhon", "Sanderson", "Oliver"];
const getPeopleStr = () => {
    return people.join(", ");
}; console.log(getPeopleStr());
//
const list = "Helen, Monika, Linda, Jennica, Jhon";
const splitNames = () => {
    return list.split("; ");
}; console.log(splitNames());
//
const array4 = ["jj", "as", "uu"];
const MyFunction = () => {
    return array4.map(element => element.toUpperCase());
}; console.log(MyFunction());
//
const doubleGrades = grades2 => {
    return grades2.map(grade => grade * 2);
}; console.log(doubleGrades([10, 2, 45]));