import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, keywords, children, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "EVENTS FINDER",
  description: "FIND HOTTEST PARTIES AROUND YOU",
  keywords: "concert parties",
};

export default Layout;
