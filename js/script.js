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
const num = 9;

function showPage(list, page) {
   const start = (page*num) - num;
   const end = page*num;
   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';
   for (let i in list) {
      if (i>=start && i<end) {
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
      ul.insertAdjacentHTML('beforeend', el);
      }
   }
   
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination (list) {
   const numPages = Math.floor(list.length/num + 1);
   const ul = document.querySelector('.link-list');
   ul.innerHTML = '';
   let buttons = '';
   for (let j = 1; j < numPages; j++) {
      buttons += `<li><button type="button">${j}</button></li>`;
   }
   ul.insertAdjacentHTML('beforeend', buttons);
   const firstButton = document.querySelector('button');
   firstButton.className = 'active';
   ul.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         const buttons = document.querySelectorAll('button');
         for (let button of buttons) {
            button.className = '';
         }
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   });
}

// Call functions
showPage(data,1);
addPagination(data);