import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
// let count = 0;
const MoneyTransfer = () => {
  const [cost, setCost] = useState(0);
  const [histories, setHistories] = useState([]);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setHistories([...histories, +cost]);
  //     setCost("");
  //   };
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setHistories((histories) => {
        return [...histories, +cost];
      });
      //setHistories([...histories, +cost]);
      setCost("");
    },
    [cost],
  );
  const handleChange = useCallback((e) => {
    setCost(e.target.value);
  }, []);
  console.log("re-render");
  const total = useMemo(() => {
    return histories.reduce((acc, current) => {
      console.log("Total");
      // console.log("Total: ", ++count);
      return acc + current;
    }, 0);
  }, [histories]);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={handleChange}
          value={cost}
        />
        <button>Add</button>
      </form>
      <h2>Lịch sử chuyển tiền</h2>
      {histories.map((item, index) => (
        <h3 key={index}>{item.toLocaleString()}</h3>
      ))}
      <h2>Tổng tiền: {total.toLocaleString()}</h2>
    </div>
  );
};

export default MoneyTransfer;

/*
Hook useMemo --> Cache logic tính toán --> Trả về giá trị
- Trả về 1 giá trị phụ thuộc vào giá trị trả về của callback
- callback trong useMemo phải có return
const value = useMemo(callback, deps)
*/
