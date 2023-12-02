//HTTP METHOD
/*
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE
*/

import provinces from "@/data/tinh_tp.json";
//GET /api/provinces
export function GET(request) {
  const data = Object.values(provinces);
  data.sort((a, b) => {
    return a.code - b.code;
  });
  return Response.json({ status: "success", data });
}
