import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import routerIndex from "./routes/index.js";
import routerUsers from "./routes/users.js";
import routerAuth from "./routes/auth.js";
import authMiddleware from "./middlewares/auth.middleware.js";
const app = express();

//Static file
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(expressEjsLayouts);
app.set("layout", "layouts/layout"); //Thiết lập layout mặc định

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Routing
app.use(routerAuth);
// app.use(authMiddleware);
app.use(routerIndex);
app.use("/users", routerUsers);

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

const port = 3000;
const hostname = "localhost";
app.listen(port, hostname, () => {
  console.log("Chạy với port = " + port);
});
