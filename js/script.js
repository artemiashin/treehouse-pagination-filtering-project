/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// Declare a constant variable to store the number of items per page
const num = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   // Determine the start and end index of the students to be displayed on the current page
   const start = (page*num) - num;
   const end = page*num;

   // Get the ul element that will hold the student list
   const ul = document.querySelector('.student-list');

   // Clear the ul element of any previous content
   ul.innerHTML = '';

   // Loop through the list of students
   for (let i in list) {
      // If the current index is within the range for the current page
      if (i>=start && i<end) {
         // Create a string to hold the HTML for the current student
         let el = '';
         el += `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i]['picture']['large']}" alt="Profile Picture">
           <h3>${list[i]['name']['first']} ${list[i]['name']['last']}</h3>
           <span class="email">${list[i]['email']}</span>
         </div>
         <div class="joined-details">
           <span class="date">${list[i]['registered']['date']}</span>
         </div>
         </li>`;
         // Append the HTML for the current student to the ul element
         ul.insertAdjacentHTML('beforeend', el);
      }
   }
   
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination (list) {
   // Get the number of pages needed based on the list length and number of items per page
   const numPages = Math.floor(list.length/num + 1);
   
   // Get the element to hold the pagination buttons
   const ul = document.querySelector('.link-list');
   
   // Clear any existing buttons
   ul.innerHTML = '';
   let buttons = '';
   
   // Loop through and create the pagination buttons
   for (let j = 1; j <= numPages; j++) {
      buttons += `<li><button type="button">${j}</button></li>`;
   }
   
   // Add the buttons to the page
   ul.insertAdjacentHTML('beforeend', buttons);
   
   // Set the first button as active
   const firstButton = document.querySelector('.link-list button');
   firstButton.classList.add('active');

   // Add an event listener to handle button clicks
   ul.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         // Remove the active class from all buttons
         const buttons = document.querySelectorAll('button');
         for (let button of buttons) {
            button.className = '';
         }
         // Add the active class to the clicked button
         e.target.className = 'active';
         // Call the showPage function to update the displayed items
         showPage(list, e.target.textContent);
      }
   });
}

// Call functions
showPage(data,1);
addPagination(data);