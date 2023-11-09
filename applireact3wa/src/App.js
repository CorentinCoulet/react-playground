import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState({
    id: 1,
    title: "ma super tâche",
    isCompleted: false,
    isEditing: false,
  });

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleTodoTitleChange = (value) => {
    setNewTodo({
      ...newTodo,
      title: value,
    });
  };

  const handleChange = (e) => {};

  const handleKeyDown = (key) => {
    if (key !== "Enter" || newTodo.title.trim() === "") return;

    setTodos((prevState) => [...prevState, newTodo]);
    setNewTodo({
      ...newTodo,
      title: "",
    });
  };

  return (
    <>
      <TodoInput
        newTodo={newTodo}
        handleTodoTitleChange={handleTodoTitleChange}
        handleKeyDownFromTodo={handleKeyDown}
      />
      <TodoList items={todos} />
    </>
  );
}

export default App;