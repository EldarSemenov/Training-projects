const getName = name => {
    return name ?? 'N/A';
}
console.log(getName('Sam'));
console.log(getName(undefined));
console.log(getName(null));
console.log(getName());
//
const getPlaceholder = () => {
    console.log('getPlaceholder called');
    return 'N/A';
}
const sayHello = name => {
    return `Hello ${name ?? getPlaceholder()}`;
}
console.log(sayHello('Sam'));
console.log(sayHello());
//
const name = user.details?.name?.firstName ?? 'N/A';
//
const getPushMessage = status => {
    const messages = {
        received: 'Restaurant started working on your order.',
        prepared: 'Driver is picking up your food.',
        en_route: 'Driver is cycling your way!',
        arrived: 'Enjoy your food!'
    };
    return messages[status] ?? 'Unknown status';
}
//
const getStatus = (host, user, booking) => {
    const messages = {
        pending: `Hey ${user}, we're awaiting confirmation from ${host}`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
        done: `${host} hopes you had a great stay` 
    }
    return messages[booking.status] ?? 'Unknown booking status';
}
const booking1 = {
    status: 'pending'
}
console.log(getStatus('Eldar', 'Max', booking1));

const booking2 = {
    status: 'confirmed'
}
console.log(getStatus('Eldar', 'Max', booking2));
//
const tweets = [
    {
        id: 23823,
        message: 'Hello Twitter',
        created_at: '2020-01-03 11:34:00',
        author: {
            id: 832473,
            firstName: 'Jad',
            lastName: 'Joubran',
            handle: 'JoubranJad'
        }
    },
    {
        id: 982847387434,
        message: 'How do you keep track of your notes?',
        created_at: "2021-02-19 15:32:00",
        author: {
            id: 299823837,
            firstName: 'Sam',
            lastName: 'Green',
            handle: 'SamGreen'
        }
    }
];
tweets.forEach(tweet => {
    console.log(tweet.author.firstName);
});
//
const tweets = [
    {
        id: 284738473,
        message: 'Hello Twitter 👋🏻',
        created_at: "2020-01-03 11:45:00"
    },
    {
        id: 938439487263276372637263,
        message: 'How do you keep track of your notes?',
        created_at: '2021-02-19 15:21:22'
    }
];
const messages = tweets.map(tweet => tweet.message);
console.log(messages);
const messages_01 = tweets.forEach(tweet => {
    console.log(tweet.message);
});
console.log(messages_01);
//
const recordings = [
    {
        date: "2020-01-03",
        temperature: 3
    },
    {
        date: '2020-01-04',
        temperature: -4
    }
];
const getTemperatures = recordings => {
    return recordings.map(record => {
        return record.temperature;
    });
}
console.log(getTemperatures(recordings));
//
const tweets = [
    {
        id: 29382,
        message: 'Hello Twitter 😁',
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 32938,
        message: 'How do you keep track of your notes?',
        stats: {
            likes: 14, 
            retweets: 20
        }
    }
];
const action = tweets.filter(tweet => {
    console.log(tweet);
    return tweet.stats.likes > 30;
});
console.log(action);
//
const searchId = 29382;
const tweet = tweets.find(tweet => tweet.id === searchId);
console.log(tweet);
//
const action_two = tweets.some(tweet => tweet.stats.likes > 30);
const action_three = tweets.some(tweet => tweet.stats.likes > 100);
console.log(action_two);
console.log(action_three);
//
const action_4 = tweets.every(tweet => tweet.stats.likes > 10);
const action_5 = tweets.every(tweet => tweet.stats.likes > 100);
console.log(action_4);
console.log(action_5);
//
const tweets = [
    {
        id: 29382,
        message: 'Hello Twitter 😁',
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 32938,
        message: 'How do you keep track of your notes?',
        stats: {
            likes: 14, 
            retweets: 20
        }
    }
];
const csv = tweets.map(tweet => tweet.message).join(', ');
console.log(csv);
//
tweets.forEach(tweet => {
    const {likes, retweets} = tweet.stats;
    console.log(likes, retweets);
});
//
const sampleUsers = [
    {
       name: 'Sam',
       isVerified: true
    },
    {
        name: 'Alex',
        isVerified: false
    },
    {
        name: 'Eldar',
        isVerified: true
    }
];
const getVerifiedUsers = users => {
    return users.filter(user => user.isVerified).map(user => user.name).join(', ');
}
console.log(getVerifiedUsers(sampleUsers));