import { Comment } from "./comment.interface";
import { Post } from "./post.interface";
import { Reactions } from "./reactions.interface";

export interface User {
    id:number,
    uuid:string,
    username:string,
    email:string,
    bio:string,
    posts:Post[],
    comments:Comment[],
    reactions:Reactions
}