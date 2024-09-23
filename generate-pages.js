import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

// Create 'pages' directory if it doesn't exist
const pagesDir = join(process.cwd(), "pages");
if (!existsSync(pagesDir)) {
  mkdirSync(pagesDir);
}

// Generate 45 HTML files
for (let i = 1; i <= 45; i++) {
  const content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page ${i}</title>
    </head>
    <body>
        <h1>This is Page ${i}</h1>
        <a href="/">Back to Landing Page</a>
    </body>
    </html>
  `;

  // Write each file
  writeFileSync(join(pagesDir, `page${i}.html`), content);
}

console.log("45 pages created successfully!");
