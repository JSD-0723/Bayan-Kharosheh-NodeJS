const http = require("http");
const fs = require("fs");

const host = "localhost";
const port = 8080;

const requestListener = function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("this request has been sent");

  const logEntry = `${new Date().toISOString()} - ${req.url}\n`;
  fs.appendFile("requests.txt", logEntry, (err) => {
    if (err) {
      console.error("Error writing to requests.txt", err);
    }
  });
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
