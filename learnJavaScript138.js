const grades = [10, 15, 5];

const sum = grades.reduce((total, current) => {
    return total + current
}, 0);
console.log(sum);
//
const grades = [
    {grade: 10},
    {grade: 15},
    {grade: 5}
];
const sum = grades.reduce((total, current) => {
   console.log(current);
   return total + current.grade;
}, 0);
console.log(sum);
//
const tweets = [
    {
        id: 293832,
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 2323,
        stats: {
            likes: 14, 
            retweets: 20
        }
    }
];
const socialImpact = tweets.reduce((total, current) => {
    console.log(current);
    return total + current.stats.likes + current.stats.retweets;
}, 0);
console.log(socialImpact);
//
const sampleProducts = [
    {
        price: 100,
        quantity: 5
    },
    {
        price: 100,
        quantity: 5
    },
    {
        price: 100,
        quantity: 5
    }
];
const getCartTotal = products => {
    return products.reduce((total, current) => {
        return total + (current.price * current.quantity); 
    }, 0);
}
console.log(getCartTotal(sampleProducts));
//
const sampleProducts1 = [
    {
        price: 200,
        quantity: 1
    },
    {
        price: 200,
        quantity: 2
    }
];
console.log(getCartTotal(sampleProducts1));
//
console.log('Step 1');
try {
    nonExistentFunction();
} catch(error) {
    console.error(error);
}
console.log('Step 2');
//
const runCode = () => {
    console.log('A');
    try{
        runThisFunction();
    } catch(error) {
        console.error(error);
    }
    console.log('B');
}
runCode();
//
const arr1 = new Array();
arr1.push(10);

const arr2 = new Array();
arr2.push(10);

console.log(arr1 === arr2);
//
const firstArray = [];
const secondArray = firstArray;

console.log(firstArray);
console.log(secondArray);

firstArray.push(10);

console.log(firstArray);
console.log(secondArray);
//
const grades = [
    {
        id: 1,
        grade: 12,
        isPassing: false
    },
    {
        id: 2,
        grade: 14,
        isPassing: true
    }
];
const entry = grades.find(grade => grade.id === 1);
entry.isPassing = true;
console.log(grades);
//
const users = [
    {
        id: 1,
        name: 'Sam',
        isVerified: false
    },
    {
        id: 2,
        name: 'Alex',
        isVerified: false
    },
    {
        id: 3,
        name: 'Charlie',
        isVerified: true
    }
];
console.log(users);

const verifyUser = (users, userId) => {
    const user = users.find(user => user.id === userId);
    user.isVerified = true;
}
verifyUser(users, 2);
console.log(users);
verifyUser(users, 1);
console.log(users);
verifyUser(users, 3);
console.log(users);
//
const students = [
    {   id: 1,
        name: 'Alex',
        result: 188,
        got_approval: false
    },
    {   
        id: 2,
        name: 'Jhon',
        result: 199,
        got_approval: false
    }
];
//
const getApproval = (students, result) => {
    const student = students.find(student => student.result === result);
    students.forEach(student => {
        if(student.result > 190) {
            return student.got_approval = true;
        } else {return student.got_approval = false;}
    });
}
console.log(getApproval(students, 199));
//
const getApproval = students => {
    return students.forEach(student => {
        if(student.result > 190) {
            return student.got_approval = true;
        } else {
            return student.got_approval = false;
        }
    });
}
console.log(getApproval(students));
//
const getApproval = (students, studentId) => {
    const student = students.find(student => student.id === studentId);
    if(student.result > 190) {return studen}
}
console.log(getApproval(students));