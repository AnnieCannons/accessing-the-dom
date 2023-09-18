// ********************** Exercise 1 ********************** //

// Select and then log the first <p> element on the page.
let firstP = document.getElementById("paragraph");
console.log(firstP);


// ********************** Exercise 2 ********************** //

// Select and then log all of the list items on the website.
let listItems = document.getElementsByTagName("li");
console.log(listItems); 


// ********************** Exercise 3 ********************** //

// Select and then log only the first list item on the website. 

let firstItem = document.getElementById("list").children[0];
console.log(firstItem);


// ********************** Exercise 4 ********************** //

// Give a class name to each of the paragraphs on the website. 
// Select all of the paragraphs with the class name. 

let paragraphs = document.getElementsByClassName("ps");
console.log(paragraphs);



// ********************** Exercise 4 ********************** //

// Select and then log the element with the id of 'heading'

let elementHeading = document.getElementById("heading");
console.log(elementHeading);