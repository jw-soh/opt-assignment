import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import {  useAppDispatch } from "../app/hooks";
import { createNewPost } from "../features/posts/postsSlice";
import { getRandomArbitraryInteger } from "../utils/numbers";

// CSS Styles
const contentVertical: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};
const marginBottom20: React.CSSProperties = {
  marginBottom: "20px",
};

interface MyFormValues {
  firstName: string;
}

const AddPostForm: React.FC<{}> = () => {
  // To manage state of form
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const dispatch = useAppDispatch();

  const onSubmitHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const userId = getRandomArbitraryInteger(1, 1000);
    dispatch(createNewPost({ title, body, userId }));
  };

  return (
    <div>
      <h1>Add a post!</h1>
      <form style={contentVertical}>
        <TextField
          required
          helperText="Required field."
          id="filled-basic"
          label="Title"
          variant="filled"
          onChange={(event) => setTitle(event.target.value)}
          style={marginBottom20}
        />
        <TextField
          id="outlined-multiline-static"
          label="Body"
          multiline
          rows={4}
          placeholder="What's on your mind.."
          onChange={(event) => setBody(event.target.value)}
          style={marginBottom20}
        />
        {/* to use a Mui button */}
        <Button variant="outlined" onClick={(event) => onSubmitHandler(event)}>Create</Button>
      </form>
    </div>
  );
};

export default AddPostForm;
