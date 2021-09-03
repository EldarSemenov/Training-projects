const sampleCourses = [
    {
        id: 1,
        name: 'Learn Programming',
        isCompleted: true
    },
    {
        id: 2,
        name: 'Learn JavaScript',
        isCompleted: false
    }
];
const getCompletedCourses = courses => {
    return courses.filter(course => course.isCompleted);
};
console.log(getCompletedCourses(sampleCourses));
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
const getBigGroups = groups => {
    return groups.filter(group => group.details.messageCount >= 100);
}
console.log(getBigGroups(sampleGroups));
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
};
console.log(getFamilyGroup(sampleGroups));
//
const allGroupsPublic = groups => {
    return groups.every(group => group.details.public);
}
console.log(allGroupsPublic(sampleGroups));
//
const tweets = [
    {
        id: 29323,
        message: 'Hello Twitter 🥳',
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 823472,
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
        name: 'Charlie',
        isVerified: true
    }
];
const exportVerifiedUsers = users => {
    return users.filter(user => user.isVerified).map(user => user.name).join(', ');
};
console.log(exportVerifiedUsers(sampleUsers));
//
const grades = [10, 15, 5];
const sum = grades.reduce((total, current) => {
    return total + current;
}, 0);
console.log(sum);
//
const grades = [
    {grade: 10},
    {grade: 15},
    {grade: 5}
];
const sum = grades.reduce((total, current) => {
    return total + current.grade;
}, 0);
console.log(sum)
//
const tweets = [
    {
        id: 2323,
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 297234,
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
const sumMessageCount = groups => {
    return groups.reduce((total, current) => {
        return total + current.details.messageCount;
    }, 0);
}
console.log(sumMessageCount(sampleGroups));
//
const sampleProducts = [
    {
        price: 10,
        quantity: 3
    },
    {
        price: 5,
        quantity: 4
    }
];
const getCurtTotal = products => {
    return products.reduce((total, current) => {
        console.log(current);
        return total + (current.price * current.quantity); 
    }, 0);
}
console.log(getCurtTotal(sampleProducts));
//
const numbers = [
    {
        price: 10,
        amount: 2
    },
    {
        price: 10,
        amount: 2
    }
];
const getTotal = numbers => {
    return numbers.reduce((total, current) => {
        return total + (current.price * current.amount);
    }, 0);
}
console.log(getTotal(numbers));
//
const sampleRecordings = [
    {value: 2},
    {value: 5}
];
const getProduct = recordings => {
    return recordings.reduce((total, current) => {
        return total * current.value;
    }, 1);
}
console.log(getProduct(sampleRecordings));
//
console.log('Step 1');
nonExistentFunction();
console.timeLog('Step 2');
//
console.log('Step 1');
try{
    nonExistentFunction();
} catch(error){
    console.log('ERROR');
};
console.log('Step 2');
//
console.log('ONE');
try{
    functionOne();
}catch(error){
    console.log(`Error my friend!`);
}
console.log('TWO');
//
const runCode = () => {
    console.log('One');
    try{
        codeMistake()
    }catch(error){
        console.log(error);
    };
    console.log('Two')
};
runCode();