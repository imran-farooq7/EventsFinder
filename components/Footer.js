import Link from "next/link";
import styles from "@/styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Events Finder </p>
      <p>
        <Link href="/about">More about us</Link>
      </p>
    </footer>
  );
};

export default Footer;
