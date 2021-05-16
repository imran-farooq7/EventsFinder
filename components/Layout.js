import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import ShowCase from "./ShowCase";
import { useRouter } from "next/router";

const Layout = ({ title, keywords, children, description }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <ShowCase />}
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
