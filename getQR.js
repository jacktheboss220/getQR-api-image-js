const http = require('http');
const prompt = require('prompt-sync')();
const fs = require('fs');
const baseURL = "http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
var text = prompt("Enter text : ");
const file = fs.createWriteStream("file.jpg");
const request = http.get(`${baseURL}` + text, function (response) {
    response.pipe(file);
    response.on("end", function () {
        conn.sendMessage(
            from,
            fs.readFileSync("result.png"),
            MessageType.image,
            {
                mimetype: Mimetype.png,
                quoted: mek,
            }
        );
        console.log("Done!!");
        // fs.unlinkSync("result.png");
    })
});
