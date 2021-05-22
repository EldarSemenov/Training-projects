let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray);
let newArray = apps.split(",");
console.log(newArray);
console.log(newArray.join("-"));
//
const str = 'The quick brown fox jumps over the lazy dog';
const words = str.split(' ');
console.log(words);
console.log(words[3]);
//
const chars = str.split('');
console.log(chars[0]);
//
const strCopy = str.split();
console.log(strCopy);
const message = "You are welcome!";
console.log(message.replace(" ", "_")); 
console.log(message);
//
const message1 = "You are welcome!";
console.log(message1.replaceAll(" ", "-"));
console.log(message1);
//
const getSlug = name => {
    let result = name.toLowerCase();
    result = result.substring(0, 15);
    result = result.replaceAll(" ", "-");
    return result;
}; console.log(getSlug("IKEA table"));
console.log(getSlug("200cm Bed"));
console.log(getSlug("Bedside lavalamp"));
console.log(getSlug("A B C noodles"));
console.log(getSlug("This is the new sentense that will be igmored"));
//
const sen = "This is the sentence";
const re = sen.substring(5, 7);
console.log(re);
//
const getReadyPassword = sentence => {
    let outcome = sentence.toUpperCase();
    outcome = outcome.substring(0, 100);
    outcome = outcome.replaceAll("1", "One");
    outcome = outcome.replaceAll("2", "Two");
    outcome = outcome.replaceAll("3", "Three");
    outcome = outcome.replaceAll("4", "Four");
    outcome = outcome.replaceAll("5", "Five");
    outcome = outcome.replaceAll("6", "Six");
    outcome = outcome.replaceAll("7", "Seven");
    outcome = outcome.replaceAll("8", "Eight");
    outcome = outcome.replaceAll("9", "Nine");
    outcome = outcome.replaceAll("0", "Zero");
    outcome = outcome.replaceAll("", "-");
    outcome = outcome.replaceAll(" ", "_");
    return outcome;
};
console.log(getReadyPassword("23 My Car"));
console.log(getReadyPassword(""));
console.log(getReadyPassword("9 1 Mario"));
console.log(getReadyPassword("kjsdkvlkndcvwlevnjwenvb972y39723jhkjbsvdsdvsv"));
//
const getCountTodos = todos => {
    return todos.split(",").length;
}; console.log(getCountTodos("Brush the teeth,wash the floor,cleanse the table"));
//
const users = [
    {
        id: 1,
        name: "Alex Blue"
    },
    {
        id: 2,
        name: "Sam Doe"
    }
];
const usernameArray = users.map(user => user.name);
console.log(usernameArray);
const csv = usernameArray.join(", ");
console.log(csv);
//
const usersNames = users => {
    return users.map(user => user.name).join(", ");
}; console.log(usersNames(users));
//
const usersIDs = users => {
    return users.map(user => user.id + ".").join(" - ");
}; console.log(usersIDs(users));
//
const html = `<ul> ${users.map(user => `<li>${user.name}</li>`).join("")} </ul>`;
console.log(html);
const numbers = [15, 10, 20];
const allAbove10 = numbers.every(number => number >= 10);
console.log(allAbove10);
const allAbove15 = numbers.every(number => number !== 13);
console.log(allAbove15);
//
const isBelowThreshhold = (currentValue) => currentValue < 40;
const array = [1, 30, 39, 29, 10, 13];
console.log(array.every(isBelowThreshhold));
//
const numbers1 = [15, 10, 20];
const someOver18 = numbers1.some(number => number >= 18);
console.log(someOver18);
//
const someUnder10 = numbers1.some(num => num < 10);
console.log(someUnder10);
//
const array1 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array1.some(even));
//
const num = [10, 20, 30, 40];
const oddNum = (number) => number % 2 !== 0;
console.log(num.some(oddNum));
//
const gradesShouldBeIncreased = grades => {
    return grades.some(grade => grade < 10);
}; console.log(gradesShouldBeIncreased([10, 12, 19]));
console.log(gradesShouldBeIncreased([12, 19, 9]));
//
const shouldCamcelExam = grades => {
    return grades.every(grade => grade >= 20);
}; console.log(shouldCamcelExam([20, 21, 22, 25, 19]));
console.log(shouldCamcelExam([20, 21, 22, 23, 30]));
//
const items = ["Pen", "Paper"];
console.log(items.length);
items.length = 0;
console.log(items);
//
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers2.splice(4, 2);
console.log(numbers2);
//
const months = ['Jan', 'March', 'April', "June"];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);
//
const apps1 = ['Calculator', 'Whatsapp', 'Chrome', 'Firefox'];
const resetApps = apps1 => {
    return apps1.length = 0;
}; console.log(resetApps(apps1));
//
const removeFirstApp = apps1 => {
    apps1.splice(0, 1);
    return apps1;
}; console.log(removeFirstApp(apps1));
//
const ap = ['calculator', 'whatsup', 'firefox', 'chrome'];
const deletSecondIndex = ap => {
    ap.splice(1, 1, 'HaHa');
    return ap;
}; console.log(deletSecondIndex(ap));
//
const grades1 = [10, 15, 5];
const sum = grades1.reduce((total, current) => {
    return total + current;
}, 0);
console.log(sum);
//
const grades2 = [5, 5];
const multiply = grades2.reduce((total, currentValue) => {
    return total * currentValue;
}); console.log(multiply);