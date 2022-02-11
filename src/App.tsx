import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { fetchAllPosts, selectAllPosts } from "./features/posts/postsSlice";
import "./App.css";

function App() {
  // const posts = useAppSelector(selectAllPosts);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchAllPosts());
  // }, []);
  return (
    <div>
      It's working
      {/* {posts.map((post) => (
        <h2>{post.id}</h2>
      ))} */}
    </div>
  );
}

export default App;
