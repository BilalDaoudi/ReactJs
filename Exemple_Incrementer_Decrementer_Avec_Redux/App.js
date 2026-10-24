import { useSelector, useDispatch } from "react-redux";
function App() {
  const num = useSelector((data) => data.num);
  const dispatch = useDispatch();
  const Incrementer = () => {
    return { type: "Incrementer" };
  };
  const Decrementer = () => {
    return { type: "Decrementer" };
  };
  const Reset = () => {
    return { type: "Reset" };
  };
  return (
    <div className="App">
      <div>{num}</div>
      <div>
        <button onClick={() => dispatch(Incrementer())}>Incrementer</button>
        <button onClick={() => dispatch(Decrementer())}>Decrementer</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
      </div>
    </div>
  );
}
export default App;
