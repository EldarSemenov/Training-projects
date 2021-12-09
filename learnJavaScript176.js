const user = {
    details: {
        name: {
            firrstName: 'Sam'
        }
    },
    data: null
};
console.log(user?.details?.name?.firrstName);
console.log(user.details?.parent?.firrstName);
//
const numbers = [10, 10];

const sum = numbers => {
    return numbers?.[0] + numbers?.[1];
}
console.log(sum(numbers));
//
const getPlaceholder = () => {
    console.log('getPlaceholder called');
    return 'N/A';
}
const sayHello = name => {
    return `Hello ${name ?? getPlaceholder()}`;
}
console.log(sayHello('Sam!'));
console.log(sayHello());
//
const tweets = [
    {
        id: 297323,
        message: 'Hello Twitter',
        created_at: "2020-01-03 11:46:00",
        author: {
            id: 12,
            firstName: 'Jad',
            lastName: 'Joubran',
            handle: 'JoubranJad'
        }
    },
    {
        id: 723487,
        message: 'How do you keep track of your notes?',
        created_at: '2021-02-19 15:32:00',
        author: {
            id: 9827347,
            firstName: 'Sam',
            lastName: 'Green',
            handle: 'SamGreen'
        }
    }
];
tweets.forEach(tweet => {
    console.log(tweet);
    console.log(tweet.author.handle);
});