import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button>+</button>
      <button>-</button>
      {isLogged ? <h4>Valuable information</h4> : ""}
    </div>
  );
}

export default App;
