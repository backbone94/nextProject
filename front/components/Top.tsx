import styles from "../styles/top.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Tooltip } from "antd";
import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Top() {
  const router = useRouter();
  const email = useSelector((state: RootState) => state.user.email);

  const move = (route: string) => {
    router.push(route);
  };

  return (
    <div className={styles.headerContainer}>
      <Tooltip title="Home">
        <span onClick={() => move("/")} className={styles.homeIcon}>
          <HomeOutlined />
        </span>
      </Tooltip>

      {!email ? (
        <>
          <Tooltip title="로그인">
            <span onClick={() => move("/LogIn")} className={styles.LogIn}>
              <LoginOutlined />
            </span>
          </Tooltip>

          <Tooltip title="회원가입">
            <span
              onClick={() => move("/SignUp")}
              className={styles.addUserIcon}
            >
              <UserAddOutlined />
            </span>
          </Tooltip>
        </>
      ) : (
        <Tooltip title="내 프로필">
          <span onClick={() => move("/Profile")} className={styles.profileIcon}>
            <UserOutlined />
          </span>
        </Tooltip>
      )}
    </div>
  );
}
