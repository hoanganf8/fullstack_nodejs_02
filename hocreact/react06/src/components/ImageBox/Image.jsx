import { forwardRef, useImperativeHandle, useRef } from "react";
const Image = (props, ref) => {
  const imageRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      zoomIn: () => {
        console.log("ZoomIn");
        imageRef.current.style.width = `400px`;
      },

      zoomOut: () => {
        console.log("ZoomOut");
        imageRef.current.style.width = `100px`;
      },
    };
  });
  return (
    <div>
      <img ref={imageRef} src="https://picsum.photos/200/300" alt="" />
    </div>
  );
};

export default forwardRef(Image);
