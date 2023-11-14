import { useState, useTransition } from "react";
import students from "./db.json";
const Students = () => {
  const [keyword, setKeyword] = useState("");
  const [pending, startTransition] = useTransition();
  const handleSearch = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };
  return (
    <div>
      <input type="text" placeholder="Từ khóa..." onChange={handleSearch} />
      <h2>Danh sách sinh viên</h2>
      {pending && <h3 style={{ background: "yellow" }}>Đang tìm...</h3>}
      {students.map(({ id, fullName }) => {
        const position = fullName.toLowerCase().indexOf(keyword.toLowerCase());
        if (keyword.length && position !== -1) {
          return (
            <h3 key={id}>
              {fullName.slice(0, position)}
              <span style={{ background: "yellow" }}>
                {fullName.slice(position, position + keyword.length)}
              </span>
              {fullName.slice(position + keyword.length)}
            </h3>
          );
        }
        return <h3 key={id}>{fullName}</h3>;
      })}
    </div>
  );
};

export default Students;
