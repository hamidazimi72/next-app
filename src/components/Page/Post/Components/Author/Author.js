import Image from "next/image";
import Link from "next/link";

export const Author = ({ author }) => {
  return (
    <div className="shadow-md rounded flex items-center px-8 py-4 my-4">
      <span className="inline-block rounded-full border-4 border-sky-400 w-16 h-16 overflow-hidden">
        <Link href={`/users/${author?.id}`}>
          <a>
            <Image src={author?.avatar} width={64} height={64} />
          </a>
        </Link>
      </span>
      <span className="mr-6 block">
        <Link href={`/users/${author?.id}`}>
          <a>
            <h4 className="text-lg font-semibold text-sky-500">{author?.name}</h4>
          </a>
        </Link>
        <span className="block">پست الکترونیک: {author?.email ?? "-"}</span>
        <span className="block">وبسایت: {author?.website ?? "-"}</span>
      </span>
    </div>
  );
};
