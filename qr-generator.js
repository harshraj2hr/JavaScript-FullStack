import inquirer from "inquirer";
import { image } from "qr-image";
import fs from "fs";

inquirer.prompt([{
    type:"input",
    name:"name",
    message:"your name?"
}
]).then((ans) => {
    const qr = image(ans.name, {type:"png"});
    qr.pipe(fs.createWriteStream("qrcode.png"));
    console.log("QR code generated and saved as qrcode.png");
}).catch((err) => {
    console.error(err);
});