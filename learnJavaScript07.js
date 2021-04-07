function getEmptyObject(){
    return {};
}; console.log(getEmptyObject());
//
function getPersonObject(){
    return {
        first_name: "Eldar",
        last_name: "Semenov",
        age: 36
    };
};console.log(getPersonObject());
//
let person = {
    age: 22,
    name: {
        first: "Jesica",
        last: "Lee"
    }
};
function getPersonFirstName(person){
    return person.name.first;
}; console.log(getPersonFirstName(person));
//
function getPersonFullName (person) {
    return person.name.first + ` ` + person.name.last;
}; console.log(getPersonFullName(person));
//
function incrementAge (person) {
    person.age = person.age + 10;
    return person;
}; console.log(incrementAge(person));