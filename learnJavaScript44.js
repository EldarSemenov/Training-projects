let count = 0;
count = count + 2;
console.log(count);
//
const grade = 3;
if(grade >= 10){
    console.log("Passing grade");
}else{console.log("Failure grade");};
//
const gr = 10;
if(gr > 10){
    console.log("Passing grade");
}else if(gr === 10){
    console.log("Passing on the limit");
}else{
    console.log("Failing grade");
}
//
const testNumber = a => {
    let result;
    if(a > 0){
        result = 'positive';
    }
    else{
        result = "not positive"
    }
    return result;
};
console.log(testNumber(-3));
console.log(testNumber(2));
//
const incomeTest = sum => {
    let income;
    if(sum < 1000){
        income = 'low income';
    }
    else if(sum === 1000){
        income = 'on the border of low income';
    }
    else if(sum > 1000){
        income = 'positive income';
    }
    return income;
}
console.log(incomeTest(899));
console.log(incomeTest(1000));
console.log(incomeTest(1200));
//
function canVote(age){
    if(age >= 18){return true;}
    else{return false;}
};
console.log(canVote(18));
console.log(canVote(12));
console.log(canVote(56));
//
function canV(age){
    if(age >= 18){return true;}
    return false;
};
console.log(canV(12));
//
function getNextAge(age){
    if(age === ""){
        return 0;
    }
    return Number.parseInt(age, 10) + 1;
};
console.log(getNextAge("23"));
console.log(getNextAge("Yes"));
console.log(getNextAge(50));