const sum = (a, b) => {
    console.log({a});
    console.log({b});
    let total = a + b;
    console.log({total});
    return total;
};
sum(1, 4);
//
const user = {
    id: 1,
    name: 'Sam'
};
const {name, isAdmin = false} = user;
console.log(isAdmin);
//
const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {name, isAdmin = false} = user;
console.log(isAdmin);
//
const name = 'Document title';
const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {name: userName, isAdmin} = user;
console.log(userName);
console.log(user.name);
//
const userLocation = {
    lat: 24.837434,
    lng: 3.8374
};
const getLatLng = userLocation => {
    let {lat, lng} = userLocation;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
};
console.log(getLatLng(userLocation));
//
const getWelcomeMessage = user => {
    return `Welcome ${user.fullName ?? 'user'}`;
}
console.log(getWelcomeMessage({fullName: 'Sam Green'}));
console.log(getWelcomeMessage({}));
//
const getPushMessage = status => {
    const message = {
        'received': 'Restaurant started working on your order.',
        prepared: 'Driver is picking up your food.',
        on_route: 'Driver is cycling your way!',
        arrived: 'Enjoy your food!'
    };
    return message[status] ?? 'Unknown status';
};
console.log(getPushMessage([received]));
console.log(getPushMessage());
//
const getStatus = (host, user, booking) => {
    const messages = {
        pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
        done: `${host} hopes you had a great stay.`
    };
    return messages[booking.status] ?? 'Unknown booking staus';
};
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
};
console.log(getStatus('Eldar', 'Sam', booking1));
console.log(getStatus('El', 'Sam', booking2));
console.log(getStatus('El', 'Sam', booking3));
console.log(getStatus('El', 'Sam', booking4));
console.log(getStatus('El', 'Sam'));
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
const logNames = users => {
    users.forEach(user => console.log(`${user.firstName} ${user.lastName}`));
}
logNames(sampleUsers);
//
const tweets = [
    {
        id: 28372,
        message: 'Hello Twitter 😀',
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 827438,
        message: 'How do you keep track of your notes?',
        stats: {
            likes: 13,
            retweets: 20
        }
    }
];
let a = tweets.filter(tweet => tweet.stats.likes > 30);
console.log(a);
//
const searchId = 827438;
const tweet = tweets.find(tweet => tweet.id === searchId);
console.log(tweet);