import { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const todoModel = {
  id: 1,
    title: "ma super tâche",
    isCompleted: false,
    isEditing: false,
};

function App() {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState(todoModel);
    

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleTodoTitleChange = (value) => {
    setNewTodo({
      ...newTodo,
      title: value,
    });
  };

  const handleKeyDown = (key) => {
    if (key !== "Enter" || newTodo.title.trim() === "") return;

    setTodos((prevState) => [...prevState, newTodo]);
    todoModel.id = ++todoModel.id;
    setNewTodo(todoModel);
  };

  const handleCheckboxChange = () => {
    console.log("first");
  };

  return (
    <>
      <TodoInput
        newTodo={newTodo}
        handleTodoTitleChange={handleTodoTitleChange}
        handleKeyDownFromTodo={handleKeyDown}
      />
      <TodoList items={todos} handleCheckboxChange={handleCheckboxChange}/>
    </>
  );
}

export default App;