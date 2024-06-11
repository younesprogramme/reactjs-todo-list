import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleaAddtodo = () => {
    const text = inputRef.current.value;
    if (text != "") {
      const newitem = { completed: false, text };
      setTodos([...todos, newitem]);
      console.log(text);
      inputRef.current.value = "";
    }

  }
  const handleItemDone = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed;
    console.log(newTodo[index].completed);
    setTodos(newTodo);
  }
  const handleItemDelete = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }
  return (
    <div className='App'>
      <h2>List</h2>
      <div className='to-do-container'>
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className='item'>
                <li className={completed ? "done" : ""} onClick={() => handleItemDone(index)} >{text}</li>
                <span onClick={() => handleItemDelete(index)} className='trash'>❌</span>
              </div>
            )
          })}
        </ul>
        <input ref={inputRef} placeholder='Enter item ...'></input>
        <button onClick={handleaAddtodo}>Add</button>
      </div>

    </div>
  );
}

export default App;
