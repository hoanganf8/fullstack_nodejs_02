import district from "@/data/quan_huyen.json";
//GET /api/district?province_id=10
export function GET(request) {
  const provinceId = request.nextUrl.searchParams.get("province_id");
  if (!provinceId) {
    return Response.json(
      {
        status: "error",
        message: "Province ID is required",
      },
      {
        status: 400, //bad request
      },
    );
  }
  let data = Object.values(district);
  data.sort((a, b) => {
    return a.code - b.code;
  });
  data = data.filter(({ parent_code }) => parent_code === provinceId);
  return Response.json({ status: "success", data });
}
