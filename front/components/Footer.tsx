import styles from "../styles/footer.module.css";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div>이정준</div>
      <div>&copy; {year}. All rights reserved.</div>
    </div>
  );
}
