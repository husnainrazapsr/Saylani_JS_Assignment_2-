// Q4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function createList (message){
    let list = document.getElementById("list");
    list.innerHTML=`<ul> <li> ${message}</li> </ul>`;
    console.log(message);
}
createList ( "Husnain");