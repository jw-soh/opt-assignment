import React, { Dispatch } from "react";
import "./AddPostButton.css";
import Fab from "@mui/material/Fab";
import Icon from "./Icon";

const floatTopRight: React.CSSProperties = {
  position: "absolute",
  bottom: "3%",
  left: "3%",
  zIndex: 1,
};

const AddPostButton = ({
  openModal: openModal,
}: {
  openModal: Dispatch<React.SetStateAction<boolean>>;
}) => {

  const handleClick = () => {
    openModal(true);
  };
  return (
    <Fab variant="extended" onClick={handleClick}>
      <Icon.AddIcon sx={{ mr: 1 }} />
      Add Post
    </Fab>
  );
};

export default AddPostButton;
