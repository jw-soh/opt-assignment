import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchAllPosts, selectAllPosts, deletePost } from "./postsSlice";
import { DataGrid, GridCellParams, MuiEvent } from "@mui/x-data-grid";
import CustomToolbar from "../../components/CustomToolbar";
import "./GridToolbar.css";
import columns from "./PostsColumnSettings";

const PostsList = () => {
  const posts = useAppSelector(selectAllPosts);
  const postStatus = useAppSelector((state) => state.posts.status);
  const [postIsLoading, setPostIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchAllPosts());
    } else if (postStatus === "succeeded") {
      setPostIsLoading(!postIsLoading);
    }
  }, [postStatus, dispatch]);

  return (
    <DataGrid
      autoPageSize
      columns={columns}
      components={{ Toolbar: CustomToolbar }}
      disableExtendRowFullWidth
      editMode="row"
      style={{ height: "800px" }}
      rows={posts}
      onCellClick={(
        params: GridCellParams,
        event: MuiEvent<React.MouseEvent>
      ) => {
        event.defaultMuiPrevented = true;

        switch (params.field) {
          case "show": // apply read logic
            break;
          case "update":
            console.log(
              "Unable to enter row edit mode by clicking another element as DataGrid Community Version does not support it."
            );
            break;
          case "delete":
            let postId: number = Number(params.id);
            dispatch(deletePost({ postId }));
            break;
          default:
            break;
        }
      }}
    />
  );
};

export default PostsList;
