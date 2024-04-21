import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoFutures from "./features/Todo";
import AlbumFeature from "./features/Album";
// import ColorBox from "./components/ColorBox";
// import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      HUY NGUYEN
      <Routes>
        <Route path="/todo" Component={TodoFutures} />
        <Route path="/album" Component={AlbumFeature} />
      </Routes>
    </div>
  );
}

export default App;
