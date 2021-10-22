import { NextPage } from "next";
import Feed from "../components/common/feed";
import WithAuth from "../components/auth/withAuth";

const feed: NextPage = () => {
  return (
    <WithAuth authed={true} destination="/login">
      <Feed />
    </WithAuth>
  );
};

export default feed;
