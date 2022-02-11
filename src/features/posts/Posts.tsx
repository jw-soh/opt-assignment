import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchAllPosts, selectAllPosts } from "./postsSlice";

const Posts = () => {
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
<></>
  );
};

export default Posts;
