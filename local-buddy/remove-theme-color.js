const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "dist", "index.html");
const content = fs.readFileSync(filePath, "utf8");
const updatedContent = content.replace(/<meta name="theme-color" content="#4DBA87">/g, "");
fs.writeFileSync(filePath, updatedContent);
