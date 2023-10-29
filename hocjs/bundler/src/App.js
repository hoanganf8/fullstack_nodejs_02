import moment from "moment"; //Import từ node_module
//../../../../ -> Alias import
import "./assets/style.css";
import "./assets/style.scss";
import config from "./config.json";
import img1 from "./images/img01.jpg";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
const { SERVER_API, PAGE_LIMIT } = config;
console.log(`SERVER_API=${SERVER_API}`, `PAGE_LIMIT=${PAGE_LIMIT}`);
console.log(img1);
export const App = () => {
  return `
  ${Header()}
  <h1>Hello F8: ${moment().format("DD/MM/YYYY HH:mm:ss")}</h1>
  <div class="content">
    <h2>Học JS không khó!!!!</h2>
  </div>
  ${Footer()}
  `;
};
