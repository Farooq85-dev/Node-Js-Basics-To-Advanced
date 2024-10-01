// File System (fs) is also common core moule of Node JS.

const fs = require("fs");

//Write a file in async way. if want sync use writeFileSync
fs.writeFile("./FileSystem/example.txt", "Hello hy there...", (err) => {
  if (err) {
    console.error("Error reading file:", err);
  }
});

//Read a file in async way. if want sync use readFileSync
fs.readFile("./FileSystem/example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log(data);
  }
});

//Append a file in async way. if want sync use appendFileSync
fs.appendFile("./FileSystem/example.txt", "Hello M.r", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log(data);
  }
});

//Delete a file in async way. if want sync use unlinkSync
fs.unlink("./FileSystem/example.txt", (err) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File deleted successfully!");
  }
});

//To make a directory if not exists
if (!fs.existsSync("./FileSystem/exx.text")) {
  fs.mkdir("./FileSystem/exx.text", () => {
    console.log("Created");
  });
}
