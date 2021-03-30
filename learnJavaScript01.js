const double = x => x * 2;
document.getElementById("grades").innerHTML = double(150);

let multiply = (x) => x + x;
document.getElementById("id01").innerHTML = multiply(100);

let action = (a, b, c, d) =>  a * b + c / d;
document.getElementById("id02").innerHTML = action(20, 2, 10, 2);

const friends = [
    {name: "Dolly", age: 22},
    {name: "Arsn", age: 16},
    {name: "Coel", age: 21},
    {name: "Dany", age: 15}
];
friends.filter(friend =>friend.age >= 18);
document.getElementById("id03").innerHTML = friends;

const ages = [10, 10, 10, 10, 10];
const multiplyAges = ages.map(age => age * 2);
document.getElementById("id04").innerHTML = multiplyAges;

const minusAges = ages.map(age => age - 1);
document.getElementById("id05").innerHTML = minusAges;

const manipulation = minusAges.map (age => age + 100);
document.getElementById("id06").innerHTML = manipulation;

const str = "Me,You,We,They,Us,I";
str.split(",");
document.getElementById("id07").innerHTML = str;

let getPassingGrades = grades => {
    return grades.filter(grade => grade >= 10);
}
document.getElementById("id08").innerHTML = getPassingGrades([10, 18, 20, 9, 3]);

const getFreezingTemperatures = temperatures => {
    return temperatures.filter(temperature => temperature <= 0);
}; document.getElementById("id09").innerHTML = 
getFreezingTemperatures([10, 22, -30, 45, -10, -11, 34, -5]);

const containsAmsterdam = cities => {
    return cities.includes("Amsterdam");
}; document.getElementById("id10").innerHTML = 
containsAmsterdam(["Brussell", "Amsterdam", "Minneapolis"]);

let getNamesString = people => {
    return people.join(", ");
}; document.getElementById("id11").innerHTML =
getNamesString(["Alex", "Artur", "Eldar", "Binos"]);

let splitBySemiColon = string => {
    return string.split(";")
};document.getElementById("id12").innerHTML = 
splitBySemiColon("Jhon;Jenifer;Liham");

let namesInUpperCase = names => {
    return names.map(name => name.toUpperCase());
}; document.getElementById("id13").innerHTML =
namesInUpperCase(["jeniffer", "jesica", "fill"]);

let doubleGrades = grades => {
    return grades.map(grade => grade + grade);
}; document.getElementById("id14").innerHTML =
doubleGrades([2, 5, 10, 12, 45]);
