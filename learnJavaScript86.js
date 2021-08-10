const getPositiveTemperatures = temperatures => {
    return temperatures.filter((temperature) => {
        return temperature > 0;
    });
}
console.log(getPositiveTemperatures([-2, 4, -12, 3, -90, 34, 23, -8]));
//
const sum = (a, b) => a + b;
console.log(sum(1, 1));
//
const isLegal = age => age >= 18;
console.log(isLegal(99));
//
const triple = value => value * 3;
console.log(triple(9));
//
const multiply = (a, b) => a * b;
console.log(multiply(2, 2));
//
const numbers = [9, 5, 14, 3, 11];
const NumbersAboveTen = numbers.filter(number => number >= 10);
console.log(NumbersAboveTen);
//
const numbersLessThenTen = numbers.filter(number => number <= 10);
console.log(numbersLessThenTen);
console.log(numbers);
//
const names = ['Sam', 'Alex', 'Charlie'];
const result = names.find(name => name === 'Alex');
console.log(result);
//
const grades = [20, 19, 18, 20, 15, 17, 19];
const act = grades.map(grade => grade * 2);
console.log(act);
//
const getRaisedGrades = grades => {
    return grades.map(grade => {
        if(grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    }).join("; ");
}
console.log(getRaisedGrades(grades));
//
const numbers = [10, 9, 8, 7, 5, 4, 3, 2, 1]
const getDecreasedNumbers = numbers => {
    return numbers.map(number => {
        if(number - 2 < 0) {
            return "sorry, not able to count";
        }
        return number - 2;
    }).join("---");
};
console.log(getDecreasedNumbers(numbers));
console.log(numbers);
//
const getPositiveTemperatures = temperatures => {
    return temperatures.filter(temperature => temperature >= 0);
};
console.log(getPositiveTemperatures([2, -1, 10, -3, 11, -23]));
//
const getFreezingTemp = temperatures => {
    return temperatures.filter(temperature => temperature < 0);
};
console.log(getFreezingTemp([-11, 23, -56]));
//
const getYear = (years, searchYear) => {
    return years.find(year => year === searchYear);
};
console.log(getYear([2022, 2023, 2024], 2023));
console.log(getYear([2022, 2023, 2024], 2025));
//
const getStringSizes = strings => {
    return strings.map(string => string.length);
};
console.log(getStringSizes(['ball', 'earth', 'thing', 'mama', 'understanding']));
//
const grades = [12, 19, 20, 17, 14, 9];
console.log(grades);
//
const getNumberOfGrades = grades => {
    return grades.length;
};
console.log(getNumberOfGrades(grades));
//
const getSumOfGrades = grades => {
    let sum = 0;
    grades.forEach(grade => sum += grade);
    return sum;
};
console.log(getSumOfGrades(grades));
//
const getAverageValue = grades => {
   let sum = 0;
   grades.forEach(grade => sum += grade);
   return sum / grades.length;
};
console.log(getAverageValue(grades));
//
const getPassingGrades = grades => {
    return grades.filter(grade => grade >= 10).join("--");
};
console.log(getPassingGrades(grades));
//
const getFailingGrades = grades => {
    return grades.filter(grade => grade <= 9);
};
console.log(getFailingGrades(grades));
//
const getRaisedGrades = grades => {
    return grades.map(grade => {
        if(grade + 1 > 20){
            return 20;
        }
        return grade + 1
    }).join('=====');
};
console.log(getRaisedGrades(grades));
//
let language = "JavaScript";
console.log(language[language.length - 2]);
console.log(language.substring(0, 4));
//
function capitalizeWord(word){
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
};
console.log(capitalizeWord("toMMY"));