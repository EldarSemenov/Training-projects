/*const calculateVat = country => {
    if (!country.is_eu){
        return "Not Vat";
    }
};
const percentage = getVatPercentage()
return `Vat ${percentage}% included`;
*/
const john = {
    name: "John"
};
const getVotingMessage = person => {
    if (!person.name) return " ... ";
    return `Hey ${person.name}, your voting starts now`;
};
console.log(getVotingMessage(john));
console.log(getVotingMessage({}));
//
const sara = {
    first_name: "Sara",
    last_name: "Bilson",
    id: 1287
};
const rom = {
    first_name: "Rom",
    last_name: "Peterson"
}
const getEntrance = student => {
    if (!student.id) return `You are not a student, you can't come in`;
    return `Welcome to our club ${student.first_name}`;
}; console.log(getEntrance(sara));
console.log(getEntrance(rom));
console.log(getEntrance({}));
/*
function getPushMessage (order) {
    if(order.type === "received") {
        return "Restaurant started working on your order.";
    } else if(order.type === "prepared") {
        return "Driver is picking up your food.";
    } else if(order.type === "en_route") {
        return "Driver is cycling your way!";
    } else if(order.type === "arrived") {
        return "Enjoy your food!";
    }
};
*/
function getPushMessage (order) {
    const mesage ={
        "received": "Restaurant started working on your order.",
        "prepared": "Driver is picking up your food.",
        "en_route": "Driver is cycling your way!",
        "arrived": "Enjoy your food!"
    };
    return mesage[order.type];
};
//
const booking1 = {
    status: "pending"
};
const booking2 = {
    status: "confirmed"
};
const booking3 = {
    status: "canceled"
}
const booking4 = {
    status: "done"
}
const getStatus = (host, user, booking) => {
    const message = {
        "pending": `Hey ${user}, we are awaiting confirmation from ${host}`,
        "confirmed": `Hey ${user}, ${host} is excited to be hosting you!`,
        "canceled": `Unfortunately ${user}, ${host} has canceled your booking request`,
        "done": `${host} hopes you had a great stay!`
    } 
    return message[booking.status];
};
console.log(getStatus("John", "Blane", booking1));
console.log(getStatus("John", "Blane", booking2));
console.log(getStatus("John", "Mark", booking3));
console.log(getStatus("John", "Monika", booking4));
//
const firstStudent = {
    first_name: "Arthur",
    last_name: "Nilson",
    status: "Alumni"
};
const secondStudent = {
    first_name: "Joshua",
    last_name: "Mironus",
    status: "current student"
};
const getTickit = (name, situation) => {
    const message = {
        "Alumni": `Sorry, ${name}, but we are not able to sell a tickit to you`,
        "current student": `Hi ${name}! Your tickits will be delivered to you.`
    }
    return message[situation.status];
};
console.log(getTickit("Arthur", firstStudent));
console.log(getTickit("Joshua", secondStudent));
//
const game = {
    count: 0
}; console.log(game.count || "Game not started yet");
//
const person1 = {
    name: "Jad"
};
const country1 = person1.country || "Pale Blue Dot";
console.log(person1.country || "Pale Blue Dot");
//
const getErrorMessage = Code => {
    const message = {
        401: `Unauthorized`,
        404: `Not found`
    }
    return message[Code] || `Unexpected error has occured`;
};
console.log(getErrorMessage(401));
console.log(getErrorMessage(404));
console.log(getErrorMessage(505));
console.log(getErrorMessage(909));
//
const getCharacterusticOfCar = (year) => {
    const characteristic = {
        1999: `This is the old car`,
        2002: `It's also old car`,
        2012: `Too expensive price for this year`,
        2015: `Design is not good`,
        2018: `Retain this option`,
        2021: `Let's buy this auto, looks perfect`
    }
    return characteristic[year] || `Sorry, the page can not be loaded`;
};
console.log(getCharacterusticOfCar(1999));
console.log(getCharacterusticOfCar(2002));
console.log(getCharacterusticOfCar(2021));
console.log(getCharacterusticOfCar(1988));
console.log(getCharacterusticOfCar(1900));
/*
const user = {
    name: "Jad",
    type: "admin"
};
const messages = {
    "client": "Welcome to our shop",
    "admin": "Welcome to the dashboard",
    "editor": "Welcome to the content page"
};
*/
const {} = {
    name: "Jad",
    type: "admin"
};
const messages = {
    "client": "Welcome to our shop",
    "admin": "Welcome to the dashboard",
    "editor": "Welcome to the content page"
};
//const message1 = messages[use.type];
//console.log(messages[user.type]);
//
const receiveMessage = (person) => {
    if(!person.name) return "- - - - - -";
    return `Hello ${person.name}, your voting starts now!`;
};
const jonny = {
    name: "Jonny"
}; console.log(receiveMessage(jonny));
console.log(receiveMessage({}));
/*
const studentUdemy1 = {
    first_name: "Romeo",
    last_name: "Hom",
    age: 32,
    id_number: 219
};
const studentUdemy2 = {
    first_name: "Nill",
    last_name: "Amstrong",
    age: 33,
    id_number: 323
};
const studentUdemy3 = {
    first_name: "Jason",
    last_name: "Unysol",
    age: 44,
};
const informMessage = (studentUdemy, id_number) => {
    if (!id_number) return 
    `${studentUdemy.first_name} can continue to study`;
    return `${studentUdemy.first_name} is not, since id-number is expired`;
};
console.log(informMessage(studentUdemy1));
*/
const farmer = {
    name: "Genf Mintros",
    id_number: 092334
};
const pseudoFarmer = {
    name: "Gerry Groms"
}
const checkFarmer = personfarmer => {
    if(!personfarmer.id_number) return `You can not get the license`;
    return `Hello ${personfarmer.name}! Here is your license! :) `;
}; console.log(checkFarmer(farmer));
console.log(checkFarmer(pseudoFarmer));
//
const per1 = {
    name: "Piter Noiman",
    passport_number: 12903
};
const per2 = {
    name: "Katya Davson",
    passport_number: 23324 
};
const per3 = {
    name: "July Lomsa"
};
const per4 = {
    name: "Honmer Loperson",
    passport_number: 23982
};
const checkPassport = per => {
    if(!per.passport_number) return `Sorry, but you can't come in without passport.`;
    return `Welcome ${per.name}! 
    We hope you will enjoy this presentation!`;
}; console.log(checkPassport(per4));
console.log(checkPassport(per2));
console.log(checkPassport(per3));
console.log(checkPassport(per1));
//
const worker1 = {
    first_name: "Rodriges",
    last_name: "Julionodos",
    passport: true,
    id_company: 1239
};
const worker2 = {
    first_name: "Folby",
    last_name: "Robinson",
    passport: true
};
const worker3 = {
    first_name: "Linda",
    last_name: "Dodo",
    id_company: 8273
};
const checkWorkers = (worker) => {
    if(!worker.passport) return `${worker.first_name}, you need to bring passport.`;
    else if (!worker.id_company) return `${worker.first_name}, you need to bring id.`;
    return `Welcome back! ${worker.first_name}!`;
};
console.log(checkWorkers(worker3));
console.log(checkWorkers(worker2));
console.log(checkWorkers(worker1));
//
const worker4 = {
    name: "Poll Humor",
    id: 00333
};
const worker5 = {
    name: "Poll Wess",
    id: 92344
};
const worker6 = {
    name: "Jack"
}
const checkIDnumber = wor => {
    if(wor.id !== 90234) return `Excuse me! Can I ask you?  
    Who are you? I can call police!`; // mistakes
    else if(wor.id !== 00333) return `You are not Poll Humor! :)`;
    
    return `${wor.name}! Welcome back!`;
}; console.log(checkIDnumber(worker5));
console.log(checkIDnumber(worker4));
console.log(checkIDnumber(worker6));