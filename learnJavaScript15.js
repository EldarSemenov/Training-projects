const students = [
    {name: "Johnson", age: 22},
    {name: "Alex", age: 21},
    {name: "Fosner", age: 19},
    {name: "Lee", age: 34},
    {name: "Eldar", age: 36}
]; console.log(students.filter(student => student.age > 20));
//
const words = ['forest', 'magazine', 'shopping', 'new one', 'mix'];
const result = words.filter(word => word.length > 5);
console.log(result);
//
const apps = ["phone", "tv", "console", "door"];
const $result = apps.includes("phone");
console.log($result);
//
const array1 = [12, 23, 34];
console.log(array1.includes(23));
//
const newWords = ["one", "two", "three", "four", "five"];
console.log(newWords.join("   "));
//
const elements = ["Fire", "Water", "Air"];
console.log(elements.join());
console.log(elements.join(""));
//
const abc = "I,You,Me,Code,Succsess";
console.log(abc.split(","));
//
const str = 'The world belongs to God';
const wrd = str.split(" ");
console.log(wrd[4]);
//
const ages = [10, 34, 21, 59, 55];
const agesPlusOne = ages.map(age => age + 100);
console.log(agesPlusOne);
//
const arrayNum = [100, 200, 300, 400, 500];
const map1 = arrayNum.map(x => x * 2);
console.log(map1);
//
const getPassingGrades = grasdes => {
    return grasdes.filter(grade => grade > 10);
}; console.log(getPassingGrades([15, 8, 13]));
//
const getFreezingTemperatures = temperatures => {
    return temperatures.filter(temperature => 
        temperature < 0);
};console.log(getFreezingTemperatures([-22, 34, 12]));
//
const containsAmsterdam = cities => {
    return cities.includes("Minneapolis");
}; console.log(containsAmsterdam(["New York", "Minneapolis", "Boston"]));
//
const getNamesString = people => {
    return people.join(", ");
}; console.log(getNamesString(["Aleks", "Mondeo", "Leo"]));
//
const splitBySemiColon = (string) => {
    return string.split(";");
}; console.log(splitBySemiColon(["Jhon;Jennifer;Loren"]));
//



