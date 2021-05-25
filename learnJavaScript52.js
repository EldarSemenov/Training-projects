const logValues = course => {
    Object.keys(course).forEach(key => {
        console.log(course[key]);
    });
}; 
logValues({id: 1, name: "Learn JavaScript", year: 2021});
//
const logKeys = course => {
    return Object.keys(course);
}; console.log(logKeys({id: 1, name: "Learn JavaScript", year: 2021}));
//
const logKeysWithUpperCase = course => {
    return Object.keys(course).map(key => 
        key.toUpperCase());
}; 
console.log(logKeysWithUpperCase({id: 1, name: "Learn JavaScript", year: 2021}));
//