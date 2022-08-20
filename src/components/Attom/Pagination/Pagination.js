export const Pagination = ({
  data = [],
  page = 0,
  setPage = () => {},
  itemPerPage = 10,
  isPrevNext = true,
  prevText = "قبلی",
  nextText = "بعدی",
}) => {
  // Variables
  const isShowPrev = isPrevNext && page >= itemPerPage;
  const isShowNext = isPrevNext && page < data.length - itemPerPage;

  // Handlers
  const prevPageHandler = () => setPage(page - itemPerPage);
  const nextPageHandler = () => setPage(page + itemPerPage);
  const customPageHandler = (i) => setPage(i * itemPerPage);

  return (
    <div className="text-white text-center my-5">
      {isShowPrev && (
        <button onClick={prevPageHandler} className="bg-sky-300 p-2 rounded-tr rounded-br">
          {prevText}
        </button>
      )}
      {Array(Math.round(data.length / itemPerPage))
        .fill("")
        .map((p, i) => (
          <button
            key={i}
            onClick={() => customPageHandler(i)}
            disabled={(i + 1) * itemPerPage === page + itemPerPage}
            className={`bg-sky-300 px-4 py-2 disabled:bg-sky-400 ${
              i === 0 && !isShowPrev ? `rounded-tr rounded-br` : ``
            } ${i + 1 === Math.round(data.length / itemPerPage) && !isShowNext ? `rounded-tl rounded-bl` : ``}`}
          >
            {i + 1}
          </button>
        ))}
      {isShowNext && (
        <button onClick={nextPageHandler} className="bg-sky-300 p-2 rounded-tl rounded-bl">
          {nextText}
        </button>
      )}
    </div>
  );
};
