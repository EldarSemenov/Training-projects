const booking1 = {
    status: "pending"
};
const booking2 = {
    status: "confirmed"
};
const booking3 = {
    status: "canceled"
};
const booking4 = {
    status: "done"
};
const getSatus = (host, user, booking) => {
    const messages = {
        pending: `Hey ${user}, we are awaiting confirmation from ${host}`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request`,
        done: `${host} hopes you had a great stay`
    };
    return messages[booking?.status] ?? `Unknown booking status 🤪`;
}
console.log(getSatus('Alex', 'Eldar', booking1));
console.log(getSatus('Alex', 'Eldar', 'booking5'));
console.log(getSatus('Alex', 'Eldar', booking2));
console.log(getSatus('Alex', 'Eldar', booking3));
console.log(getSatus('Alex', 'Eldar', booking4));
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
    users.forEach(user => {
        console.log(`${user.firstName} ${user.lastName}`);
    });
}
logNames(sampleUsers);
//
const users = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Sam', subscription: {
        info: {
            value: 59
        }
    }},
    {id: 3, name: 'Charlie', subscription : {
        info: {
            value: 31
        }
    }}
];
const getTotalValue = users => {
    let total = 0;
    users.forEach(user => {
        total += user.subscription?.info?.value ?? 0;
    }); return total;
}
console.log(getTotalValue(users));
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
    return recordings.map(recording => recording.temperature).join(", ");
}
console.log(getTemperatures(recordings));
//
const users = [
    {
        id: 1,
        firstName: `Alex`,
        lastName: `Green`
    },
    {
        id: 2,
        firstName: 'Mike',
        lastName: 'Anderson'
    }
];
const getUpperCasedNames = users => {
    return users.map(user => `${user.firstName} ${user.lastName}`.toUpperCase());
};
console.log(getUpperCasedNames(users));
//
const sampleCourse = [
    {
        id: 1,
        name: 'Learn Programming',
        isCompleted: true
    },
    {
        id: 2,
        name: 'Learn JavaScript',
        isCompleted: false
    },
    {
        id: 3,
        name: 'React',
        isCompleted: false
    }
];
const getCompletedCourses = courses => {
    return courses.filter(course => course.isCompleted);
}
console.log(getCompletedCourses(sampleCourse));
//
const sampleGroups = [
    {
        id: 1,
        title: 'Football',
        details: {
            messageCount: 30,
            public: true
        }
    },
    {
        id: 2,
        title: 'Family',
        details: {
            messageCount: 1014,
            public: false
        }
    }
];
const getFamilyGroup = groups => {
   return groups.find(group => group.title === 'Family');
}
console.log(getFamilyGroup(sampleGroups));
//
const allGroupsPublic = groups => {
    return groups.every(group => group.details.public);
}
console.log(allGroupsPublic(sampleGroups));
//
const sampleUsers = [
    {
        name: 'Sam',
        isVerified: true
    },
    {
        name: 'Charlie',
        isVerified: false
    },
    {
        name: 'El',
        isVerified: true
    }
];
const getVerifiedUsers = users => {
    return users.filter(user => user.isVerified).
    map(user => user.name).join(`, `);
}
console.log(getVerifiedUsers(sampleUsers));
//
const tweets = [
    {
        id: 272424,
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 09237,
        stats: {
            likes: 14,
            retweets: 20
        }
    }
];
const socialImpact = tweets.reduce((total, current) => {
    return total + current.stats.likes + current.stats.retweets;
}, 0);
console.log(socialImpact);
const getSocialImpect = tweets => {
    return tweets.reduce((total, current) => {
        return total + current.stats.likes + current.stats.retweets;
    });
}
console.log(getSocialImpect(tweets));
//
const tweets = [
    {
        id: 10512,
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 41241,
        stats: {
            likes: 14,
            retweets: 20
        }
    }
];
//
const socialImpact = tweets.reduce((total, current) => {
    console.log(current); 
    return total + current.stats.likes + current.stats.retweets;
}, 0);
console.log(socialImpact); 
//
const socialImpact = tweets.reduce((total, current) => {
    console.log(current);
    return total + current.stats.likes + current.stats.retweets;
}, 0);
console.log(socialImpact);