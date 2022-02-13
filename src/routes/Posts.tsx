import AddPost from "../components/AddPost";
import PostsList from "../features/posts/PostsList";

export default function Posts() {
  return (
    <main style={{ padding: "2rem" }}>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Posts Table</h2>
      <PostsList />
      <AddPost />
    </main>
  );
}
