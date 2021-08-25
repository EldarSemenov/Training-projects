const getName = name => {
    return name ?? 'N/A';
}
console.log(getName("Alex"));
console.log(getName(undefined));
console.log(getName(null));
//
const getPlaceHolder = () => {
    console.log('getPlaceHolder called');
    return 'N/A';
}
const sayHello = name => {
    return `Hello ${name ?? getPlaceHolder()}`
}
console.log(sayHello('Sam'));
console.log(sayHello(undefined));
//
const foo = null ?? 'default string';
console.log(foo);
const baz = 23 ?? 1000;
console.log(baz);
//
const getAge = user => {
    return user.age ?? 'unknown';
}
console.log(getAge({age: 19}));
console.log(getAge({}));
//
const getWelcomeMessage = user => {
    return `Welcome ${user.fullName ?? "user"}`;
}
console.log(getWelcomeMessage({fullName: "Sam Green"}));
console.log(getWelcomeMessage({}));
//
const translations = {
    welcome: {
        dutch: "Welkom",
        french: "Bienvenue",
        english: "Welcome"
    }
};
console.log(translations);

const getTranslation = (language) => {
    return translations.welcome[language] ?? "Welcome"
};
//console.log(getTranslation(translations.welcome[french]));
//
const user = {
    details: {
        name: {
            firstName: "Edvard"
        }
    }
}
const name = user.details?.name?.firstName ?? "N/A";
const lastName = user.details?.name?.lastName ?? 'Not applicable';
console.log(name);
console.log(lastName);
//
const user = {
    id: 1,
    name: 'Sam',
    age: null
}
console.log(user.age);
console.log(user.birthday);
//
const getFullName = user => {
   return user.info?.name ?? 'N/A';
}
console.log(getFullName({info:{name: 'Sam'}}));
console.log(getFullName({info: null}));
console.log(getFullName({}));
//
const getPaymentValue = user => {
    return user.payment?.details?.value ?? 0;
}
console.log(getPaymentValue({id: 1, name: 'Alex'}));
console.log(getPaymentValue({id: 2, name: 'Sam', payment: {details: {value: 39}}}));
//
const getFullName = user => {
    return user.info?.name[0].toUpperCase() + user.info?.name.substring(1).toLowerCase();
}
console.log(getFullName({info: {name: 'ALEX'}}));
console.log(getFullName({info: null}));
console.log(getFullName({}));
//
const getPushMessage = status => {
    if(status === 'received'){
        return 'Restaurant strated working on your order';
    } else if (status === 'prepared'){
        return 'Driver is picking up your food';
    } else if (status === 'en_route'){
        return 'Driver is cycling your way!';
    } else if (status === 'arrived'){
        return 'Enjoy your food!';
    } else {
        return 'Unknown status';
    }
}
console.log(getPushMessage('en_route'));
//
const getPushMessageTwo = status => {
    const messages = {
        'received': 'Restaurant started working on your order.',
        'prepared': 'Driver is picking up your food.',
        'en_route': 'Driver is cycling your way!',
        'arrived': 'Enjoy your food!'
    };
    return messages[status] ?? 'Unknown status';
}
console.log(getPushMessageTwo('received'));
//
const chooseNumber = number => {
    const messages = {
        'one': 'Your code is 2983',
        'two': 'Your code is 2832842874',
        'three': 'Your code is the word - Nice',
        'four': 'You have no code',
        'five': 'Code is 222'
    };
    return messages[number] ?? 'You need to choose the number'
};
console.log(chooseNumber("78"));
console.log(chooseNumber('three'));
console.log(chooseNumber('five'));
//
const getSatus = (host, user, booking) => {
    const messages = {
        pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
        done: `${host} hopes you had a great stay`
    };
    return messages[booking.status] ?? 'Unknown booking status';
}
const booking1 = {
    status: "pending"
};
console.log(getSatus('Sam', 'Alex', booking1));

const booking2 = {
    status: "confirmed"
};
console.log(getSatus('Charlie', 'Blake', booking2));

const booking3 = {
    status: "canceled"
};
console.log(getSatus('Eldar', 'Tom', booking3));
//
const name = 'Sam';
const number = 0;

if(name) {
    console.log('First condition');
}
if(number) {
    console.log('Second condition')
}
//
const tweets = [ 
    {
        id: 928289473287438742,
        message: 'Hello Twiiter 😀',
        created_at: '2020-01-03 11:46:00',
        author: {
            id: 298298347347,
            firstName: 'Eldar',
            lastName: 'Semenov',
            handle: 'ES'
        }
    },
    {
        id: 9347348799282093,
        message: 'How do you keep track of your notes?',
        created_at: '2021-02-19 15:32:00',
        author: {
            id: 'Sam',
            lastName: 'Green',
            middleName: 'Liberty',
            handle: 'SM'
        }
    }
];
console.log(tweets.length);
tweets.forEach(tweet => {
    console.log(tweet);
});
tweets.forEach(tweet => {
    console.log(tweet.author.handle);
});
tweets.forEach(tweet => {
    console.log(tweet.author?.lastName);
    console.log(tweet.author?.middleName ?? `Not applicable`);
});
//
const grades = [
    {
        date: '2018-12-15',
        grade: 14
    },
    {
        date: '2018-12-14',
        grade: 18
    }
];
const getNumberOfTestsTaken = grades => {
    return grades.length;
};
console.log(getNumberOfTestsTaken(grades));
//
const sampleUsers = [
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
const logFullNames = users => {
    return users.forEach(user => {
        console.log(`${user.firstName} ${user.lastName}`);
    });
}
logFullNames(sampleUsers);
//
const results = [
    {
        date: '2018-12-13',
        grade: 14
    },
    {
        date: '2018-12-15',
        grade: 18
    }
];
const getSumGrades = results => {
    let sum = 0;
    results.forEach(result => {
        sum += result.grade;
    }); return sum;
}
console.log(getSumGrades(results));
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
    }); return total / users.length;
}
console.log(getAverageAge(users));