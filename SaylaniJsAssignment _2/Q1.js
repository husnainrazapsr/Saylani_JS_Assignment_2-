// Q1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


function closuree(a) {
    return function (b) {
        return a + b
    }
}
let getNum = closuree(5);

console.log(getNum(5));