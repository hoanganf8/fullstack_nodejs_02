import express from "express";
import routerIndex from "./routes/index.js";
import routerUsers from "./routes/users.js";
const app = express();

//Routing
app.use(routerIndex);
app.use("/users", routerUsers);

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

const port = 8080;
const hostname = "localhost";
app.listen(port, hostname, () => {
  console.log("Chạy với port = " + port);
});
