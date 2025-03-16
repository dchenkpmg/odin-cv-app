import React, { useState } from "react";
import visibleArrow from "../assets/chevron-down.svg";
import hiddenArrow from "../assets/chevron-up.svg";
import "../styles/Card.css";

export default function Card({ title, children }) {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={handleClick}>
        <img src={isVisible ? visibleArrow : hiddenArrow}></img>
        <span>{title}</span>
      </button>
      {isVisible && children}
    </div>
  );
}
