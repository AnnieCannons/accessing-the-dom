// ********************** Exercise 1 ********************** //

// Select and then log the first <p> element on the page.

const FirstPElement = document.querySelector('p');
console.log(FirstPElement);

// ********************** Exercise 2 ********************** //

// Select and then log all of the list items on the website.


const listItems = document.querySelectorAll('li');
console.log(listItems);

// ********************** Exercise 3 ********************** //

// Select and then log only the first list item on the website. 

const firstListItem = document.querySelector('li');
console.log(firstListItem);

// ********************** Exercise 4 ********************** //

// Give a class name to each of the paragraphs on the website. Select all of the paragraphs with the class name. 


const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((paragraph) => {
    paragraph.classList.add('custom-class');
});
const paragraphsByClass = document.querySelectorAll('.custom-class');
console.log(paragraphsByClass);


// ********************** Exercise 4 ********************** //

// Select and then log the element with the id of 'heading'

const headingElement = document.getElementById('heading');
console.log(headingElement);