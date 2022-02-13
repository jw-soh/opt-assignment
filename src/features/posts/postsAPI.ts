import { Post } from "./postTypes";
import { getRandomArbitraryInteger } from "../../utils/numbers";

export const fetchAllPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  }).then((response) => response.json());
  return response;
};
export const updatePost = async (initialPost: Post): Promise<Post> => {
  const { id } = initialPost;
  console.log(JSON.stringify(initialPost));
  const response: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(initialPost),
    }
  ).then((response) => response.json());

  // The response includes the complete post object, including unique ID
  console.log("updatePost fetch ran");
  console.log(JSON.stringify(initialPost));
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

  // The API response always sends the same id which causes unique id issues
  // Hence, generating a fake one with a low chance of getting a duplicated id
  const fakePostId = {id: getRandomArbitraryInteger(100, 100000)};

  return { ...fakePostId , ...initialPost };
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
