import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [rectangles, setRectangles] = useState([]);
  const [currentRectangle, setCurrentRectangle] = useState({
    startX: 0,
    startY: 0,
    width: 0,
    height: 0,
  });

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    setIsDrawing(true);
    setCurrentRectangle({
      startX: clientX,
      startY: clientY,
      width: 0,
      height: 0,
    });
  };

  const handleMouseMove = (event) => {
    if (!isDrawing) return;
    const { clientX, clientY } = event;
    setCurrentRectangle((prevRectangle) => ({
      ...prevRectangle,
      width: clientX - prevRectangle.startX,
      height: clientY - prevRectangle.startY,
    }));
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setRectangles((prevRectangles) => [...prevRectangles, currentRectangle]);
    setCurrentRectangle({
      startX: 0,
      startY: 0,
      width: 0,
      height: 0,
    });
  };

  const handleRectangleClick = (rectangle) => {
    alert(
      `Position: (${rectangle.startX}, ${rectangle.startY})\nSize: ${rectangle.width} x ${rectangle.height}`
    );
  };

  return (
    <div
      className="canvas"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {rectangles.map((rectangle, index) => (
        <div
          key={index}
          className="rectangle"
          style={{
            top: rectangle.startY,
            left: rectangle.startX,
            width: rectangle.width,
            height: rectangle.height,
          }}
          onClick={() => handleRectangleClick(rectangle)}
        />
      ))}
      {isDrawing && (
        <div
          className="current-rectangle"
          style={{
            top: currentRectangle.startY,
            left: currentRectangle.startX,
            width: currentRectangle.width,
            height: currentRectangle.height,
          }}
        />
      )}
    </div>
  );
};

export default App;
