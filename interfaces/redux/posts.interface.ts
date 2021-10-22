export interface Posts {
  reqKey: number;
  posts: Post[];
}

export interface Post {
  id: number;
  uuid: string;
  body: string;
  userId: number;
  user: User;
  commentsLength: number;
  reactionsLength: number;
  reactions: Reaction[];
}

export interface Reaction {
  type: string;
  reaction: {
    user: User;
  };
}

export interface User {
  id?: number;
  uuid?: string;
  username: string;
}
