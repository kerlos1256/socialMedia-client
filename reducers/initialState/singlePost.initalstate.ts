import { singlePost } from "../../interfaces/redux/singlePost.interface";

const singlePostInitState: singlePost = {
  reqKey: 0,
  id: 0,
  uuid: "",
  body: "",
  createdAt: "",
  updateAt: "",
  commentsLength: 0,
  reactionsLength: 0,
  userId: 0,
  user: {
    id: 0,
    uuid: "",
    username: "",
    email: "",
    bio: "",
  },
  reactions: [
    {
      id: 0,
      uuid: "",
      type: "",
      createdAt: "",
      updateAt: "",
      reaction: {
        user: {
          id: 0,
          username: "",
        },
      },
    },
  ],
  comments: [
    {
      id: 0,
      uuid: "",
      body: "",
      createdAt: "",
      updateAt: "",
      reactionsLength: 0,
      post: {
        commentsLength: 0,
        reactionsLength: 0,
        uuid: "",
      },
      reactions: [
        {
          id: 0,
          uuid: "",
          type: "",
          createdAt: "",
          updateAt: "",
          reaction: {
            user: {
              id: 0,
              username: "",
            },
          },
        },
      ],
      user: {
        id: 0,
        uuid: "",
        username: "",
      },
    },
  ],
};

export default singlePostInitState;
