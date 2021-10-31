import { increment, decrement } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? <h4>Valuable information</h4> : ""}
    </div>
  );
}

export default App;
