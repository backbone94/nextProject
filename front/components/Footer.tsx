import styles from "../styles/footer.module.css";
import { Popover } from "antd";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.IconContainer}>
        <span style={{ color: "gray" }}>
          <Popover content={"backbone94@naver.com"}>
            <MailOutlined className={styles.mailIcon} />
          </Popover>
        </span>
        <a
          style={{ color: "gray" }}
          target="_blank"
          href="https://github.com/backbone94/nextProject"
        >
          <GithubOutlined className={styles.gitHubIcon} />
        </a>
      </div>
      <div style={{ marginTop: 10 }}>&copy; {year}. All rights reserved.</div>
    </div>
  );
}
