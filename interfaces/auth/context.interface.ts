import { Post } from "../fetch/post.interface";
import { authUser } from "./authUser.interface";

export interface UserContextTypes {
    user: authUser | null,
    login: any,
    logout: any
}


export interface PostsContextTypes {
    posts: any,
    addPost:any
    create: any
    Delete: any
}