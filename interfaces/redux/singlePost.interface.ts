export interface singlePost {
  reqKey: number;
  id: number;
  uuid: string;
  body: string;
  createdAt: string;
  updateAt: string;
  user: FindPostUser;
  userId: number;
  commentsLength: number;
  comments: Comment[];
  reactionsLength: number;
  reactions: Reactions[];
}

export interface Comment {
  id: number;
  uuid: string;
  body: string;
  createdAt: string;
  updateAt: string;
  post: Post;
  user: CommentUser;
  reactionsLength: number;
  reactions: Reactions[];
}

export interface Post {
  uuid: string;
  commentsLength: number;
  reactionsLength: number;
}

export interface Reactions {
  id: number;
  uuid: string;
  type: string;
  createdAt: string;
  updateAt: string;
  reaction: ReactionReaction;
}

export interface ReactionReaction {
  user: ReactionUser;
}

export interface ReactionUser {
  id: number;
  username: string;
}

export interface CommentUser {
  id: number;
  uuid: string;
  username: string;
}

export interface FindPostUser {
  id: number;
  uuid: string;
  username: string;
  email: string;
  bio: string;
}
