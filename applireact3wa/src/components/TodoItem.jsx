import { Proptypes } from "prop-types";

function TodoItem(props) {
  let { id, title, isCompleted, isEditing, handleCheckboxChange } = props;
  return (
    <div>
      <input 
        type="checkbox" 
        checked={isCompleted} 
        onChange={() => handleCheckboxChange(id)} 
      />
      <span>{title}</span>
    </div>
  );
}

TodoItem.protoTypes = {
  id: Proptypes.number,
  title: Proptypes.string,
  isCompleted: Proptypes.bool,
  isEditing: Proptypes.bool,
}

export default TodoItem;
