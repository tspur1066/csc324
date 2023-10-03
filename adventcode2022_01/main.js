const fs = require("fs");
const path = require("path");
let targetFile = path.resolve(process.cwd(), "./adventcode2022_01/input.txt");
const input = fs.readFileSync(targetFile);