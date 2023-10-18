/********************************************************************
 *
 * This is the code for the ability to arrange a table
 * using buttons.
 *
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
  {
    name: "Ms Scandalous",
    birthYear: 1985,
    link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
  },
  {
   name: "Juggy D",
   birthYear: 1981,
   link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
 },
 {
   name: "Sukhbir Singh",
   birthYear: 1969,
   link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
 },
 {
   name: "Abrar-ul-Haq",
   birthYear: 1989,
   link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
 },
 {
   name: "Rishi Rich",
   birthYear: 1970,
   link: "https://www.youtube.com/watch?v=O95-w2gACuA"
 }
]

// locate the table:
const tab = document.querySelector("#bhangra");

populateTable(arr = artists);

// now deal with event-listeners
//first, find the buttons:
const nameButton = document.querySelector("#name-button");
const dateButton = document.querySelector("#date-button");
const randomButton = document.querySelector("#random-button");



// next, add eventlisterners:
nameButton.addEventListener("click", sortByName);
dateButton.addEventListener("click", sortByBirth);
randomButton.addEventListener("click", sortRandom);

// function to populate a table:
function populateTable(arr) {
  let contents = "<tbody>";
  // get in the header row:
  contents += `
    <tr>
      <th>Name</th>
      <th>Year of Birth</th>
      <th>Link</th>
    </tr>
    `;
    arr.forEach(artist => {
      // open the row:
      contents += "<tr>";
      contents += `<td>${artist.name}</td>`;
      contents += `<td>${artist.birthYear}</td>`;
      contents += `<td><a href="${artist.link} target = "_blank">${artist.link}</a></td>`;
      // close the row:
      contents += "</tr>"
    });
    // close out the table body:
    contents += "</tbody>";
    tab.innerHTML = contents;
 }

// declare listener-functions

// byName function
function byName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
 }

function sortByName() {
 // first create new array that is the
 // artist array, sorted by artist-name
 let sortedArray = artists.sort(byName);
 populateTable(sortedArray);
}



// byBirth function
function byBirth(a, b) {
  if (a.birthYear < b.birthYear) return -1;
  if (a.birthYear > b.birthYear) return 1;
  return 0;
 }

 function sortByBirth() {
  let birthArray = artists.sort(byBirth);
  populateTable(birthArray);
 }



 // Shuffle method
Array.prototype.shuffle = function() {
  let input = this;
  for (let i = input.length-1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random()*(i+1));
    let itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
 return input;
}

function sortRandom() {
  let randArray = artists.shuffle();
  populateTable(randArray);
}



// function to populate a table:
function populateTable(arr) {
 let contents = "<tbody>";
 // get in the header row:
 contents += `
   <tr>
     <th>Name</th>
     <th>Year of Birth</th>
     <th>Link</th>
   </tr>
   `;
   arr.forEach(artist => {
     // open the row:
     contents += "<tr>";
     contents += `<td>${artist.name}</td>`;
     contents += `<td>${artist.birthYear}</td>`;
     contents += `<td><a href="${artist.link} target = "_blank">${artist.link}</a></td>`;
     // close the row:
     contents += "</tr>"
   });
   // close out the table body:
   contents += "</tbody>";
   tab.innerHTML = contents;
}




