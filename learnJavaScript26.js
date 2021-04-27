const person = {
    first_name: "John",
    last_name: "Doe",
    age: 18
};
const incrementAge = person => {
    person.age = person.age + 1;
    return person;
}; console.log(incrementAge(person));

console.log(Object.keys(person));
console.log(Object.values(person));
/*const key = "first_name";
console.log(person[key]);
Object.keys(person).forEach(key => {
    console.log(key);
    console.log(person[key]);
});
*/
const student = {
    id: 2345,
    first_name: "Alex",
    last_name: "Neumann",
    age: 21
};
console.log(Object.keys(student));
console.log(Object.values(student));
const key = "id";
console.log(student[key]);
Object.keys(student).forEach(key => {
    console.log(key);
    console.log(student[key]);
});
//
const per = {
    first_name: "Rico",
    last_name: "Moison",
    id_number: 2393,
    age: 23
};
const getKeys = per => {
    return Object.keys(per);
}; console.log(getKeys(per));

const getValues = per => {
    return Object.values(per);
}; console.log(getValues(per));

const getDynemicKey = (per, key) => {
    return per[key];
};console.log(getDynemicKey(per, "first_name"));
console.log(getDynemicKey(per, "id_number"));
//
const age = 23;
const per1 = {
    first_name: "As",
    last_name: "Geo",
    age
}; console.log(per1);

