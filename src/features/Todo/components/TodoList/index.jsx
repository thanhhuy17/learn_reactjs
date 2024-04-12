import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};
// const inx = null;
function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, inx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, inx);
  };
  return (
    <ul className="todo-list">
      {todoList.map((todo, inx) => (
        <li
          key={todo.id}
          className={classNames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoClick(todo, inx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
