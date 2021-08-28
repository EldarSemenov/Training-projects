const grades = [
    {
        date: '2018-12-13',
        grade: 14
    },
    {
        date: '2018-12-15',
        grade: 18
    }
];
const getNumberTestsTaken = grades => {
    return grades.length;
}
console.log(getNumberTestsTaken(grades));
//
const samplUsers = [
    {
        id: 1,
        firstName: 'Sam',
        lastName: 'Green'
    },
    {
        id: 2,
        firstName: 'Alex',
        lastName: 'Blue'
    }
];
const lognames = users => {
   return users.forEach(user => {
       console.log(`${user.firstName} ${user.lastName}`);
   });
};
lognames(samplUsers);
//
const results = [
    {
        date: '2018-12-13',
        grade: 14
    },
    {
        date: '2018-12-15',
        grade: 20
    }
];
const getSumOfGrades = results => {
    let sum = 0;
    results.forEach(result => {
        sum += result.grade;
    });
    return sum;
};
console.log(getSumOfGrades(results));
//
const users = [
    {
        joined_on: '2018-12-13',
        age: 14
    },
    {
        joined_on: '2018-12-15',
        age: 18
    }
];
const getAverageAge = users => {
    let total = 0;
    users.forEach(user => {
        total += user.age;
    });
    return total / users.length;
};
console.log(getAverageAge(users));
//
const users = [
    {id: 1, name: 'Alex'},
    {
        id: 2, 
        name: 'Sam',
        subscription: {
            info: {
                value: 59
            }
        }
    },
    {
        id: 3,
        name: 'Charlie',
        subscription: {
            info: {
                value: 31
            }
        }
    }
];
const getTotalSales = users => {
    let total = 0;
    users.forEach(user => {
        total += user.subscription?.info?.value ?? 0;
    });
    return total;
}
console.log(getTotalSales(users));
//
const tweets = [
    {
        id: 29472947294789283,
        message: 'Hello Twitter 👻',
        created_at: '2020-01-03 11:46:00'
    },
    {
        id: 2873122472397438473874,
        message: 'How do you keep track of your notes?',
        created_at: '2021-02-19 15:32:00'
    }
];
const messages = tweets.map(tweet => tweet.message);
console.log(messages);
//
const recordings = [
    {
        date: '2020-01-03',
        temperature: 3
    },
    {
        date: '2020-01-04',
        temperature: -4
    }
];
const getTemperatures = recordings => {
    return recordings.map(record => record.temperature);
};
console.log(getTemperatures(recordings));
//
const users = [
    {
        id: 1,
        firstName: 'Sam',
        lastName: 'Green'
    },
    {
        id: 2,
        firstName: 'Alex',
        lastName: 'Sky'
    }
];
const getFullNames = users => {
    return users.map(user => {
        return `${user.firstName} ${user.lastName}`.toUpperCase();
    });
};
console.log(getFullNames(users));
//
function getLastCharacterOfName(name){
    return name[name.length - 1];
};
console.log(getLastCharacterOfName('Sam'));
//
const capitalizeWord = word => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
};
console.log(capitalizeWord('POLL'));
//
const getNextAge = age => {
    if(age === '') {
        return 0;
    }
    else{ 
        return Number.parseInt(age, 10) + 1
    }
};
console.log(getNextAge(''));
console.log(getNextAge('34'));
//
const getDescriptionText = text => {
    if(text.length > 10) {
        return text.substring(0, 10) + '...';
    } return text;
};
console.log(getDescriptionText('Hello everyone'));
console.log(getDescriptionText('Yes, yes.'));
//
const useCalculator = apps => {
    apps.push('Calculator');
    return apps;
};
console.log(useCalculator(['Tv', 'Phone']));