import React from "react";
import Icons from "./Icon";
import "./SeeItem.css";

const ShowItem = () => {
  return (
    <div className="see-item">
      <span>
        <Icons.RemoveRedEyeIcon />
      </span>
      <span>SHOW</span>
    </div>
  );
};

export default ShowItem;
