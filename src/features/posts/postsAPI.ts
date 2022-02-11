import { Post } from "./postTypes";

export const fetchAllPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  }).then((response) => response.json());
  return response;
};
export const updatePost = async (initialPost: Post): Promise<Post> => {
  const { id } = initialPost;
  console.log(JSON.stringify(initialPost))
  const response: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(initialPost),
    }
  ).then((response) => response.json());

  // The response includes the complete post object, including unique ID
  console.log('updatePost fetch ran')
  console.log(JSON.stringify(initialPost))
  console.log(response);
  return response;
};
export const createNewPost = async (initialPost: {
  title: string;
  body: string;
  userId: number;
}): Promise<Post> => {
  // We send the initial data to the fake API server
  const response: Post = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      body: JSON.stringify(initialPost),
    }
  ).then((response) => response.json());

  // The response includes the complete post object, including unique ID
  return response;
};

export const deletePost = async (initialPost: { postId: number }) => {
  // We send the initial data to the fake API server
  const { postId } = initialPost;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
    }
  ).then((response) => response.json());
  return postId;
};
