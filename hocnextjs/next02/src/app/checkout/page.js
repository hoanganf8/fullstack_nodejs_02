"use client";
import { useState } from "react";
import useSWR from "swr";
const provinceApi = `http://localhost:3000/api/provinces`;
const districtApi = `http://localhost:3000/api/district`;
const fetcher = (url) => fetch(url).then((response) => response.json());
const CheckoutPage = () => {
  const [provinceId, setProvinceId] = useState();
  const handleChangeProvince = (e) => {
    setProvinceId(e.target.value);
  };
  const { data: provinces } = useSWR(provinceApi, fetcher);
  const { data: district } = useSWR(
    `${districtApi}?province_id=${provinceId}`,
    fetcher,
  );
  return (
    <div>
      <select name="" id="" onChange={handleChangeProvince}>
        <option value="">Chọn Tỉnh/Thành phố</option>
        {provinces?.data?.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
      <select name="" id="">
        <option value="">Chọn Quận/Huyện</option>
        {district?.data?.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CheckoutPage;
