import React from "react";
import Icons from "./Icon";
import "./EditItem.css";

const EditItem = () => {
  return (
    <div className="edit-item">
      <span>
        <Icons.EditIcon />
      </span>
      <span>Edit</span>
    </div>
  );
};

export default EditItem;
