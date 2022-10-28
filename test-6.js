// 7. Arrays II & callbacks

// EXERCISE

/*
Implement the getVotersCount function such 
that it returns the number of citizens that 
are allowed to vote (must be 18 years or older).
*/

function getVotersCounts(ages) {
    return ages.filter(function(age) {
        return age >= 18;
    }).length;
}
console.log(getVotersCounts([10, 19, 25, 89, 77, 13, 15, 17, 9])); // 4

// or without chaining

function getVotersCounts(ages) {
    const filteredVoters = ages.filter(function(age) {
        return age >= 18;
    });
    return filteredVoters.length;
}
console.log(getVotersCounts([10, 19, 25, 89, 77, 13, 15, 17, 9])); // 4
