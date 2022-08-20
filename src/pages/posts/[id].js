import axios from "axios";
import Head from "next/head";

import { BreadCrumb } from "../../components/Attom";
import { PostPage } from "./../../components/Page";

const Post = ({ post, comments, user }) => {
  const bcList = [
    { name: "صفحه اصلی", route: "/" },
    { name: "مقالات", route: "/posts" },
    { name: post?.title, route: null },
  ];

  return (
    <div dir="rtl" className="font-vazirmatn px-4 mx-auto max-w-screen-xl">
      <Head>
        <title>{post?.title}</title>
      </Head>
      <BreadCrumb list={bcList} />
      <PostPage post={post} comments={comments} user={user} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  let { id } = params;

  let resPost = await axios.get(`https://jsonplaceholder.ir/posts/${id}`);
  let post = resPost.data;

  let resComments = await axios.get(`https://jsonplaceholder.ir/posts/${id}/comments`);
  let comments = resComments.data;

  let resUser = await axios.get(`https://jsonplaceholder.ir/users/${post?.userId}`);
  let user = resUser.data;

  return {
    props: { post, comments, user },
  };
}

// export async function getStaticPaths() {
//   let resPost = await axios.get(`https://jsonplaceholder.ir/posts`);
//   let posts = resPost.data;

//   return {
//     paths: posts.map((post) => ({
//       params: {
//         id: post.id.toString(),
//       },
//     })),
//     fallback: false,
//   };
// }

export default Post;
