import { PropTypes } from "prop-types";

function TodoInput({ newTodo, handleTodoTitleChange, handleKeyDownFromTodo }) {

  const handleKeyDown = (e) => {
    let { key } = e;
    if (key !== "Enter" || newTodo.title === "") return;

    handleKeyDownFromTodo(key);
  };

  const handleChange = (e) => {
    handleTodoTitleChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo.title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );

  TodoInput.PropTypes = {
    newTodo: PropTypes.object.isRequired,
    handleTodoTitleChange: PropTypes.func.isRequired,
  };
}

export default TodoInput;