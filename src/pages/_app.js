import NextNProgress from "nextjs-progressbar";

import "../../public/styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress color="#3498DB" height={2} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
