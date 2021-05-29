/*const name = user.details?.name?.firstName ?? "N/A";
const user2 = {
    name: {
        firstName: "Jason",
        lastName: "Limoe"
    },
    data:{
        idNumber: 83754,
        userName: "Hero of the city"
    },
     
};
const stu = user2.name?.firstName ?? "N/A";
const dob = user2.data?.userName ?? "N";
const dateOfBirth = user2.DOB?.newData ?? "No data";
console.log(stu);
console.log(dob);
console.log(dateOfBirth);
//
const getFullName = user => {
    return user.info?.name ?? "N/A";
}; 
console.log(getFullName({info: {name: "Sam"}}));
console.log(getFullName({info: null}));
console.log(getFullName({}));
//
const getPaymentValue = user => {
    return user.payment?.details?.value ?? "0";
};
console.log(getPaymentValue({id: 1, name: "Alex"}));
console.log(getPaymentValue({id: 2, name: "Sam", payment: {details: {value: 59}}}));
//
const getfuulname = user1 => {
    return user1.info?.name?.toLowerCase() ?? "user";
};
console.log(getfuulname({info: {name: "ALEX"}}));
console.log(getfuulname({info: null}));
console.log(getfuulname({}));
//
const getPushMessage = status => {
    const message = {
        "received": "Restaurant strted working on your order.",
        "prepared": "Driver is picking up your food",
        "en_route": "Driver is cycling your way!",
        "arrived": "Enjoy your food!"
    }; 
    return message[status] ?? "Unknown status";
};
//
const booking1 = {
    status: "pending"
};
const booking2 = {
    status: "confirmed"
};
const booking3 = {
    status: null
}
const getStatus = (host, user, booking) => {
    const messages = {
        "pending": `Hey ${user}, we're awaiting conformation from ${host}.`,
        "confirmed": `Hey ${user}, ${host} is excited to be hosting you.`,
        "canceled": `Unfortunately ${user}, ${host} has canceled your booking request.`,
        "done": `${host} hopes you had a great stay.`
    }; 
    return messages[booking.status] ?? "Unknown booking status."
};
console.log(getStatus("Sam", "Alex", booking1));
console.log(getStatus("Charlie", "Blake", booking2));
console.log(getStatus("Jack", "Lomi", booking3));
//
const student1 = {
    id: 929348
};
const student2 = {
    id: 938350
};
const student3 = {
    id: null
};
const getSudentMessage = (student) => {
    const message = {
        "929348": `Your student number is confirmed`,
        "938350": `Number is verified`
    };
    return message[student.id] ?? "N/A";
};
console.log(getSudentMessage(student1));
console.log(getSudentMessage(student2));
console.log(getSudentMessage(student3));
//
console.log(!true);
console.log(!false);
//
const grades = [10, 8 ,13];
const ll = grades.forEach(grade => {
    console.log(grade);
})
//
const tweets = [
    {
        id: 92472984012430,
        message: "Hello Twitter",
        created_at: "2020-01-03 11:34:00",
        author:{
            id: 928492834,
            firstName: "El",
            lastName: "Neumann",
            handle: "Neu"
        }
    },
    {
        id: 294399999292222,
        message: "How do you keep track of your notes?",
        created_at: "2021-01-28 12:34:00",
        author: {
            id: 9248823482222,
            firstName: "Sam",
            lastName: "Green",
            handle: "SamGreen"
        }
    }
];
tweets.forEach(tweet => {
    console.log(tweet);
});
tweets.forEach(tweet => {
    console.log(tweet.author.handle);
});
//
const getNumberOfTestsTaken = grades1 => {
    return grades1.length;
};
const grades1 = [
    {
        date: "2018-12-13",
        grade: 14
    },
    {
        date: "2018-12-15",
        grade: 18
    }
];
console.log(getNumberOfTestsTaken(grades));
//
const sampleUsers = [
    {
        id: 1,
        firstName: "Sam",
        lastName: "Green"
    },
    {
        id: 2,
        firstName: "Alex",
        lastName: "Blue"
    }
];
const logNames = users => {
    users.forEach(user => {
        console.log(`${user.firstName} ${user.lastName}`);
    });
};
logNames(sampleUsers);
//
const results = [
    {
        date: "2018-12-13",
        grade: 14
    },
    {
        date: "2018-12-15",
        grade: 18
    }
];
const getSumOfGrades = results => {
    let sum = 0;
    results.forEach(result => {
        console.log(result);
        sum += result.grade;
    });
    return sum;
};
console.log(getSumOfGrades(results));
//
const Users = [
    {
        joined_on: "2018-12-13",
        age: 14
    },
    {
        joined_on: "2018=12-15",
        age: 18
    }
];
const getAverageAge = Users => {
    let sum = 0;
    Users.forEach(user => {
        console.log(user);
        sum += user.age;
    }); return sum / Users.length; 
}; 
console.log(getAverageAge(Users));
//
const u_sers = [
    {
        id: 1, 
        name: "Alex"
    },
    {
        id: 2,
        name: "Sam",
        subscription: {
            info: {
                value: 1000
            }
        }
    },
    {
        id: 3, 
        name: "Charlie",
        subscription:{
            info:{
                value: 1000
            }
        }
    }
];
const getTotalValue = u_sers => {
    let sum = 0;
    u_sers.forEach(user => {
        console.log(user);
        sum += user.subscription?.info?.value ?? 0;
    });
    return sum;
};
console.log(getTotalValue(u_sers));
//
const names = ["sam", "Alex"];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);
//
const tweet_s = [
    {
        id: 3287382738273,
        message: "Hello Twitter!",
        created_at: "2020-01-03 11:46:00"
    },
    {
        id: 428974387423423,
        message: "How are you?",
        created_at: "2021-02-19 15:32:43"
    }
];
const messages_ = tweet_s.map(tweet => tweet.message);
console.log(messages_);
//
const recordings = [
    {
        date: "2020-01-03",
        temperature: 3
    },
    {
        date: "2020-01-04",
        temperature: -4
    }
];
const getTemperature = recordings => {
    return recordings.map(recording => 
        recording.temperature);
};
console.log(getTemperature(recordings));
//
const costumers = [
    {
        id: 2,
        firstName: "Sam",
        lastName: "Green"
    },
    {
        id: 3, 
        firstName: "Alex",
        lastName: "Blue"
    }
];
const getFullNamesInUpperCase = costumers => {
    return costumers.map(costumer =>
        `${costumer.firstName} ${costumer.lastName}`.toUpperCase());
};
console.log(getFullNamesInUpperCase(costumers));
*/
const tweets = [
    {
        id: 10512,
        message: "Hello Twitter!",
        status: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 41241,
        message: "How do you keep track of your notes?",
        status: {
            likes: 14,
            retweets: 20
        }
    }
];