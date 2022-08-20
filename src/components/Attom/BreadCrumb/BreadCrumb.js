import { useRouter } from "next/router";
import { Fragment } from "react";

export const BreadCrumb = ({ list }) => {
  const { push } = useRouter();

  const changeRouteHanlder = (route) => {
    if (!route) return;
    push(route);
  };

  return (
    <div className="bg-sky-100 p-2 my-4 rounded shadow-md">
      {list.map((item, i) => (
        <Fragment key={i}>
          <span
            onClick={() => changeRouteHanlder(item?.route)}
            className={`font-vazirmatn ${i !== list.length - 1 ? `cursor-pointer font-medium` : `text-sm`}`}
          >
            {item.name}
          </span>
          {i !== list.length - 1 && <span> / </span>}
        </Fragment>
      ))}
    </div>
  );
};
