export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsState = {
  items: Post[];
  // Multiple possible status values
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
};

export type PostHeadCells = {
  id: string;
  label: string;
};
