// Search function

// Adds search button to index.html

const header = document.querySelector('.header');
const searchHtml = `<label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name ...">
            <button type="button" id="search-button"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label>`;

header.insertAdjacentHTML('beforeend', searchHtml);

/* Variables to reference the `input` and search `button` elements */

const searchField = document.querySelector('#search');
const searchButton = document.querySelector('#search-button');

function searcher (searchInput, list) {
   // Initialize an empty array to hold the matching items
   let searchList = [];
   
   // Check if the search input is not empty
   if (searchInput.value.length !== 0) {
     // Loop through the list and check for matches
     for (let i in list) {
       if (list[i]['name']['first'].toLowerCase().includes(searchInput.value.toLowerCase()) || list[i]['name']['last'].toLowerCase().includes(searchInput.value.toLowerCase())) {
         searchList.push(list[i]);
       }
     }
     // Show the matching items and create pagination buttons
     showPage(searchList,1);
     addPagination(searchList);
   } else {
     // If the search input is empty, show the original list and create pagination buttons
     showPage(data,1);
     addPagination(data);
   }
 }
 

 /* submit listener */
searchButton.addEventListener('click', (event) => {
   event.preventDefault();
 
   // Invoke your search function here - Arguments: search, tableCells
 searcher(searchField, data);
 
   // Helpful log statement to test function
   console.log('Submit button is functional!');
 });
 
 /* submit listener */
 searchField.addEventListener('keyup', () => {
 
   // Invoke your search function here - Arguments: search, tableCells
 searcher(searchField, data);
 
   // Helpful log statement to test function
   console.log('Keyup event on the Search input is functional!');
 });