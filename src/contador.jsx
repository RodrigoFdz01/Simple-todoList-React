import React, { useState } from "react";

export default function contador() {
  const [count, setCount] = useState(0);

  function addmas() {
    setCount(() => count + 1);
  }
  function addmenos() {
    setCount(() => count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={reset}>Reset</button>

      <button onClick={addmenos}>-</button>
      <button onClick={addmas}>+</button>
    </div>
  );
}
