// ********************** Exercise 1 ********************** //

// Select and then log the first <p> element on the page.

let Exercise = document.getElementById("paragraph")


console.log(Exercise)


// ********************** Exercise 2 ********************** //

// Select and then log all of the list items on the website.
 
let newList = document.getElementsByTagName("li")


console.log(newList)

// ********************** Exercise 3 ********************** //

// Select and then log only the first list item on the website. 

let firstListItem = document.querySelector("li:nth-child(1)")



console.log(firstListItem)



// ********************** Exercise 4 ********************** //

// Give a class name to each of the paragraphs on the website. Select all of the paragraphs with the class name. 


let james =document.getElementsByClassName("laila")


console.log(james)


// ********************** Exercise 4 ********************** //

// Select and then log the element with the id of 'heading'

let taco= document.getElementById("heading")
console.log(taco)