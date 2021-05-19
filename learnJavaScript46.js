let numbers = [9, 5, 14, 3, 11];
let numbersAboveTen = numbers.filter(number => {
    return number >= 10;
}); console.log(numbersAboveTen);
numbersAboveTen.forEach(item => {
    console.log(item);
});
//
let years = [2000, 2008, 2020, 2023];
let myYears = years.filter(year => {
    return year >= 2000
});
myYears.forEach(y => {
    console.log(y);
});
//
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
result.forEach(x => {
    console.log(x);
});
const getPositiveTemp = temperatures => {
    return temperatures.filter(temperature => {
        return temperature > 0;
    });
};
console.log(getPositiveTemp([-2, 1, 10, 34, 12, 0, -90, -50]));
//
const getFreezingTemp = temperatures => {
    return temperatures.filter(temp => {
        return temp < 0;
    });
};
console.log(getFreezingTemp([-20, 2, -1, 3, 45, -33]));
//find
let names = ["Sam", "Alex", "Charlie"];
let result1 = names.find(name => {
    return name === "Alex";
});
console.log(result1);
//
let numbers1 = [9, 10, 5, 14, 3, 11];
let firstNumberAboveTen = numbers1.find(num => {
    return num >= 10;
}); console.log(firstNumberAboveTen);
//
const array2 = [5, 23, 45, 120, 44, 8, 12, 5, 3, 7, 8, 2, 0, 1];
const found = array2.find(element => element > 10);
console.log(found);
//
const getYear = (years, searchYear) => {
    return years.find(year => {
        return year === searchYear;
    });
}; console.log(getYear([2018, 2019, 2020, 2021, 2022]), 2023);
//
const getOddYears = (years) => {
    return years.filter(year => {
        return year % 2 !== 0;
    });
}; console.log(getOddYears([2020, 2019, 2023, 2024, 2041]));
//
const numbers2 = [4, 2, 5, 8];
const doubled = numbers2.map(number => {
    return number * 2;
}); console.log(doubled);
//
const names1 = ['sam', 'eldar'];
const changedNames = names1.map(name => {
    return name.toLocaleUpperCase();
}); changedNames.forEach(nM => {
    console.log(nM);
});
//
const array3 = [1, 4, 9, 16];
const map1 = array3.map(x => x * 2);
console.log(map1);
//includes
const groceries = ["Apple", "Peach", "Tomato"];
console.log(groceries.includes("Tomato"));
console.log(groceries.includes("Bread"));
//
const array4 = [1, 2, 3, 4];
console.log(array4.includes(2));
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));
//
const groceries1 = ["Apple", "Peach", "Tomato"];
console.log(groceries1.toString());
//
const groceries2 = ['Apples', 'Oranges', 'Yomatoes', 'Peaches'];
console.log(groceries2.join(", "));
console.log(groceries2.join("; "));
console.log(groceries2.join(" - "));
//
const elements1 = ['Fire', 'Air', 'Water'];
console.log(elements1.join(''));
console.log(elements1.join('----'));
//
const isAppUsed = (apps, app) => {
    return apps.includes(app);
}; console.log(isAppUsed(["Calculator", "Twitter"], "Calculator"));
console.log(isAppUsed(["Clock", "Calculator"], "Safari"));
//
const getStringSizes = strings => {
    return strings.map(string => {
        return string.length;
    });
}; console.log(getStringSizes(["Apple", "Me", "You"]));
console.log(getStringSizes(["A", "AB", "ABC", ""]));
//
const getRaisedGrades = grades => {
    return grades.map(grade => {
        if(grade + 1 > 20){return 20}
        return grade + 1;
    });
};console.log(getRaisedGrades([20, 12, 19, 18, 23, 9]));
//
const getVoterCount = ages => {
    return ages.filter(age => age >= 18).length;
};console.log(getVoterCount([12, 18, 2, 90, 56, 34, 32, 23, 67, 56, 45, 9, 20, 11, 12]));
//
const user = {
   id: 1,
   firstName: "Sam",
   lastName: "Doe",
   age: 20
}; console.log(user.id);
console.log(user.firstName);
user.lastName = "Bluergon";
user.age = user.age + 1;
console.log(user);
user.id = 12;
console.log(user);
//
const getProductDetails = () => {
    return {
        id: 93748735,
        title: "MacBookPro",
        inStock: true
    };
}; console.log(getProductDetails());
//
const getWeather = city => {
    return `It's currently ${city.value} degrees in ${city.name}`;
};
console.log(getWeather({name: "Amsterdam", value: 24}));
console.log(getWeather({name: "Denver", value: -4}));
//
const getStudentData = student => {
    return `I saw ${student.name}, he was in
    my classroom and he got ${student.score} degree`;
}; console.log(getStudentData({name: "Romel", score: 23}));