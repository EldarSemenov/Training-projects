const tweets = [
    {
        id: 10384,
        message: "Hello Twitter!",
        status: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 23882,
        message: "How do you keep track of your notes?",
        status: {
            likes: 14,
            retweets: 20
        }
    }
];
const a = tweets.filter(tweet => {
    console.log(tweet);
    return tweet.status.likes > 30;
}); 
console.log(a);
//
const b = tweets.filter(tweet => tweet.status.likes > 30);
console.log(b);
//
const searchId = 23882;
const c = tweets.find(tweet => tweet.id === searchId);
console.log(c);
const searchId2 = 28282;
const d = tweets.find(tweet => tweet.id === searchId2);
console.log(d);
//
const e = tweets.some(tweet => tweet.status.likes > 30);
const f = tweets.some(tweet => tweet.status.likes > 100);
console.log(e);
console.log(f);
//
const g = tweets.every(tweet => tweet.status.likes > 10);
const h = tweets.every(tweet => tweet.status.likes > 100);
console.log(g);
console.log(h);
//
const sampleCourses = [
    {
        id: 1,
        name: "Learn Programming",
        isCompleted: true
    },
    {
        id: 2,
        name: "Learn JavaScript",
        isCompleted: false
    }
];
const getCompletedCourses = courses => {
    return courses.filter(course => 
        course.isCompleted === true);
};
console.log(getCompletedCourses(sampleCourses));
//
const sampleGroups = [
    {
        id: 1,
        title: "Football",
        details:{
            messageCount: 30,
            isPublic: true
        }
    },
    {
        id: 2,
        title: "Family",
        details: {
            messageCount: 1014,
            isPublic: false
        }
    }
];
const getBigGroups = groups => {
    return groups.filter(group =>
        group.details.messageCount >= 100);
};
console.log(getBigGroups(sampleGroups));
//
const getFamilyGroup = groups => {
    return groups.find(group => group.title === "Family");
};
console.log(getBigGroups(sampleGroups));
//
const allGroupsPublic = groups => {
    return groups.every(group => group.details.isPublic)
};
console.log(allGroupsPublic(sampleGroups));
//
const csv = tweets.map(tweet => tweet.message).join(", ");
console.log(csv);
//
tweets.forEach(tweet => {
    const {likes, retweets} = tweet.status;
    console.log(likes, retweets);
});
const student = {
    first_name: "Alex",
    last_name: "Muro",
    details: {
        id_number: 323,
        funds: 2000
    }
};
const {id_number, funds} = student.details;
console.log(id_number, funds);
//
const sampleUsers = [
    {
        name: "Sam",
        isVerified: true
    },
    {
        name: "Alex",
        isVerified: false
    },
    {
        name: "Charlie",
        isVerified: true
    }
];
const exportVerifiedUsers = users => {
    return users.filter(user => user.isVerified === true).
    map(user => user.name).join(", ");
};
console.log(exportVerifiedUsers(sampleUsers));
//
const grades = [10, 15, 5];
const sum = grades.reduce((total, current) => {
    return total + current
}, 0);
console.log(sum);
//
const grades1 = [
    {grade: 10},
    {grade: 15},
    {grade: 5}
];
grades1.reduce((total, current)=> {
    console.log(current)
});
const sum2 = grades1.reduce((total, current) => {
    return total + current.grade;
}, 0);
console.log(sum2);
//
const tweet_s = [
    {
        id: 10512,
        status:{
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 41241,
        status: {
            likes: 14, 
            retweets: 20
        }
    }
];
const socialImpact = tweet_s.reduce((total, current) => {
    console.log(current);
    return total + current.status.likes + current.status.retweets;
}, 0);
console.log(socialImpact);
//
const theseTweets = [
    {
        id: 10512,
        status: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 41241,
        status: {
            likes: 14,
            retweets: 20
        }
    }
];
const fr = theseTweets.reduce((total, current) => {
    console.log(current);
    return total + current.status.likes + current.status.retweets;
}, 0);
console.log(fr);
//
const samplegroups = [
    {
        id: 1,
        title: "Football",
        details: {
            messageCount: 30,
            public: true
        }
    },
    {
        id: 2,
        title: "Family",
        details: {
            messageCount: 1014,
            public: false
        }
    }
];
const sumMessageCount = groups => {
   return groups.reduce((total,  current) => {
       console.log(current);
       return total + current.details.messageCount;
   }, 0)
};
console.log(sumMessageCount(samplegroups));
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
const getCartTotal = products => {
    return products.reduce((total, current) => {
        console.log(current);
        return total + (current.price * current.quantity);
    },0);
};
console.log(getCartTotal(sampleProducts));
//
const sampleRecordings = [
    {
        value: 2,
    },
    {
        value: 5
    }
];
const getProduct = recordings => {
    return recordings.reduce((total, current) => {
        console.log(current);
        return total * current.value;
    }, 1)
};
console.log(getProduct(sampleRecordings));
//
console.log("Step 1");
try {
    nonExistentFunction();
} catch(error){
    console.error(error);
}
console.log("Step 2");
//
const runCode = () => {
    console.log("One");
    try{
        getData()
    }catch(error){
        console.error(error)
    }
    console.log("Two")
};
runCode();