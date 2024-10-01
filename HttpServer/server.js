const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => {
  console.log(`---- Server is Runing at ${PORT} ---- `);
});
