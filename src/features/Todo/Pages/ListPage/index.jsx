import { useState } from "react";
import TodoList from "../../components/TodoList";
import "../../styles.scss";
ListPage.propTypes = {};
function ListPage() {
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
  // Set filler
  const [fillteredStatus, setFillteredStatus] = useState("all");

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

  const handleShowAllClick = () => {
    setFillteredStatus("all");
  };
  const handleShowCompletedClick = () => {
    setFillteredStatus("completed");
  };
  const handleShowNewClick = () => {
    setFillteredStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => fillteredStatus === "all" || fillteredStatus === todo.status,
  );
  console.log(renderedTodoList);

  return (
    <div>
      <h3>Todo List Huy</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      {/* Thêm 3 Button */}
      <div>
        <button className="btnAll" onClick={handleShowAllClick}>
          Show All
        </button>
        <button className="btnCom" onClick={handleShowCompletedClick}>
          Show Completed
        </button>
        <button className="btnNew" onClick={handleShowNewClick}>
          Show New
        </button>
      </div>
    </div>
  );
}

export default ListPage;
