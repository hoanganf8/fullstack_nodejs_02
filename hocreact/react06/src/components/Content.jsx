/* eslint-disable react/prop-types */
import { memo } from "react";
const Content = ({ onReset }) => {
  console.log("Content Re-renderr");
  return (
    <div>
      <h2>This is a content</h2>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default memo(Content);

//HOC = Higher Order Component --> Component cấp cao hơn bọc component hiện tại
// --> React.memo() --> Dựa vào sự thay đổi của props

//Build HOC: color --> Thay đổi màu ngẫu nhiên của 1 component
// - Nhận vào 1 component
// - Trả về 1 component mới --> Trả về component ban đầu
