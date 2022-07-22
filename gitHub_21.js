const name = user.details?.name?.firstName;

const user = {
    details: {
        name: {
            firstName: "Sam",
        },
    },
    data: null,
};
console.log(user.details?.name?.firstName);
console.log(user.data?.id);
console.log(user.children?.names);

const data = {
    temperatures: [-3, 14, 4],
};
const firstValue = data.temperatures?.[0];
console.log(firstValue);

const person = {
    age: 43,
    name: "Sam",
};
const upperCasedName = person.name?.toUpperCase();
console.log(upperCasedName);

const getOlaceholder = () => {
    console.log("getPlacehoder called");
    return "N/A";
};

const sayHello = name => {
    return `Hello ${name ?? getOlaceholder()}`;
};

console.log(sayHello("Sam"));
console.log(sayHello());

const getWelcomeMessage = user => {
    return `Welcome ${user.fullName ?? "User"}`;
};
console.log(getWelcomeMessage({ fullName: "Eldar Semenov" }));
console.log(getWelcomeMessage({}));

const name = user.details?.name?.firstName ?? "N/A";

const user = {
    id: 1,
};
const result = 2 + (user.age ?? 18);
console.log(result);

const getPushMessage = status => {
    const messages = {
        received: "Restaurant started working on your order",
        prepared: "Driver is picking up your food",
        en_route: "Driver is cycling your way!",
        arrived: "Enjoy your food!",
    };
    return messages[status] ?? "Unknown status";
};
console.log(getPushMessage("arrived"));
console.log(getPushMessage("get"));

const getMessage = status => {
    const messages = {
        ordered: "Our restaurant started to work on your order.",
        ready: "Our driver picked up your food.",
        on_the_way: "Your order is on the way.",
        arrived:
            "You order has delivered. Enjoy your food and thank you for choosing us!",
    };
    return messages[status] ?? "Unknown status";
};
console.log(getMessage("ordered"));
console.log(getMessage("ready"));
console.log(getMessage("on_the_way"));
console.log(getMessage("arrived"));
console.log(getMessage("ordering"));

const getStatus = (host, user, booking) => {
    const messages = {
        pending: `Hey ${user}, we are awaiting confirmation from ${host}`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
        done: `${host} hopes you had a great stay.`,
    };
    return messages[booking.status] ?? "Error. Unknown status.";
};

const booking1 = {
    status: "pending",
};
const booking2 = {
    status: "confirmed",
};
const booking3 = {
    status: "canceled",
};
const booking4 = {
    status: "done",
};
const booking10 = {
    status: "Loop",
};

console.log(getStatus("Jason", "Eldar", booking1));
console.log(getStatus("Jason", "Eldar", booking2));
console.log(getStatus("Jason", "Eldar", booking3));
console.log(getStatus("Jason", "Eldar", booking4));
console.log(getStatus("Jason", "Eldar", booking10));

const tweets = [
    {
        id: 34873874384,
        message: "Hello Tweeter",
        created_at: "2020-02-03 11:46:00",
        author: {
            id: 2987424,
            firstName: "Jad",
            lastName: "Joubran",
            handle: "JoubranJad",
        },
    },
    {
        id: 834385738753434,
        message: "How do you keep of your notes?",
        created_at: "2021-02-19 15:32:00",
        author: {
            id: 29382,
            firstName: "Sam",
            lastName: "Green",
            handle: "SamGreen",
        },
    },
];
const action = tweets.forEach(tweet => console.log(tweet.author.handle));

const tweets = [
    {
        id: 1080777336298049537,
        message: "Hello Twitter 👋",
        created_at: "2020-01-03 11:46:00",
    },
    {
        id: 1080777336298195435,
        message: "How do you keep track of your notes?",
        created_at: "2021-02-19 15:32:00",
    },
];
const messages = tweets.map(tweet => tweet.message);
console.log(messages);

const tweets = [
    {
        id: 19283,
        message: "Hello Tweeter",
        stats: {
            likes: 41,
            retweets: 54,
        },
    },
    {
        id: 38388,
        message: "How do you keep track of your notes?",
        stats: {
            likes: 14,
            retweets: 20,
        },
    },
];
tweets.filter(tweet => {
    console.log(tweet);
    return tweet.stats.likes > 30;
});
// tweets.filter(tweet => tweet.stats.likes > 30);
const searchId = 38388;
const findId = tweets.find(tweet => tweet.id === searchId);
console.log(findId);

console.log(tweets.some(tweet => tweet.stats.likes > 30));
console.log(tweets.some(tweet => tweet.stats.likes > 100));

console.log(tweets.every(tweet => tweet.stats.likes > 10));
console.log(tweets.every(tweet => tweet.stats.likes > 30));

const csv = tweets.map(tweet => tweet.message).join(" - ");
console.log(csv);

tweets.forEach(tweet => {
    const { likes, retweets } = tweet.stats;
    console.log(likes, retweets);
});

tweets.forEach(tweet => {
    console.log(tweet.id, tweet.message);
});
*/

const sampleUsers = [
    {
        name: "Sam",
        isVerified: true,
    },
    {
        name: "Alex",
        isVerified: false,
    },
    {
        name: "Charlie",
        isVerified: true,
    },
];

const getVerifiedUsers = users => {
    return users
        .filter(user => user.isVerified)
        .map(user => user.name)
        .join(", ");
};
console.log(getVerifiedUsers(sampleUsers));
