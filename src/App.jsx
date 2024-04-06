// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const name = "Nguyen Thanh Huy";
  const age = 25;
  const Isfemal = true;
  const student = {
    name: "Easy FrontEnd By H",
  };
  const colorList = ["red", "green", "blue", "orange"];

  return (
    <div className="App">
      <header className="App-Header">
        <img src="./images/logo.png" className="App_logo" alt="logo" />
        <p>Huy Nguyen</p>
        <p>
          Xin Chao {name} - {age}
        </p>
        <p>{Isfemal ? "Female" : "Male"}</p>
        <p>{student["name"]}</p>
        <ul>
          {colorList.map((color, index) => (
            <li key={color} style={{ color }}>
              {color} - {index}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
