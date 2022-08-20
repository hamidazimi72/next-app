import axios from "axios";
import Head from "next/head";

import { BreadCrumb } from "../../components/Attom";
import { UserDetails } from "../../components/Page";

const User = ({ user, posts }) => {
  const bcList = [
    { name: "صفحه اصلی", route: "/" },
    { name: "لیست کاربران", route: "/users" },
    { name: user?.name, route: null },
  ];

  return (
    <div dir="rtl" className="font-vazirmatn px-4 mx-auto max-w-screen-xl">
      <Head>
        <title>{`پروفایل کاربری | ${user?.name}`}</title>
      </Head>
      <BreadCrumb list={bcList} />
      <UserDetails posts={posts} user={user} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  let { id } = params;

  let resUser = await axios.get(`https://jsonplaceholder.ir/users/${id}`);
  let user = await resUser.data;

  let resPosts = await axios.get(`https://jsonplaceholder.ir/users/${id}/posts`);
  let posts = await resPosts.data;

  return {
    props: { user, posts },
  };
};

export default User;
