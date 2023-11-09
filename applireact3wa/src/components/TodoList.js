import React from "react";
import PropTypes from "prop-types";

export default function TodoList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
};
