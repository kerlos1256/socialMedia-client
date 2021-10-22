import { PostReaction } from "./reactions.interface";
import { User } from "./user.interface";

export interface Post {
    id: number,
    uuid: string,
    body: string,
    user: User,
    userId: number,
    comments: Comment[],
    commentsLength: number
    reactions: PostReaction[]
    reactionsLength: number
}