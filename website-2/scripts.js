
// ********************** Exercise 1 ********************** //

// Select and then log the elements with the class of 'main-section'

let elementClass = document.getElementsByClassName("main-section");
console.log(elementClass);


// ********************** Exercise 2 ********************** //

// Select and then log the elements with the class of 'important-text' 

let elementImportant = document.getElementsByClassName("important-text");
console.log(elementImportant);


// ********************** Exercise 3 ********************** //

// Select and then log the table data in the website.

let tableData = document.getElementsByClassName("table");
console.log(tableData);


// ********************** Exercise 4 ********************** //

// Select the paragraph that is nested inside the div with the class of 'table'

const divTable = document.querySelector('.table');
const paragraph = divTable.querySelector('p');
console.log(paragraph);




