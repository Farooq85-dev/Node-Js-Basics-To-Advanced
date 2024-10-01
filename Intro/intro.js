// What is Node JS?
// Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

// https://nodejs.org/en

// Some Common Core Modules in Node Js
const os = require("os");
const path = require("path");

// console.log(os.type()); // Output will be your Os type like windows, linux or Mac Os
// console.log(os.version()); // Output will be your Os version like windows 11 home or pro etc.
// console.log(os.homedir()); // Output will be your machine home directory
// console.log(os.uptime()); // Output will be your system uptime
// console.log(os.cpus()); // Output will be a array of object your system cpu information
// console.log(os.hostname()); // Output will be your system name
// console.log(os.machine()); // Output will be your system type like x86_64
// console.log(os.networkInterfaces()); // Output will be a array of object your network interface
// console.log(os.platform()); // Output will be the platfom on which node is compiled

console.log(path.extname("index.js")); // Output will be file extension name
console.log(path.basename("C:\\temp\\myfile.html")); // Output will be file basename of provided string diresctory
console.log(path.dirname("C:\\temp\\myfile.html")); // Output will be file directory name of provided string diresctory
console.log(path.join("/foo/", "/bar")); // Output will be the joined path
console.log(path.parse("/home/user/dir/file.txt")); // Output will be the parsed path
