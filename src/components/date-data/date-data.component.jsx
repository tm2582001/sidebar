import React from "react";
import "./date-data.styles.css";

const DateData = ({ date, isActive, handleClick, id }) => (
  <div
    onClick={() => handleClick(id)}
    className={`date-slot ${isActive ? "active-slot" : ""}`}
  >
    <p>{date.substring(0, 3)}</p>
    <p className="date">{date.substring(8, 10)}</p>
    <p>{date.substring(4, 7)}</p>
  </div>
);

export default DateData;
