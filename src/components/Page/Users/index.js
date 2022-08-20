import Image from "next/image";
import Link from "next/link";

import { Card } from "./../../Attom";

export const UsersList = ({ users }) => {
  return (
    <>
      <h2>لیست کاربران</h2>
      <ul>
        {users.length ? (
          users.map((user) => (
            <li key={user?.id}>
              <Card radius="7">
                <span>
                  <Link href={`/users/${user?.id}`}>
                    <a>
                      <Image src={user?.avatar} width={64} height={64} />
                    </a>
                  </Link>
                </span>
                <Link href={`/users/${user?.id}`}>
                  <a>
                    <h3>{user.name}</h3>
                  </a>
                </Link>
                <span>{user?.email}</span>
                <span>{user?.website}</span>
                <span>{`${user?.address?.country} - ${user?.address?.city}`}</span>
              </Card>
            </li>
          ))
        ) : (
          <p>کاربری موجود نمی‌باشد!</p>
        )}
      </ul>
    </>
  );
};
