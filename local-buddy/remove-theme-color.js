const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "dist", "index.html");
let content = fs.readFileSync(filePath, "utf8");

content = content.replace(/<meta name="theme-color" content="#4DBA87">/g, "");
content = content.replace(/<link rel="icon" type="image\/png" sizes="32x32" href="\/img\/icons\/favicon-32x32.png">/g, "");
content = content.replace(/<link rel="icon" type="image\/png" sizes="16x16" href="\/img\/icons\/favicon-16x16.png">/g, "");

fs.writeFileSync(filePath, content);
