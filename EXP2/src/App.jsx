import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [list, setList] = useState([])

  function addItem() {
    if (text !== "") {
      setList([...list, text])
      setText("")
    }
  }

  function deleteItem(index) {
    list.splice(index, 1)
    setList([...list])
  }

  return (
    <div className="app">
      <h2>To Do App</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App