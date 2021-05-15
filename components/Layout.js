import Head from "next/head";
import styles from "../styles/Layout.module.css";

const Layout = ({ title, keywords, children, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
Layout.defaultProps = {
  title: "EVENTS FINDER",
  description: "FIND HOTTEST PARTIES AROUND YOU",
  keywords: "concert parties",
};

export default Layout;
