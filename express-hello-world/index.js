const express = require("express");
const server = express();

server.get("/", (_request, response) => {
  response.send("Hello World!");
});

server.listen(3000, () => {
  console.log(`Server UP!`);
});
