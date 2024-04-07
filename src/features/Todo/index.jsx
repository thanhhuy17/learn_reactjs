// import React from "react";
// import PropTypes from "prop-types";

TodoFutures.propTypes = {};
function TodoFutures() {
  const TodoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ];
  return (
    <div>
      <h3>Todo List Huy</h3>
      <TodoList todoList={TodoList} />
    </div>
  );
}

export default TodoFutures;
