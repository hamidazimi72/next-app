export const Content = ({ content }) => {
  return (
    <div className="shadow-md rounded px-8 py-4 my-4">
      <h2 className="text-3xl font-bold text-sky-700 mb-10">{content?.title}</h2>
      <p className="text-lg leading-7 text-justify font-light">{content?.body}</p>
    </div>
  );
};
