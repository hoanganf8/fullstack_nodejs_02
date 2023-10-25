import moment from "moment";

export const App = () => {
  return `<h1>Hello F8: ${moment().format("DD/MM/YYYY HH:mm:ss")}</h1>`;
};
