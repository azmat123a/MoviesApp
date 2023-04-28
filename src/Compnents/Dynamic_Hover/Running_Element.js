import React, { useState } from "react";
import '../../CSS/Dynamic_Hover.css'
function Running_Element() {
  const [position, setPosition] = useState({ x: 10, y: 10 });

  const handleMouseEnter = () => {
    const button = document.getElementById("hover-button");
    const container = button.parentNode;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const rect = button.getBoundingClientRect();
    console.log(containerHeight,containerWidth)
    setPosition({
      x: Math.floor(Math.random() * (containerWidth - rect.width)),
      y: Math.floor(Math.random() * (containerHeight - rect.height)),
    });
  };

  const buttonStyle = {
    position: "absolute",
    top: `${position.y}px`,
    left: `${position.x}px`,
  };

  return (
    <div className="main_container">
      <div id="container">
        <button type="button" className="btn btn-info"
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          id="hover-button"
        >
          Catch me if you can?</button>
      </div>
    </div>
  );
}

export default Running_Element;
