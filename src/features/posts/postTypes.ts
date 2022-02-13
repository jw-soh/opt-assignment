export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Status = "idle" | "loading" | "succeeded" | "failed";

type createState = {
  status: Status;
}

export type PostsState = {
  create: createState;
  items: Post[];
  // Multiple possible status values
  status: Status;
  error: string | undefined;
};

export type PostHeadCells = {
  id: string;
  label: string;
};
