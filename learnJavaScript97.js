const user = {
    details: {
        name: {
            firstName: 'Sam'
        }
    },
    data: null
}
const one = user.details?.name?.firstName;
const two = user.data?.id;
const three = user.cildren?.names;
const four = user.details?.parent?.firstName;
console.log(one);
console.log(two);
console.log(three);
console.log(four);
//
const getFullName = user => {
    return user.info?.name;
};
console.log(getFullName({info: {name: 'Sam'}}));
console.log(getFullName({info: null}));
console.log(getFullName({}));
//
const data = {
    temperatures: [-3, 14, 4]
};
const firstValue = data.temperatures?.[0];
console.log(firstValue);
//
const person = {
    age: 43,
    name: 'Sam'
};
const uppercasedName = person.name?.toUpperCase();
console.log(uppercasedName);
//
const sum = values => {
    return values?.[0] + values?.[1] ?? 0;
}
console.log(sum([2, 3]));
console.log(sum([]));
//
const getFirstGrade = data => {
    return data.results?.grades?.[0];
}
console.log(getFirstGrade({results: {grades: [18, 14, 19]}}));
console.log(getFirstGrade({results: {}}));
console.log(getFirstGrade({}));
//
const getFullName = user => {
    return user.info?.name?.toLowerCase();
}
console.log(getFullName({info:{name: 'ALEX'}}));
console.log(getFullName({info: null}));
console.log(getFullName({}))
//
const getName = name => {
    return name ?? 'Not applicable';
}
console.log(getName('Sam'));
console.log(getName(undefined));
console.log(getName(null));
console.log(getName(0));
//
const getPlaceHolder = () => {
    console.log('getPlaceHolder');
    return "N/A";
};
const sayHello = name => {
    return `Hello ${name ?? getPlaceHolder()}`;
};
console.log(sayHello('El'));
console.log(sayHello());
//
const getUserName = name => {
    return `Hello ${name ?? 'user'}`;
};
console.log(getUserName());
console.log(getUserName("Tom"));
//
const getAge = user => {
    return user.age ?? 'Unknown';
}
console.log(getAge({age: 19}));
console.log(getAge({}));
//
const getWelcomeMesasge = user => {
    return `Welcome ${user.fullName ?? 'user'}`;
}
console.log(getWelcomeMesasge({fullName: 'Sam Green'}));
console.log(getWelcomeMesasge({}));
//
const translations = {
    welcome: {
        dutch: 'Welkom',
        french: 'Bienvenue',
        english: 'Welcome'
    }
};
const getTranslation = (language) => {
    console.log(translations);
    return translations.welcome[language] ?? 'Welcome';
}
console.log(translations)
//
const name = user.details?.name?.firstName ?? 'N/A';
//
const user = {
    id: 1,
    name: 'Sam',
    age: null
};
console.log(user.age);
console.log(user.birthday ?? 'Not applicable');
//
const getFullName = user => {
    return user.info?.name ?? "N/A";
}
console.log(getFullName({info: {name: 'Sam'}}));
console.log(getFullName({info: null}));
console.log(getFullName({}));
//
const getPaymentValue = user => {
    return user.payment?.details?.value ?? 0;
}
console.log(getPaymentValue({id: 1, name: 'Alex'}));
console.log(getPaymentValue({id: 1, name: 'Sam', payment: {details: {value: 59}}}));
//
const getFullName = user => {
    return user.info?.name?.toLowerCase() ?? 'user';
}
console.log(getFullName({info: {name: 'ALEX'}}));
console.log(getFullName({info: null}));
//
const getPushMessage = status => {
    const message = {
        'received': 'Restaurant started working on your order.',
        'prepared': 'Driver is picking up your food.',
        'en_route': 'Driver is cycling your way!',
        'arrived': 'Enjoy your food!'
    };
    return message[status] ?? 'Unknown status';
};
console.log(getPushMessage('prepared'));
console.log(getPushMessage('ready'));
//
const booking1 = {
    status: 'pending'
};
const booking2 = {
    status: 'confirmed'
};
const booking3 = {
    status: 'canceled'
};
const booking4 = {
    status: 'done'
}

const getStatus = (host, user, booking) => {
    const messages = {
        pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
        done: `${host} hopes you had a grate stay ${user}.`
    };
    return messages[booking.status];
};
console.log(getStatus('Sam', 'Alex', booking1));
console.log(getStatus('Charlie', 'Blake', booking2));
console.log(getStatus('Tom', 'El', booking3));
console.log(getStatus('Jerry', 'El', booking4));
//
const tweets = [
    {
        id: 2938293742742934,
        message: 'Hello Twitter 😺',
        created_at: '2020-01-03 11:46:00',
        author: {
            id: 29429742,
            firstName: 'Jad',
            lastName: 'Joubran',
            handle: 'JadJoubran'
        }
    },
    {
        id: 39489257395735039503,
        message: 'How do you keep of your notes?',
        created_at: '2021-02-19 15:32:00',
        author: {
            id: 924829482,
            firstName: 'Sam',
            lastName: 'Green',
            handle: 'SamGreen'
        }
    }
];
tweets.forEach(tweet => {
    console.log(tweet);
});
tweets.forEach(tweet => {
    console.log(tweet.author?.handle);
});