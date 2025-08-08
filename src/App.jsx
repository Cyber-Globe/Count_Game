import React from "react";
import Count from "./Count.jsx";
/**
 * Challenge:
 * - Create a new component called `Count`
 *    - It should receive a prop called `number`, whose value
 *      is the current value of our count
 *    - Have the component render the h2.count element below
 *      and display the incoming prop `number`
 * - Replace the h2.count below with an instance of
 *   the new Count component, passing the correct value
 *   to its `number` prop.
 * - After doing this, everything should be working the
 *   same as before.
 */
function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  }

  function subtract() {
    setCount(function (prevCount) {
      return prevCount - 1;
    });
  }
  console.log("app rendered");

  return (
    <main className="container">
      <h2>Count Application</h2>
      <div className="counter">
        <button
          onClick={subtract}
          className="minus"
          aria-label="Decrease count"
        >
          –
        </button>
        <Count number={count} />
        <button onClick={add} className="plus" aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}

export default App;
