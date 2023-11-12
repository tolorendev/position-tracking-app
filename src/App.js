import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [rectangle, setRectangle] = useState(null);

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    const rectangle = {
      startX: clientX,
      startY: clientY,
      width: 0,
      height: 0,
    };
    setRectangle(rectangle);
  };

  const handleMouseMove = (event) => {
    if (!rectangle) return;
    const { clientX, clientY } = event;
    const updatedRectangle = {
      ...rectangle,
      width: clientX - rectangle.startX,
      height: clientY - rectangle.startY,
    };
    setRectangle(updatedRectangle);
  };

  const handleMouseUp = () => {
    if (!rectangle) return;

    // Log tọa độ của hình chữ nhật
    console.log("X:", rectangle.startX, ", Y:", rectangle.startY);

    setRectangle(null);
  };

  return (
    <div
      className="app"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h1>Position tracking</h1>
      {rectangle && (
        <div
          style={{
            position: "absolute",
            top: rectangle.startY,
            left: rectangle.startX,
            width: rectangle.width,
            height: rectangle.height,
            border: "1px solid red",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      )}
    </div>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
