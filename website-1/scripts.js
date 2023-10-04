// ********************** Exercise 1 ********************** //

// Select and then log the first <p> element on the page.
let paragraphVariable = document.querySelector(".paragraph1");
// let paragraphElement = document.querySelector('#container .paragraph1');
console.log(paragraphVariable.textContent);
// console.log(paragraphVariable.outerHTML);


// couple different ways to do this 




























// ********************** Exercise 2 ********************** //

// Select and then log all of the list items on the website.
 let listItems = document.getElementsByTagName("li");
console.log(listItems);


































// ********************** Exercise 3 ********************** //

// Select and then log only the first list item on the website. 
let firstListItem = document.getElementById("list").getElementsByTagName("li")[0];
console.log(firstListItem.textContent);
































// ********************** Exercise 4 ********************** //

// Give a class name to each of the paragraphs on the website. Select all of the paragraphs with the class name. 

let paragraph1Elements = document.querySelectorAll(".paragraph1");
let paragraph2Elements = document.querySelectorAll(".paragraph2");


































// ********************** Exercise 5 ********************** //

// Select and then log the element with the id of 'heading'
let headerElement = document.getElementById("heading");
console.log(headerElement.textContent);
