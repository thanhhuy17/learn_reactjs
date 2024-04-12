import { useState } from "react";
import TodoList from "./components/TodoList";

function TodoFutures() {
  const initTodoListH = [
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

  const [todoList, setodoList] = useState(initTodoListH);

  const handleTodoClick = (todo, inx) => {
    //clone curent array to the new one
    const newTodoList = [...todoList];
    console.log(todo, inx);
    //Toggle State
    newTodoList[inx] = {
      ...newTodoList[inx],
      status: newTodoList[inx].status === "new" ? "completed" : "new",
    };
    // newTodoList[inx] = newTodo;
    //Update todolist
    setodoList(newTodoList);
  };

  return (
    <div>
      <h3>Todo List Huy</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFutures;
