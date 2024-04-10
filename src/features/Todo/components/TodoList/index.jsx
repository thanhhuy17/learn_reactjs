import PropTypes from "prop-types";
import classNames from "classnames";

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li
          key={todo.id}
          className={classNames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
