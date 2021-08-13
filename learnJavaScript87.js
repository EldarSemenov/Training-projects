let answer = 23;
console.log(answer.toString());
//
let str = "43";
let act = Number.parseInt(str, 10);
console.log(act);
//
const grades = [20, 19, 18, 17, 16, 15, 14, 9, 8];
function getRaisedGrades(grades){
    return grades.map(function(grade){
        if(grade + 1 > 20){return 20}
        return grade + 1;
    });
};
console.log(getRaisedGrades(grades));
//
function welcomeUser(name = "Hey User, you need to provide any name! Understood?"){
    return `Hello ${name}`;
};
console.log(welcomeUser("Sam"));
console.log(welcomeUser());
//
const name = " Sam Blue ";
console.log(name.trim());
//
const greeting = ' Hello world! ';
console.log(greeting);
console.log(greeting.trim());
//
const sentence = "Hello there. Welcome!";
console.log(sentence.startsWith("H"));
console.log(sentence.startsWith("Hello"));
console.log(sentence.startsWith("SAM"));
console.log(sentence.startsWith("Hey"));
console.log(sentence.endsWith("."));
console.log(sentence.endsWith("!"));
console.log(sentence.endsWith("Welcome!"));
console.log(sentence.endsWith("Welcome"));
//
console.log(sentence.includes("He"));
console.log(sentence.includes("the"));
//
const getEmail = email => {
    return email.trim();
};
console.log(getEmail(" elejs.js@gmail.com  "));
//
const getMessage = message => {
    if(message.endsWith(".")){
        return message
    }
    else return message + ".";
};
console.log(getMessage("Hello World."));
console.log(getMessage("It's me"));
console.log(getMessage("Hi."));
console.log(getMessage("How I glad to see you"));
//
const getUnit = text => {
    if(text.includes("℃")){return "Celsius";}
    else if(text.includes("℉")){return "Fahrenheit";}
    else {return "N/A";}
}
console.log(getUnit("It was 90℉ yesturday"));
console.log(getUnit("Are you sure that it'll be 55℉?"));
console.log(getUnit("Why is it 20℃"));
console.log(getUnit("It is expected to be cold"));
//
let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray);
//
let stringg = "Hi, how are you";
console.log(stringg.split(", "));
//
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words);
console.log(words[3]);
const chars = str.split('');
console.log(chars);
console.log(chars[8]);
const strCopy = str.split();
console.log(strCopy);
const rr = strCopy.push("A new Car");
console.log(rr);
//
const message = "You are welcome!";
const method = message.replace(" ", "_");
console.log(method);
//
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it rally lazy?';
console.log(p.replace('dog', 'monkey'));
//
const message = "You are welcome.";
const dd = message.replaceAll(" ", " -- ");
console.log(message);
console.log(dd);
//
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words);
//
const getSlug = name => {
    const result = name.toLowerCase();
    return result.substring(0, 15).replaceAll(" ", "-");
};
console.log(getSlug("IKEA table"));
console.log(getSlug("200cm Bed"));
console.log(getSlug('Bedside lavalamp'));
console.log(getSlug("A B C nooDles jh"));
//
const getCountTodos = todos => {
    return todos.split(',').length;
}
console.log(getCountTodos("Laundry,Wash dishes,Clean tables"));
console.log(getCountTodos("Feed cat,Degrease bike chain,wash the table,clean the room"));