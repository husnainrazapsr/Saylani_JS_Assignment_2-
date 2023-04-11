// Q2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let foundNumber = 5; // found this from array
let valFound = false;

search = (num) => {
    if (foundNumber === arr[num]) {
        return valFound = true;
    }
    else {
        let newNum = num - 1
        if (newNum > 0) {
            search(newNum);
        }
    }
}
search(arr.length - 1);
if (valFound) {
    console.log("Number Found");
} else {
    console.log(" Not Number Found");
}

// Recursion in java script ..

// function countdown(number) {
//     console.log(number);
//     let newNumber = number - 1;
//     if (newNumber > 0) {
//         countdown(newNumber);
//     }
// }
// countdown(5)