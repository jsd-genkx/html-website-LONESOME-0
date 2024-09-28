import { data } from "./data.js"; // Importing the learner data

// Get the table element where the links will be added
const linksTable = document.getElementById("links-table");

if (!linksTable) {
  console.error("Element with ID 'links-table' not found.");
  // Optionally, handle the error or exit the script
}

// Number of columns per row
const columnsPerRow = 5;

// Function to strip leading zeros from learner ID for URL mapping
function stripLeadingZero(id) {
  return id.replace(/^0+/, ""); // Removes leading zeros, e.g., "02" -> "2"
  // Alternatively, if id is always numeric:
  // return Number(id);
}

// Function to create a link element for a learner
function createLink(learner, number) {
  const link = document.createElement("a");
  const pageNumber = stripLeadingZero(learner.id);
  link.href = `./pages/page${pageNumber}.html`; // Link to the correct page, e.g., /pages/page2.html
  link.textContent = `${number}. ${learner.name}`; // Prefix with learner number
  link.setAttribute("aria-label", `Navigate to ${learner.name}'s page`);
  link.classList.add("learner-link"); // For CSS styling
  return link;
}

// Optional: Use DocumentFragment for better performance (especially with larger datasets)
const fragment = document.createDocumentFragment();
let row;

data.forEach((learner, index) => {
  // Validate data
  if (!learner.id || !learner.name) {
    console.warn(`Missing data for entry at index ${index}.`);
    return; // Skip this entry
  }

  // Create a new row after every 'columnsPerRow' links
  if (index % columnsPerRow === 0) {
    row = document.createElement("tr");
    fragment.appendChild(row);
  }

  // Create a cell and insert the link into it
  const cell = document.createElement("td");
  cell.classList.add("link-cell"); // For CSS styling
  const link = createLink(learner, index + 1); // Pass the learner number
  cell.appendChild(link);
  row.appendChild(cell);
});

// Append all rows to the table at once
linksTable.appendChild(fragment);
