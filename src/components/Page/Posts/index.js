import { useState } from "react";
import Link from "next/link";

import { Pagination } from "../../Attom";

export const PostsPage = ({ posts }) => {
  // States
  const [page, setPage] = useState(0);

  const itemPerPage = 8;

  return (
    <>
      {posts ? (
        <>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posts.slice(page, page + itemPerPage).map((item) => (
              <li
                key={item.id}
                className="flex flex-col justify-between p-2 shadow hover:shadow-md rounded transition-shadow"
              >
                <span>
                  <h4 className="font-semibold text-base mb-2">{item.title}</h4>
                  <p className="font-light text-sm mb-4">{item.body.split(" ").slice(0, 15).join(" ")} ...</p>
                </span>
                <Link href={`/posts/${item.id}`}>
                  <a className="text-left text-sm">ادامه مطلب</a>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination data={posts} page={page} setPage={setPage} itemPerPage={itemPerPage} />
        </>
      ) : (
        <p className="text-3xl text-center text-red-300">پستی جهت نمایش وجود ندارد!</p>
      )}
    </>
  );
};

export default PostsPage;
