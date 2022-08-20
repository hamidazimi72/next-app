import axios from "axios";
import Head from "next/head";

import { BreadCrumb } from "../../components/Attom";
import { PostsPage } from "../../components/Page";

const Posts = ({ posts }) => {
  const bcList = [
    { name: "صفحه اصلی", route: "/" },
    { name: "مقالات", route: null },
  ];

  return (
    <div dir="rtl" className="font-vazirmatn px-4 mx-auto max-w-screen-xl">
      <Head>
        <title>آرشیو مطالب</title>
      </Head>
      <h2>آرشیو مطالب</h2>
      <BreadCrumb list={bcList} />
      <PostsPage posts={posts} />
    </div>
  );
};

export async function getStaticProps() {
  let res = await axios.get("https://jsonplaceholder.ir/posts");
  let posts = await res.data;

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
