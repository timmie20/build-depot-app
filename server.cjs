const jsonServer = require("json-server");
const data = require("./src/data.json");

const server = jsonServer.create();
server.use(jsonServer.defaults());
server.use(jsonServer.router({ distributors: data }));

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
