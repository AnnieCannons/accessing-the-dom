// ********************** Exercise 1 ********************** //

// Select and then log the first <p> element on the page.

let paragraph = document.querySelector("p")
console.log(paragraph)



// ********************** Exercise 2 ********************** //

// Select and then log all of the list items on the website.

let allLists = document.getElementsByTagName("li")
console.log(allLists)

// ********************** Exercise 3 ********************** //

// Select and then log only the first list item on the website. 

let firstList = document.querySelector("li")
console.log(firstList)

// ********************** Exercise 4 ********************** //

// Give a class name to each of the paragraphs on the website. Select all of the paragraphs with the class name. 

let pg = document.querySelectorAll(".pg")
console.log(pg)


// ********************** Exercise 4 ********************** //

// Select and then log the element with the id of 'heading'

let heading = document.getElementById("heading")
console.log(heading)