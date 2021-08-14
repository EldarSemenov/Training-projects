const users = [
    {
        id: 1,
        name: "Sam Doe"
    },
    {
        id: 2,
        name: "Alex Blue"
    }
];
const userNamesArray = users.map(user => user.name);
console.log(userNamesArray);
const idUsersArray = users.map(user => user.id);
console.log(idUsersArray);
const csv = userNamesArray.join(", ");
console.log(csv);
const csv = users.map(user => user.name).join(", ");
console.log(csv);
//
const html = `<ul>${users.map(user => `<li>${user.name}</li>`).join("")}<ul>`;
console.log(html);
//
const html2 = `<ol>${users.map(user => `<li>${user.id}</li>`).join('')}</ol>`;
console.log(html2);
//
const users = [
    {
        firstName: "Jason",
        lastName: "Piterson",
        idNumber: 82363,
        phoneNumber: 273346
    },
    {
        firstName: "Karl",
        lastName: "Lee",
        idNumber: 22774,
        phoneNumber: 834223
    }
];
const html = `<ul>${users.map(user => `<li>${user.firstName}</li>`).join('')}</ul>`;
console.log(html);
//
const renderTablesRows = rows => {
    return rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("");
};
//
const getDropdown = countries => {
    return `<option value="">Please select</option>
    ${countries.map(country => `<option value="${country.toLowerCase()}">
    ${country}</option>`).join("")}`;
};
//
const numbers = [15, 10, 20];
const allAbove10 = numbers.every(number => number >= 10);
console.log(allAbove10);
const allAbove15 = numbers.every(number => number >= 15);
console.log(allAbove15);
//
const isBelowThreshold = currentValue => currentValue < 40;
const array = [1, 30, 39, 29, 10, 13];
console.log(array.every(isBelowThreshold));
//
const numbers = [15, 10, 20];
const someOver18 = numbers.some(number => number >= 18);
console.log(someOver18);
const someUnder10 = numbers.some(number => number < 10);
console.log(someUnder10);
//
const array = [1, 2, 3, 4, 5];
const even = element => element % 2 === 0;
console.log(array.some(even));
//
const shouldAdjustGrades = grades => {
    return grades.some(grade => grade < 10);
};
console.log(shouldAdjustGrades([12, 10, 13, 15, 17]));
console.log(shouldAdjustGrades([12, 10, 9]));
//
const cancelExam = grades => {
    return grades.every(grade => grade >= 18);
};
console.log(cancelExam([23, 19, 20]));
console.log(cancelExam([4, 12, 19]));
//
const items = ["Pen", "Paper"];
items.length = 0;
console.log(items);
//
const items = ["Pen", "Paper", "Staples"];
const deletItem = items.splice(0, 1);
console.log(deletItem);
console.log(items);
const deletSecondItem = items.splice(0, 1);
console.log(items);
const delet = items.splice(0);
console.log(items);
//
const array = ["one", "two", "three", "four", "five", "six", "seven"];
const delet = array.splice(2, 3);
console.log(array);
//
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);
//
const apps = ["calculator", "whatsapp", "chrome", "firefox"];
const resetApps = apps => {
    return apps.splice(0);
};
console.log(resetApps(apps));
//
const apps = ['calculator', 'electric car', 'app', 'browser', 'tv'];
const removeFirstApp = apps => {
    apps.splice(0, 1);
    return apps;
};
console.log(removeFirstApp(apps));
//
const removeSecondApp = apps => {
    apps.splice(1, 1);
    return apps;
};
console.log(removeSecondApp(apps));
//
const grades = [10, 15, 5];
const sum = grades.reduce((total, current) => {
    return total + current;
}, 0);
console.log(sum);