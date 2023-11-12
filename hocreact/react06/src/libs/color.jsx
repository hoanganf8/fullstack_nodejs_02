export const color = (ParentComponent) => {
  //ParentComponent --> Component ban đầu
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const Component = (props) => {
    //Component mới được tạo ra
    return (
      <div style={{ color: getRandomColor() }} className="color">
        <ParentComponent {...props} color={getRandomColor()} />
      </div>
    ); //Trả về component ban đầu
  };
  return Component;
};

//HOC
