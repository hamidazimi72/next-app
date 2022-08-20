import { InfoUser, PostsList } from "./Components";

export const UserDetails = ({ user, posts }) => {
  return (
    <>
      <InfoUser user={user} />
      <PostsList posts={posts} />
    </>
  );
};
