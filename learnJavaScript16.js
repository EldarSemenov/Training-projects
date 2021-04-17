const names = ['Jessica', 'Monika', 'Delon', 'Mike', 'Robert', 'Jason'];
const namesInUpperCase = names => {
    return names.map(name => name.toUpperCase());
}; console.log(namesInUpperCase(names));
//
const cities = ['roMe', 'neW-YORK', 'minnePOLIS', 'denveR', 'BOSTON'];
const changeCities = cities => {
    return cities.map(city => city[0].toUpperCase() + 
    city.substring(1).toLowerCase());
};console.log(changeCities(cities));
//
const grades = [100, 100, 100, 100, 100];
const doubleGrades = grades => {
    return grades.map(grade => grade * 2);
}; console.log(doubleGrades(grades));
//
const lang = {
    name: 'JavaScript',
    creator: 'Brendan Eich',
    is_popular: true
};
console.log(lang);
lang.is_popular = false;
console.log(lang);
//
const getPersonObject = person => {
    return person = {
        first_name: "Eldar",
        last_name: "Semenov",
        age: 36
    };
}; console.log(getPersonObject());
//
const per = {
    age: 18,
    name: {
        first: "Monika",
        last: "Topl"
    }
};
const getTheFullName = per => {
    return `${per.name.first} ${per.name.last}`
}; console.log(getTheFullName(per));
//
const incrementAge = per => {
    return per.age = per.age + 100;
}; console.log(incrementAge(per));
console.log(per);
//
console.log(Object.keys(per));
console.log(Object.values(per));
const key = "age";
console.log(per[key]);
//
Object.keys(per).forEach(key => {
    console.log(key);
    console.log(per[key]);
});
//
const persona = {
    age: 100,
    first_name: "Alex",
    last_name: "Muro"
};
const getPersonaObject = persona => {
    return Object.keys(persona);
}; console.log(getPersonaObject(persona));
//
const getPersonaValues = persona => {
    return Object.values(persona);
}; console.log(getPersonaValues(persona));
//
const getDynemicKey = (persona, key) => {
    return persona[key];
}; console.log(getDynemicKey(persona, "age"));
console.log(getDynemicKey(persona, "first_name"));
console.log(getDynemicKey(persona, "last_name"));
//
const age = 200;
const worker = {
    first_name: "Will",
    last_name: "Asturo",
    age
}; console.log(worker);
//







