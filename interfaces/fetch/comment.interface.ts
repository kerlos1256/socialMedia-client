import { Post } from "./post.interface";
import { CommentReaction } from "./reactions.interface";
import { User } from "./user.interface";

export interface Comment {
id:number,
uuid:string,
body:string,
post:Post[],
postId:number
user:User,
userId:number,
reactions:CommentReaction[]
}