export const Header = () => {
  console.log(process.env.APP_NAME);
  console.log(process.env.APP_EMAIL);
  console.log(process.env.SERVER_API);
  console.log(process.env.NODE_ENV); //Trả về tên môi trường
  return `<h1>HEADER</h1>`;
};
