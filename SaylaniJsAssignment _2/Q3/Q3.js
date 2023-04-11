// Q3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// // used as the text content of the new paragraph element.



function addPara(message){
    let paragraph =  document.getElementById("para");
    paragraph.innerHTML= `<p> ${ message}<p/>`;
}
addPara("Paragraph is add by  Function ");