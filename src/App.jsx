// import "./App.css";
// import TodoFeatures from "./features/Todo";
import AlbumFeature from "./features/Album";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      {/* <TodoFeatures /> */}
      <AlbumFeature />
      <ColorBox />
      <Counter />
    </div>
  );
}

export default App;
