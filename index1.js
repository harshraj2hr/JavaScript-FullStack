import fs from "fs";

import generateStupidName from "sillyname";

fs.readFile("./message.txt", "utf8", (err, data) => {
  console.log(err);
  console.log("File content:");
  console.log(data);
});

console.log('My Name is '+ generateStupidName());

// to debug start the application in run and debug mode and then run node {fileName} from terminal