import { Link, Navigate, Route, Routes } from "react-router-dom";
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
        <Link to="/http://localhost:5173}"> Home Page</Link>
      </p>
      <p>
        <Link to="/todo"> Chuyển đến Todo </Link>
      </p>
      <p>
        <Link to="/album"> Chuyển đến Album </Link>
      </p>
      {/* NAVLink */}
      {/* <NavLink to="/todo" activeClassName="active-todo">
        ActiveToDoNavLink
      </NavLink>
      <p>
        <NavLink to="/album">ActiveAlbumNavLink</NavLink>
      </p> */}
      <Routes>
        {/* <Route path="/" Component={TodoFutures} /> */}
        <Route path="/todo" Component={TodoFutures} />
        <Route path="/album" Component={AlbumFeature} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
