import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
function TodoList({ props }) {
  let { items, handleCheckboxChange } = props;
  return (
    <div>
      {items.map((item) => (
        <TodoItem handleCheckboxChange={handleCheckboxChange} key={item.id} {...item}/>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TodoList;