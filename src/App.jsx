import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoFutures from "./features/Todo";
import AlbumFeature from "./features/Album";
// import ColorBox from "./components/ColorBox";
// import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      HUY NGUYEN
      <p>
        <Link to="/http://localhost:5173}"> Chuyển đến Trang chủ </Link>
      </p>
      <p>
        <Link to="/todo"> Chuyển đến Todo </Link>
      </p>
      <p>
        <Link to="/album"> Chuyển đến Album </Link>
      </p>
      {/* NAVLink */}
      <NavLink to="/todo" activeClassName="active-todo">
        ActiveToDoNavLink
      </NavLink>
      <NavLink to="/Album">ActiveAlbumNavLink</NavLink>
      <Routes>
        {/* <Route path="/MainPage" Component={"/http://localhost:5173}"} /> */}
        <Route path="/todo" Component={TodoFutures} />
        <Route path="/album" Component={AlbumFeature} />
      </Routes>
    </div>
  );
}

export default App;
