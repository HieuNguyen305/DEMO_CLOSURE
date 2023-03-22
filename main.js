// Closure : 1 function return về 1 func khác
// có thể dùng cách khác để trả về giá trị mới cho biến x = cách đem let x = 0 ra bên ngoài phạm vi global
// Nhưng nếu chúng ta chỉ muốn đóng gói nó trong 1 func thay vì đem ra global để thay đổi giá trị

const increment = () => {
  let x = 0;
  const incrementInner = () => {
    return ++x;
  };
  return incrementInner;
};

const useIncrement = increment();
console.log(useIncrement());
console.log(useIncrement());

const useState = (value) => {
  let _val = value;
  const state = () => _val;
  const setState = (newValue) => {
    _val = newValue;
  };
  return [state, setState];
};

const [state, setState] = useState(0);

console.log(state());
setState(1);
console.log(state());
setState(2);
console.log(state());
