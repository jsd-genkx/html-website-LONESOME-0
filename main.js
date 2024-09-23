// Get the table element where the links will be added
const linksTable = document.getElementById("links-table");

// Number of columns per row
const columnsPerRow = 5;

// Generate 45 links dynamically
for (let i = 1; i <= 45; i++) {
  // Create a new row after every 5 links
  if (i % columnsPerRow === 1) {
    var row = linksTable.insertRow(); // Create a new row
  }

  // Create a cell and insert the link into it
  const cell = row.insertCell();
  const link = document.createElement("a");
  link.href = `./pages/page${i}.html`;
  link.textContent = `Page ${i}`;

  cell.appendChild(link);
}
