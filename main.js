// // Get the table element where the links will be added
// const linksTable = document.getElementById("links-table");

// // Number of columns per row
// const columnsPerRow = 5;

// // Generate 45 links dynamically
// for (let i = 1; i <= 45; i++) {
//   // Create a new row after every 5 links
//   if (i % columnsPerRow === 1) {
//     var row = linksTable.insertRow(); // Create a new row
//   }

//   // Create a cell and insert the link into it
//   const cell = row.insertCell();
//   const link = document.createElement("a");
//   link.href = `./pages/page${i}.html`;
//   link.textContent = `Page ${i}`;

//   cell.appendChild(link);
// }

import { data } from "./data.js"; // Importing the learner data

// Get the table element where the links will be added
const linksTable = document.getElementById("links-table");

// Number of columns per row
const columnsPerRow = 5;

// Function to strip leading zeros from learner ID for URL mapping
function stripLeadingZero(id) {
  return id.replace(/^0+/, ""); // Removes leading zeros, e.g., "02" -> "2"
}

// Generate links dynamically based on imported data
for (let i = 0; i < data.length; i++) {
  // Create a new row after every 5 links
  if (i % columnsPerRow === 0) {
    var row = linksTable.insertRow(); // Create a new row
  }

  // Create a cell and insert the link into it
  const cell = row.insertCell();
  const link = document.createElement("a");

  // Generate the link href by stripping leading zeros from the learner's ID
  const pageNumber = stripLeadingZero(data[i].id);
  link.href = `./pages/page${pageNumber}.html`; // Link to the correct page, e.g., /pages/page2.html

  // Set the link text to display the learner's name
  link.textContent = data[i].name;

  // Append the link to the table cell
  cell.appendChild(link);
}
