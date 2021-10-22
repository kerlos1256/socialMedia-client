import { Comment } from "./comment.interface";
import { Post } from "./post.interface";
import { User } from "./user.interface";

export interface Reactions {
    id:number,
    uuid:string,
    postsReactions:PostReaction[],
    commentReactions:CommentReaction[],
    user: User,
    userId:number

}

export interface PostReaction {
    id: number,
    uuid: string,
    type: string,
    reaction: Reactions,
    reactionId: number,
    post: Post,
    postId: number
}

export interface CommentReaction {
    id: number,
    uuid: string,
    type: string,
    reaction: Reactions,
    reactionId: number,
    comment: Comment,
    commentId: number
}