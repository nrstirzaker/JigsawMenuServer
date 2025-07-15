const http = require("http");
const fs = require("fs");

fs.readFile("./main.htm", (err, html) => {
    if (err) {
        throw err;
    }
    const server = http.createServer((req, res) => {
        res.write(html);
        res.end();
    });

    server.listen(3000);
    console.log("Listening on port 3000");
})