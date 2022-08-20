import Image from "next/image";

export const InfoUser = ({ user }) => {
  return (
    <>
      {user ? (
        <>
          <Image src={user?.avatar} width={64} height={64} />
          <h3>{user?.name}</h3>
          <div>پست الکترونیک: {user?.email ? <a href={`mailto:${user?.email}`}>{user?.email}</a> : "-"}</div>
          <div>وبسایت: {user?.website ? <a href={user?.website}>{user?.website.slice(7)}</a> : "-"}</div>
          <div>شماره تماس: {user?.phone ? <a href={`tel:${user?.phone}`}>{`0${user?.phone.slice(3)}`}</a> : "-"}</div>
          <div>شرکت: {user?.company ?? "-"}</div>
          <div>
            آدرس:
            {user?.address?.country && ` ${user?.address?.country} -`}
            {user?.address?.city && ` ${user?.address?.city} -`}
            {user?.address?.street && ` ${user?.address?.street} -`}
            {user?.address?.alley && ` ${user?.address?.alley} - `}
            {user?.address?.number && ` شماره ${user?.address?.number}`}
          </div>
        </>
      ) : (
        <p>کاربر یافت نشد!</p>
      )}
    </>
  );
};
