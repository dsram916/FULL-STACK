import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 2)}>Add</button>
      <button onClick={() => setCount(c => c - 1)}>Sub</button>
    </div>
  );
}

export default App;
