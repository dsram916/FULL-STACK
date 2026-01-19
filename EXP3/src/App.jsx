import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
  }

  return (
    <div className={dark ? "dark" : "light"}>
      <h2>Theme Toggle</h2>

      <button onClick={toggleTheme}>
        Change Theme
      </button>

      <p>
        Current Mode: {dark ? "Dark" : "Light"}
      </p>
    </div>
  );
}

export default App;