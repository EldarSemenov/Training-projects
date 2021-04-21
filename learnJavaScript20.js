class Invenntory {
    constructor(){
        this.items = [];
    }
    addItem(item){return this.items.push(item);}
    getItems(){return this.items;}
    getCount(){return this.items.length;}
    exists(item){return this.items.includes(item);}
    humanReadableFormat(){return this.items.join(", ");}
}
try {
    const inventory = new Invenntory();
    inventory.addItem("Laptop");
    inventory.addItem("Phone");
    console.log(inventory.getItems());
    console.log(inventory.getCount());
    console.log(inventory.exists("Phone"));
    console.log(inventory.humanReadableFormat());
} catch (error) {

};
/*
class Cars {
    constructor(models, acsessories){
        this.models = models['Chevrolet Camaro'];
        this.acsessories = acsessories['Short'];
    }
    addModel(model){return this.models.push(model);}
    addAcsessories(acsessory){return this.acsessories.push(acsessory);}
    getModel(){return this.models;}
    getAcsessories(){return this.acsessories;}
    getCountModels(){return this.models.length;}
    getCountAcsessories(){return this.acsessories.length;}
    isExistsModel(model){return this.models.includes(model);}
    isExistsAcsessories(acsessory){return this.acsessories.includes(acsessory);}
    forReadableFormatModels(){return this.models.join(', ');}
    forReadableFormatAcsessories(){return this.acsessories.join(', ');}
}
try {
    const myCars = new Cars();
    myCars.addModel('Tesla model 3');
    myCars.addModel('Ford Mustang');
    myCars.addAcsessories('T-Short');
    myCars.addAcsessories('Cap');
    console.log(myCars.getModel());
    console.log(myCars.getAcsessories());
    console.log(myCars.getCountModels());
    console.log(myCars.getCountAcsessories());
    console.log(myCars.isExistsModel('Tesla Rodster'));
    console.log(myCars.isExistsAcsessories('T-Short'));
    console.log(myCars.forReadableFormatModels());
    console.log(myCars.forReadableFormatAcsessories());
} catch (error){

};
*/
class Voting {
    constructor(user, vote){
        this.user = user;
        this.vote = vote;
    }
    static getMaxCandidates(){
        return 3;
    }
}; console.log(Voting.getMaxCandidates());
//
class Cars {
    constructor(newCars, used){
        this.newCars = newCars;
        this.used = used;
    }
    static getMaxNumOfCars () {
        return 1500;
    }
}; console.log(Cars.getMaxNumOfCars());
//
class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
        return 'static method has been called';
    }
};
console.log(ClassWithStaticMethod.staticProperty);
console.log(ClassWithStaticMethod.staticMethod());
//
class User{
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    static getVotinfAge() {return 18;}
    canVote(){
        return this.age >= User.getVotinfAge();
    }
};
const jennifer = new User("Jennifer", "Doe", 20);
console.log(User.getVotinfAge());
console.log(jennifer.canVote());

