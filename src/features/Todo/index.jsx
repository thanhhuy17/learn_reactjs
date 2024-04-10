import TodoList from "./components/TodoList";

TodoFutures.propTypes = {};
function TodoFutures() {
  const TodoListH = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];
  return (
    <div>
      <h3>Todo List Huy</h3>
      <TodoList todoList={TodoListH} />
    </div>
  );
}

export default TodoFutures;
