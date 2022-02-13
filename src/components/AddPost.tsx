import React from "react";
import PostCreatedNotification from "../features/posts/PostCreatedNotification";
import AddPostButton from "./AddPostButton";
import AddPostForm from "./AddPostForm";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddPost = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <AddPostButton openModal={setOpen} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddPostForm />
        </Box>
      </Modal>
      <PostCreatedNotification />
    </div>
  );
};

export default AddPost;
