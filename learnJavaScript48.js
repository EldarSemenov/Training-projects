const sum = (a, b) => a + b; 
console.log(sum(10, 32));
//
const isLegal = age => age >= 18;
console.log(isLegal(23));
//
const triple = value => value * 3;
console.log(triple(10));
//
const multiply = (a, b = 2) => a * b;
console.log(multiply(2, 4));
console.log(multiply(10));
//
const numbers = [9, 5, 14, 3, 11];
const numbersAbobeTen = numbers.filter(number => number >= 10);
console.log(numbersAbobeTen);
//
const names = ["Sam", "Alex", "Charlie"];
const result = names.find(name => name === "Alex");
console.log(result);
//
const numbers1 = [4, 2, 5, 8];
const doubled = numbers1.map(number => number * 2);
console.log(doubled);
//
const grades = [19, 20, 18, 18, 17, 19, 20];
const getRaisedGrades = grades => {
    return grades.map(grade => {
        if(grade + 1 > 20) {return 20;}
        return grade + 1;
    }).join(", ");
}; console.log(getRaisedGrades(grades));
//
const ages = [17, 20, 30, 32, 18, 45];
const agesPlusTen = ages => {
    return ages.map(age => {
        if(age + 10 >= 55){
            return "stop";
        } return age + 10;
    }).join(", ");
}; console.log(agesPlusTen(ages));
//
const scores = [12, 18, 19, 21, 4, 23, 29, 30, 28];
const improveScores = scores => {
    return scores.map(score => {
        if(score + 3 >= 28){
            return "Exelent result";
        } return score + 3;
    }).join(" - ");
};console.log(improveScores(scores));
//
const getPositiveTemperatures = temperatures => {
    return temperatures.filter(temperature => temperature >= 0);
}; console.log(getPositiveTemperatures([-2, 10, 29, -5, -30, -40, 34]));
//
const getFreezingTemperatures = temperatures => {
    return temperatures.filter(temperature => temperature < 0);
}; console.log(getFreezingTemperatures([-2, -4, 45, 3, 45, 1, - 90]));
//
const getYear = (years, searchYear) => {
    return years.find(year => year === searchYear);
}; console.log(getYear([2018, 2019, 2020], 2021));
//
const getStringSizes = strings => {
    return strings.map(str => str.length);
}; console.log(getStringSizes(["mono", "proto", "neo", "storo"]));
///////////////////////////////////////////////////////////////////
const grades1 = [12, 13, 15, 20, 19, 17, 15, 18, 11, 16, 19, 13, 14]; console.log(grades1);
const getNumberOfGrades = grades1 => {
    return grades1.length;
}; console.log(getNumberOfGrades(grades1));
//
const getSumGrades = grades1 => {
    let sum = 0;
    grades1.map(grade => sum += grade);
    return sum;
}; console.log(getSumGrades(grades1));
//
const getAverageGrade = grades1 => {
    let sum =0;
    grades1.map(grade => sum += grade);
    return sum / grades1.length;
}; console.log(getAverageGrade(grades1));
//
const getPassingGrade = grades1 => {
    return grades1.filter(grade => grade >= 15);
}; console.log(getPassingGrade(grades1));
//
const getFailureGrades = grades1 => {
    return grades1.filter(grade => grade <= 15);
}; console.log(getFailureGrades(grades1));
//
const getRaisedGr = grades1 => {
    return grades1.map(grade => {
        if(grade + 1 > 20){
            return 20;
        } return grade + 1
    });
}; console.log(getRaisedGr(grades1));
//
const name1 = " Sam Blue  ";
console.log(name1.trim());
//
const greeting = ' Hello World!    ';
console.log(greeting.trim());
//
const sentence = "Hello there. Welcome!";
console.log(sentence.startsWith("H"));
console.log(sentence.startsWith("Hello"));
console.log(sentence.startsWith("Hey"));
console.log(sentence.startsWith("Sam"));
console.log(sentence.endsWith("."));
console.log(sentence.endsWith("!"));
console.log(sentence.endsWith("Welcome!"));
console.log(sentence.endsWith("Welcome"));
//
const str1 = "Saturday night plans";
console.log(str1.startsWith("Sat"));
console.log(str1.startsWith("Sat", 3));
console.log(str1.startsWith("night", 9));
//
const str2 = 'Cats are the best!';
console.log(str2.endsWith('best', 17));
//
const str = 'To be, or not to be, that is the question.';
console.log(str.endsWith('is', 28));
//
const sentence1 = "Hello there. Welcome!";
console.log(sentence1.includes("hello"));
console.log(sentence1.includes("there."));
//
const getEmailAddress = email => {
    return email.trim();
}; console.log(getEmailAddress("  jonoton.ru.@gmail.com  "));
//
const sentence3 = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word ${word} ${sentence3.includes(word) ? 'is' : 'is not' } in the sentence`);
//
const getMessage = message => {
    return message.endsWith(".");
}; console.log(getMessage("Hello World"));
console.log(getMessage("Welcom home."));
console.log(getMessage("It works!"));
console.log(getMessage("Yes. Correct."));
//
const getMyMessage = message => {
    if(message.endsWith(".")) {
        return message;
    }; return `${message}.`;
}; console.log(getMyMessage("Hello World"));
console.log(getMyMessage("Welcome back."));
console.log(getMyMessage("This is your car!"));
//
const getUnit = text => {
    if(text.includes("C")){
        return "Celsius";
    }else if(text.includes("F")){
        return "Fahrenheit";
    }else{
        return "N/A";
    };
}; console.log(getUnit("It is 15 C today"));
console.log(getUnit("It was 90 F yesterday"));
console.log(getUnit("Why is it 20 C"));
console.log(getUnit("Are you sure that it'll be 55 F?"));
console.log(getUnit("It is expected to be cold."));