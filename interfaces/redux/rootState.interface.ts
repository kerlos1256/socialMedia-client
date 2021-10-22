import { Posts } from "./posts.interface";
import { singlePost } from "./singlePost.interface";

export default interface rootState {
  singlePost: { value: singlePost };
  posts: { value: Posts };
}
