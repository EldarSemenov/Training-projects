const tweets = [
    {
        id: 9823587325489757,
        message: "Hello Twitter",
        created_at: "2020-01-03 11:46:00",
        author: {
            id: 2948343,
            firstName: "Jad",
            lastName: "Jourban",
            handle: "JoubranJad",
        },
    },
    {
        id: 429853981084738957483,
        message: "How do you keep track of your notes?",
        created_at: "2021-02-19 15:32:00",
        author: {
            id: 093409347823,
            firstName: "Eldar",
            lastName: "Semenov",
            handle: "EldarSemenov",
        },
    },
];

const info = tweets.forEach(tweet => {
    console.log(tweet);
});

const message = tweets.forEach(tweet => {
    console.log(tweet.message);
});

const handleName = tweets.forEach(tweet => {
    console.log(tweet.author.handle);
});

const getTotalSales = users => {
    let sum = 0;
    users.forEach(user => {
        sum += user.subscription?.info?.value ?? 0;
    });
    return sum;
};

const users = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Sam", subscription: { info: { value: 59 } } },
    { id: 3, name: "Charlie", subscription: { info: { value: 31 } } },
];

console.log(getTotalSales(users));

const getTotalSales = users => {
    let total = 0;
    users.forEach(user => {
        total += user.subscription?.info?.value ?? 0;
    });
    return total;
};

const users = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Sam", subscription: { info: { value: 59 } } },
    { id: 3, name: "Charlie", subscription: { info: { value: 31 } } },
];
console.log(getTotalSales(users)); // 90
console.log("Hello");

const names = ["sam", "Alex"];

const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

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

const getTemperatures = recordings => {
    return recordings.map(record => record.temperature);
};

const recordings = [
    {
        date: "2020-01-03",
        temperature: 3,
    },
    {
        date: "2020-01-04",
        temperature: -4,
    },
];
console.log(getTemperatures(recordings)); // [3, -4]

const tweets = [
    {
        id: 82472,
        message: "Hello Twitter",
        stats: {
            likes: 41,
            retweets: 54,
        },
    },
    {
        id: 27632,
        message: "How do you keep track of your notes?",
        stats: {
            likes: 14,
            retweets: 20,
        },
    },
];
const info = tweets.filter(tweet => tweet.stats.likes > 30);
console.log(info);

const search = 82472;
const information = tweets.find(tweet => tweet.id === search);
console.log(information);

const first = tweets.some(tweet => tweet.stats.retweets < 30);
console.log(first);

const second = tweets.every(tweet => tweet.stats.likes >= 10);
console.log(second);

const tweets = [
    {
        name: "Eldar Semenov",
        id: 10512,
        message: "Hello Twitter 👋",
        stats: {
            likes: 41,
            retweets: 54,
        },
    },
    {
        name: "Jad Jourdan",
        id: 41241,
        message: "How do you keep track of your notes?",
        stats: {
            likes: 14,
            retweets: 20,
        },
    },
];

const csv = tweets.map(tweet => tweet.message).join(", ");
console.log(csv);

const action = tweets.forEach(tweet => {
    const { likes, retweets } = tweet.stats;
    console.log(likes, retweets);
});
const actionTwo = tweets.forEach(tweet => {
    const { name, message } = tweet;
    console.log(name, message);
});

const exportVerifiedUsers = users => {
    return users
        .filter(user => user.isVerified)
        .map(user => user.name)
        .join(", ");
};

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
console.log(exportVerifiedUsers(sampleUsers)); // "Sam, Charlie"

const books = [
    {
        name: "Your Son",
        year: 1988,
        isbn: 92873587345874,
        group: "Family",
    },
    {
        name: "Jason",
        year: 1989,
        isbn: 92873523543345874,
        group: "Adault",
    },
    {
        name: "Bible",
        year: 1990,
        isbn: 92873587345874909090,
        group: "Family",
    },
];
const getFamilyBooks = books => {
    return books
        .filter(book => book.group === "Family")
        .map(book => book.name)
        .join(", ");
};
console.log(getFamilyBooks(books));

const grades = [10, 15, 5];

const sum = grades.reduce((total, current) => {
    return total + current;
}, 0);
console.log(sum);

const grades = [{ grade: 10 }, { grade: 15 }, { grade: 5 }];

const sum = grades.reduce((total, current) => {
    return total + current.grade;
}, 0);
console.log(sum);

const tweets = [
    {
        id: 10512,
        stats: {
            likes: 41,
            retweets: 54,
        },
    },
    {
        id: 41241,
        stats: {
            likes: 14,
            retweets: 20,
        },
    },
];
const socialImpact = tweets.reduce((total, current) => {
    return total + current.stats.likes + current.stats.retweets;
}, 0);
console.log(socialImpact);

console.log("Step 1");
try {
    nonExistentFunction();
} catch (error) {
    console.error(error);
}
console.log("Step 2");

const arr1 = new Array();
arr1.push(10);
const arr2 = new Array();
arr2.push(10);
console.log(arr1 === arr2);

const firstArray = [];
const secondArray = firstArray;
console.log(firstArray);
console.log(secondArray);
firstArray.push(10);
console.log(firstArray);
console.log(secondArray);
*/
const grades = [
    {
        id: 1,
        grade: 12,
        isPassing: false,
    },
    {
        id: 2,
        grade: 14,
        isPassing: true,
    },
];
const entry = grades.find(grade => grade.id === 1);
entry.isPassing = true;
console.log(grades);

const entryTwo = grades.find(grade => grade.id === 2);
entryTwo.isPassing = false;
console.log(grades);
