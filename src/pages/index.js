import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <div dir="rtl" className="font-vazirmatn px-4 mx-auto  max-w-screen-xl">
      <Head>
        <title>صفحه اصلی</title>
      </Head>
      <ul className="flex flex-col">
        <li>
          <Link href="/posts">
            <a>مطالب</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>کاربر ها</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
