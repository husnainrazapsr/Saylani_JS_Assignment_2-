// Q5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


let x = document.getElementById("para");
// let color = 

function changeBg(a, b) {
    a.innerText = " Change backgroundColor using Function";
    document.getElementById("para").style.backgroundColor = b;
}
changeBg(x, "#f23455");