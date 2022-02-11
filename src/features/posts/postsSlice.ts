import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Post, PostsState } from "./postTypes";
import * as postsAPI from "./postsAPI";

const initialState: PostsState = {
  items: [],
  status: "idle",
  error: undefined,
};

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  postsAPI.createNewPost
);
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  postsAPI.deletePost
);
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  postsAPI.updatePost
);
export const fetchAllPosts = createAsyncThunk(
  "posts/fetchPosts",
  postsAPI.fetchAllPosts
);
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers(builder) {
    // Create, Read, Update, Delete
    builder
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(fetchAllPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.concat(action.payload);
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        console.log('update Post reducer ran')
        console.log(action.payload);
        const { id, title, body } = action.payload;
        const existingPost = state.items.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = title;
          existingPost.body = body;
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const postId = action.payload;
        state.items = state.items.filter((post) => post.id !== postId);
      });
  },
});

export const {} = postsSlice.actions;

// Selectors
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAllPosts = (state: RootState) => state.posts.items;
export const selectPostById = (state: RootState, postId: number) =>
  state.posts.items.find((post: Post) => post.id === postId);

export default postsSlice.reducer;
