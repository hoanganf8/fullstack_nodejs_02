import { useContext } from "react";
import { MyContext } from "../App01";

const Content = () => {
  const { state } = useContext(MyContext);
  return (
    <div className="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, mollitia
        nemo quam numquam nobis eveniet facere vel labore saepe veniam,
        perferendis minima. Placeat voluptatibus soluta eaque dicta corrupti
        sequi nulla?
      </p>
      <h4>Đang sử dụng theme: {state.theme}</h4>
    </div>
  );
};

export default Content;
