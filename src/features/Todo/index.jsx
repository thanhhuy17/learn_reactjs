import { Route, Routes } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import ListPage from "./Pages/ListPage";

function TodoFutures() {
  return (
    <div>
      {/* <nav>
        <Link to="todo">List Page</Link>
      </nav>
      <nav>
        <Link to="/">Detail Page</Link>
      </nav> */}
      <Routes>
        <Route path="/list" element={<ListPage />}></Route>
        <Route path="/todo/:todoId" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default TodoFutures;
