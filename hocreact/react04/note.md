# Hook useReducer

- useState -> Logic nằm ở eventHandler, callAPI,... -> Xử lý ở trong component

=> Tách logic update State -> reducer (Ôn tập lại hàm reduce)

=> Dùng để quản lý State phức tạp

```js
const reducer = (prev, current) => {
  //Xử lý logic update state -> return về state mới
};
const [state, dispatch] = useReducer(reducer, initialState);
```

Dispatch là gì?

- dispatch là 1 hàm (Khá giống hàm setState ở hook useState)
- khi hàm dispatch được gọi đẩy dữ liệu lên reducer (Tham số current)
- dispatch sẽ nhận vào 1 đối số gọi là action

Action là gì?

- Action là 1 object
- Action sẽ mô tả hành động

```js
{
    type: "ten action",
    payload: "du lieu muon gui len reducer"
}
```
