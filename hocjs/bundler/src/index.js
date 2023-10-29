import dotenv from "dotenv";
dotenv.config();
import { App } from "./App";
const root = document.querySelector("#root");
root.innerHTML = App();
