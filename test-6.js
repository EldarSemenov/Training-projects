// 6. Arrays

const values = [10, false, 'John'];

// .LENGTH PROPERTY

console.log(values.length); // 3

// GET ELEMENT BY INDEX

console.log(values[1]); // false

// ADDING AN ELEMENT

values.push(20);
console.log(values); // [10, false, 'John', 20]

/*
That's because const means you can only assign 
the variable once when it's defined. But it 
doesn't mean the variable is immutable. 
Its content can change. What's the benefit of 
declaring it as a const you ask? The benefit 
is that once you define it as an array, it 
will always stay as an array which means you can 
safely call array methods on it. However, 
the array content can change.
 */

const grades = [10, 8, 13];

grades.forEach(grade => {
    console.log(grade);
})
