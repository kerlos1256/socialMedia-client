import { useDispatch, useSelector } from "react-redux";
import { DELETE_POST } from "../../../../../gql/posts";
import { Post } from "../../../../../interfaces/fetch/post.interface";
import { useApolloMutation } from "../../../../../lib/apolloClient";
import { DeletePost, ReactionAdded } from "../../../../../reducers/posts";
import {
  ReactionsContainer,
  CommentsContainer,
  PostBodyContainer,
  PostCardContainer,
  PostDelete,
  PostUserContainer,
  PostUserImg,
  PostUserInfo,
  EmojisContainer,
  ReactionsCon,
  MyFontAwesomeIcon,
  ReactionsLength,
} from "./styles/PostCard.styles";
import { useRouter } from "next/dist/client/router";
import { useRef } from "react";
import { REACT_ON_POST } from "../../../../../gql/reactions";
import {
  faAngry,
  faComments,
  faHeart,
  faLaughSquint,
  faSadTear,
  faThumbsUp,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Reaction } from "../../../../../interfaces/redux/posts.interface";
import rootState from "../../../../../interfaces/redux/rootState.interface";

interface props {
  post: Post;
}

interface EmojiType {
  type: string;
  icon: IconDefinition;
  color: string;
}

const PostCard: React.FC<props> = ({ post }) => {
  const router = useRouter();
  const emojiRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.value);
  const StorePost = useSelector((state: rootState) => state.posts);
  const emojis: EmojiType[] = [
    { type: "angry", icon: faAngry, color: "#000000" },
    { type: "sad", icon: faSadTear, color: "#000000" },
    { type: "funny", icon: faLaughSquint, color: "#000000" },
    { type: "love", icon: faHeart, color: "#ff0000" },
    { type: "like", icon: faThumbsUp, color: "#0057b3" },
  ];

  const Reaction = (type: string) => {
    useApolloMutation(
      REACT_ON_POST,
      ({ reactOnPost }: { reactOnPost: Reaction }) => {
        dispatch(ReactionAdded({ postId: post.id, reaction: reactOnPost }));
      },
      { postUuid: post.uuid, type }
    );
  };

  const deletePost = () => {
    useApolloMutation(
      DELETE_POST,
      ({ deletePost }: any) => {
        dispatch(DeletePost(deletePost));
      },
      { postUuid: post.uuid }
    );
  };
  return (
    <PostCardContainer>
      <PostUserContainer>
        <PostUserInfo>
          <PostUserImg src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png" />
          <h4>{post.user.username}</h4>
        </PostUserInfo>
        <PostDelete>
          {user.username === post.user.username ? (
            <p onClick={() => deletePost()}>Delete</p>
          ) : null}
        </PostDelete>
      </PostUserContainer>
      <PostBodyContainer>
        <p>{post.body}</p>
      </PostBodyContainer>
      <ReactionsContainer>
        <CommentsContainer onClick={() => router.push(`/post/${post.uuid}`)}>
          <MyFontAwesomeIcon color="#009eb3" icon={faComments} />
          <div>{post.commentsLength}</div>
        </CommentsContainer>
        <ReactionsCon>
          <EmojisContainer>
            {emojis.map((emoji) => (
              <MyFontAwesomeIcon
                onClick={() => Reaction(emoji.type)}
                icon={emoji.icon}
                color={emoji.color}
                key={emoji.type}
              />
            ))}
          </EmojisContainer>
          {post.reactions.find(
            (reaction) => reaction.reaction.user.username === user.username
          ) ? (
            <ReactionsLength reacted={true}>
              {post.reactionsLength}
            </ReactionsLength>
          ) : (
            <ReactionsLength reacted={false}>
              {post.reactionsLength}
            </ReactionsLength>
          )}
        </ReactionsCon>
      </ReactionsContainer>
    </PostCardContainer>
  );
};
export default PostCard;
