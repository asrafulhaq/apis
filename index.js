import jsonServer from "json-server";

// setup json server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

// // use all setup
server.use(middleware);
server.use(router);

// listen server
server.listen(5050, () => {
  console.log(`server is running on port 5050`);
});
