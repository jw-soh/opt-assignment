import React from "react";
import Icons from "./Icon";
import "./DeleteItem.css";

const DeleteItem = () => {
  return (
    <div className="delete-item">
      <span>
        <Icons.DeleteIcon />
      </span>
      <span>DELETE</span>
    </div>
  );
};

export default DeleteItem;
