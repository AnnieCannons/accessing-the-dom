// ********************** Exercise 1 ********************** //

// Select and then log the first <p> element on the page.
let fistParagraph = document.querySelector("#paragraph")
console.log(fistParagraph);







// ********************** Exercise 2 ********************** //

// Select and then log all of the list items on the website.
let listItems = document.querySelector("#list")
console.log(listItems)







// ********************** Exercise 3 ********************** //

// Select and then log only the first list item on the website. 
let listItemOne = document.querySelector("#list li:first-child")
console.log(listItemOne)








// ********************** Exercise 4 ********************** //

// Give a class name to each of the paragraphs on the website. Select all of the paragraphs with the class name. 
let allParagraphs = document.querySelectorAll(".paragraph");

console.log(allParagraphs)





// ********************** Exercise 5 ********************** //

// Select and then log the element with the id of 'heading'

let headingElement = document.querySelector("#heading");

console.log(headingElement)