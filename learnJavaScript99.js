const sumPositiveNumbers = numbers => {
    let sum = 0;
    numbers.forEach(number => {
        if(number >= 0) {
            return sum += number;
        }
    }); return sum;
};
console.log(sumPositiveNumbers([-12, 12, -12, 10]));
//
const getPositiveTemperature = temperatures => {
    return temperatures.filter(temperature => {
        return temperature >= 0;
    });
};
console.log(getPositiveTemperature([-12, 12, 33, -3, 2, 9]));
//
const getVotersCount = ages => {
    return ages.filter(age => {
        return age >= 18;
    }).length;
};
console.log(getVotersCount([12, 12, 12, 12, 15, 16, 19, 22, 23, 45]));
//
const person = {
    id: 2,
    name: 'Sara Doue',
    age: 23
};
const IncrementAge = person => {
    person.age = person.age + 10;
    return person;
};
console.log(IncrementAge(person));
//
const renderTablesRows = details => {
    return `<tr>
            <td>${details.title}</td>
            <td>${details.value}g</td>
            </tr>`;
};
console.log(renderTablesRows({title: 'Protein', value: 23}));
console.log(renderTablesRows({title: 'Carbs', value: 12}));
//
const logUsersIds = (ids = []) => {
    return ids.forEach(id => {
        console.log(id);
    });
}
logUsersIds([12, 21]);
logUsersIds([]);
//
const sumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => {
        sum += grade;
    }); return sum;
};
console.log(sumGrades([2, 2, 12, 90]));
//
let apps = 'Calculator,Phone,Contacts';
let appsArray = apps.split(',');
console.log(appsArray);
//
const str = 'The quick brown fox jumps over the lazy dog';
const words = str.split(' ');
console.log(words[3]);
const word2 = str.split(' ');
console.log(word2[7]);
//
const message = 'You are welcome!';
const rr = message.replaceAll(' ', '---');
console.log(rr);
//
const words = 'One, two, four';
console.log(words.replace('four', 'three'));
//
const slugName = name => {
    return name.substring(0, 15).toLowerCase().replaceAll(' ', '--') + '...';
};
console.log(slugName('This is the dining table'));
//
const users = [
    {
        id: 1,
        name: 'Sam Doe'
    },
    {
        id: 2,
        name: 'Alex Blue'
    }
];
const userNamesArray = users.map(user => user.name);
console.log(userNamesArray);
const csv = userNamesArray.join(", ");
console.log(csv);
//
const html = `<ul>
${users.map(user => `<li>${user.name}</li>`).join('')}</ul>`;
console.log(html);
//
const html2 = `<ul>
${users.map(user => `<li>${user.id}</li>`).join('')}</ul>`;
console.log(html2);
//
const persons = [
    {
        firstName: 'Alex',
        lastName: 'Blue'
    },
    {
        firstName: 'Merry',
        lastName: 'Tofferson'
    }
];
const html = `<ol>
 ${persons.map(person => `<li> ${person.firstName} </li>`).join("  ")} 
 </ol>`;
console.log(html);
//
const grades = [10, 10, 10];
const sum = grades.reduce((total, current) => {
    return total + current;
}, 0);
console.log(sum);
//
const dimensions = [20, 30];
const [width, height] = dimensions;
console.log(width);
console.log(height);
//
const location = [24.387538, 3.8374];
const getLocationString = location => {
    const [lat, lng] = location;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
};
console.log(getLocationString(location));
//
const getFullName = user => {
    const [firstName, lastName] = user;
    return `${firstName} ${lastName}`;
}
console.log(getFullName(['Eldar', 'Neuman']));
console.log(getFullName(['Delon', 'Ness']));
//
const getApps = (apps1, apps2) => {
    return [...apps1, ...apps2];
}
console.log(getApps(['tv', 'sofa'], ['wine', 'car']));