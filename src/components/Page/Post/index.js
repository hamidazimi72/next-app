import { Author, Comments, Content } from "./Components";

export const PostPage = ({ post, comments, user }) => {
  return (
    <>
      <Content content={post} />
      <Author author={user} />
      <Comments comments={comments} />
    </>
  );
};

export default PostPage;
