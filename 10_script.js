const favoriteAnimal = "jaguar";

switch (favoriteAnimal) {
  case "bobcat":
  case "cat":
    console.log("Cats are pretty cool!");
    break;

  case "dog":
    console.log("They are kind of loud");
    break;
  case "shark":
    console.log("That is an interesting choice");
  default:
    console.log("That is cool but I am unfamiliar with that animal");
}

const number = 6;

switch (number) {
  case 0:
    console.log("It is zero");
    break;
  case 1:
  case 2:
    console.log("It is small");
    break;
  case 3:
  case 4:
    console.log("It is medium");
    break;
  case 5:
    console.log("It is large");
    break;
  default:
    console.log("Try again");
}

const votingAge = 17;

switch (votingAge) {
  case 0:
    votingAge < 18;
    console.log("Sorry, your age is not appropriate for this election");
    break;
  case 1:
    votingAge >= 18;
    console.log("Thank you for participation in election");
}

const word = "Good Afternoon!";

switch (word) {
  case "Hello":
    console.log("Hello Hello");
    break;

  case "Hi":
    console.log("Hi Hi!");
    break;

  case "Good morning":
    console.log("Morning Morning");
    break;

  case "Good Afternoon!":
    console.log("Good day!");
    break;

  default:
    console.log(`I don't know other words`);
}

for (let i = 0; i < 5; i++) {
  console.log("Hello");
  console.log("Hi");
}

for (let num = 0; num < 100; num = num + 2) {
  console.log(num);
}

const a = ["a", "b", "c"];

for (let i = 0; i < a.length; i++) {
  const element = a[i];
  console.log(element);
}

for (let i = 0; i < 50; i++) {
  console.log("Start " + i);
  if (i > 10) continue;
  console.log("End " + i);
}

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";

for (let i = 0; i < cars.length; i++) {
  console.log((text += cars[i] + "<br>"));
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 20) {
  i++;
  console.log(i);
}

const person = {
  name: "Eldar",
  friend: {
    name: "JS",
    friend: {
      name: "Sally",
    },
  },
};
let currentPerson = person;
while (currentPerson != null) {
  console.log(currentPerson.name);
  currentPerson = currentPerson.friend;
}

const person = {
  name: "Mon",
  parent: {
    name: "Loon",
    parent: {
      name: "Doon",
      parent: {
        name: "Monk",
        parent: {
          name: "Kase",
          parent: {
            name: "Jok",
            parent: {
              name: "Res",
              parent: {
                name: "Loo",
              },
            },
          },
        },
      },
    },
  },
};
//console.log(person);

let text = "";
let i = 0;
while (i < 10) {
  console.log((text += `<br> The number is ` + i));
  i++;
}

let text = "";
let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}
