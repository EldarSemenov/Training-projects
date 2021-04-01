const person = {
    age: 18,
    first_name: "Jennifer",
    last_name: "Doe"
}
function getObjectKeys(person){
    return Object.keys(person);
}
document.getElementById("grades").innerHTML = getObjectKeys(person);

function getObjectValues(person){
    return Object.values(person);
}document.getElementById("id01").innerHTML =
getObjectValues(person);

function getDynamicKey(person, key){
    return person[key];
}
document.getElementById("id02").innerHTML = getDynamicKey(person, "age");
document.getElementById("id03").innerHTML = getDynamicKey(person, "first_name");

const defaultOptions = {
    indentation: 'tab',
    tabSize: 2,
    language: 'javascript'
};
const options = {
    tabsize: 4
};
const mergeOptions = (options, defaultOptions) => {
    return {...defaultOptions, ...options};
};
document.getElementById("id04").innerHTML = 
mergeOptions(options, defaultOptions);
console.log(mergeOptions(options, defaultOptions));

const userLocation = {
    lat: 24.937533,
    lng: 2.938547
};
const getLatLng = userLocation => {
    const {lat, lng} = userLocation;
    return `The latitude is ${lat} and the
    longtitude is ${lng}`;
};
document.getElementById("id05").innerHTML = 
getLatLng(userLocation);

