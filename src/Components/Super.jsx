import React, { useEffect, useState } from 'react';

function Super() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleClick = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput(""); // optional: clear input
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleClick}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          <button>delete</button>
          </li>
         
          
        ))}
      </ul>
    </div>
  );
}

export default Super;
