//Nối các module khác
/*
1. Export
- Export Default
- Export Named

2. Import
- Import Default
- Import Named

File này sẽ import những tài nguyên (biến, function, class) được export từ file khác

*/

import user from "./modules/home.js";
// import getProducts, {
//   product as productInfo,
//   category,
// } from "./modules/products.js";
// console.log(productInfo);
// console.log(category);

import * as products from "./modules/products.js";

console.log(products);
