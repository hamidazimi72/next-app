import axios from "axios";
import Head from "next/head";

import { BreadCrumb } from "../../components/Attom";
import { UsersList } from "../../components/Page";

const Users = ({ users }) => {
  const bcList = [
    { name: "صفحه اصلی", route: "/" },
    { name: "لیست کاربران", route: null },
  ];

  return (
    <div dir="rtl" className="font-vazirmatn px-4 mx-auto max-w-screen-xl">
      <Head>
        <title>لیست کاربران</title>
      </Head>
      <BreadCrumb list={bcList} />
      <UsersList users={users} />
    </div>
  );
};

export const getStaticProps = async () => {
  let res = await axios.get("https://jsonplaceholder.ir/users");
  let users = await res.data;

  return {
    props: {
      users,
    },
  };
};

export default Users;
