import React from "react";
import "./slot-data.styles.css";

const SlotData = ({ slotData, isActive,handleClick,id }) => (
  <div onClick={() => handleClick(id)} className={`date-slot ${isActive ? "active-slot" : ""}`}>
    <p>{`${slotData.hour} ${
      slotData.min !== 0 ? ": " + slotData.min : ""
    } PM - ${slotData.hour + 1} ${
      slotData.min !== 0 ? ": " + slotData.min : ""
    } PM`}</p>
  </div>
);

export default SlotData;
