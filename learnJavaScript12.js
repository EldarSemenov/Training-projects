const companies = ["roSno", "WESTERunion", "mOpIRo", "ElEvaNt", "pLiSno"];
companies.forEach(company => (console.log(company[0].toUpperCase() +
company.substring(1).toLowerCase())));
companies.push("hOliBSerno");
console.log(companies);
companies.forEach(company => (console.log(company[0].toUpperCase() +
company.substring(1).toLowerCase())));
//
const numbers = [-100, 100, -200, 200, -300, 300];
const sumPositiveNumbers = numbers => {
    let sum = 0;
    numbers.forEach(function(number){
        if (number > 0) {
            sum += number;
        };
    }); return sum;
}; console.log(sumPositiveNumbers(numbers));
//
const sumNegativeNumbers = numbers => {
    let sum = 0;
    numbers.forEach(number => {
        if (number < 0) {
            sum += number;
        };
    }); return sum;
}; console.log(sumNegativeNumbers(numbers));
//
const oddNumbers = [21, 33, 45, -2, 44, 34, 97, 47, 77];
const sumOddNumber = oddNumbers => {
    let sum = 0;
    oddNumbers.forEach(number => {
        if (number % 2 !== 0) {
            sum += number;
        };
    }); return sum;
}; console.log(sumOddNumber(oddNumbers));
//
