import { NextPage } from "next";
import useLayoutEffect from "../../../lib/useLayoutEffectHook";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_POST_SUBSCRIBE,
  GET_POSTS,
  NEW_POST_SUBSCRIBE,
} from "../../../gql/posts";
import {
  useApolloQuery,
  useApolloSubscription,
} from "../../../lib/apolloClient";
import { addPost, DeletePost, fetch } from "../../../reducers/posts";
import PostCard from "./components/PostCard";
import PostForm from "./components/PostForm";
import PostsListStyles from "./styles/PostsList.styles";
import {
  PostsContentContainer,
  FeedPostsContainer,
} from "./styles/Container.styles";

const Feed: NextPage = () => {
  const posts = useSelector((state: any) => state.posts.value);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    useApolloQuery(GET_POSTS, ({ findPosts }: any) => {
      dispatch(fetch(findPosts));
    });
    useApolloSubscription(NEW_POST_SUBSCRIBE, ({ postAdded }: any) => {
      dispatch(addPost(postAdded));
    });
    useApolloSubscription(DELETE_POST_SUBSCRIBE, ({ postDeleted }: any) => {
      dispatch(DeletePost(postDeleted));
    });
  }, []);

  return (
    <FeedPostsContainer>
      <PostsContentContainer>
        <PostForm />
        <PostsListStyles>
          {posts.posts.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostsListStyles>
      </PostsContentContainer>
    </FeedPostsContainer>
  );
};

export default Feed;
