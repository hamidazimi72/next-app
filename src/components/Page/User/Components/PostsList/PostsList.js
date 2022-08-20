import Link from "next/link";

export const PostsList = ({ posts }) => {
  return (
    <>
      {posts.length ? (
        <ul>
          {posts.map((post) => (
            <li key={post?.id}>
              <Link href={`/posts/${post?.id}`}>
                <a>
                  <h4>{post.title}</h4>
                </a>
              </Link>
              <p>{post?.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>مطلبی یافت نشد!</p>
      )}
    </>
  );
};
