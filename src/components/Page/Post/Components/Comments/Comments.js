import Link from "next/link";

export const Comments = ({ comments }) => {
  return (
    <div className="shadow-md rounded px-8 py-6 my-4">
      {comments.length ? (
        <ul>
          {comments.map((c, i) => (
            <li key={i} className="shadow rounded px-8 py-4 mb-4 last:mb-0">
              <h5 className="text-lg font-medium text-sky-500 mb-1">{c?.name}</h5>
              <Link href={`mailto:${c?.email}`}>
                <a className="text-sm">{c?.email}</a>
              </Link>
              <div className="border-t-2 border-sky-200 my-3"></div>
              <p>{c?.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-3xl text-center text-sky-300">نظری ثبت نشده است!</p>
      )}
    </div>
  );
};
