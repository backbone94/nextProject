import styles from "../styles/top.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Tooltip } from "antd";
import { userReducer } from "../store/reducers/userReducer";
import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default function Top() {
  const router = useRouter();
  const email = useSelector((state: RootState) => state.user.email);
  const dispatch = useDispatch();

  // 로그아웃
  const logOut = () => {
    dispatch(userReducer.actions.logOut());
    router.push("/");
  };

  const move = (route: string) => {
    router.push(route);
  };

  return (
    <div className={styles.headerContainer}>
      <span>
        <Tooltip title="Home">
          <span onClick={() => move("/")} className={styles.homeIcon}>
            <HomeOutlined />
          </span>
        </Tooltip>
      </span>

      {!email ? (
        <span>
          {/* 로그인 버튼 */}
          <Tooltip title="로그인">
            <span onClick={() => move("/LogIn")} className={styles.LogIn}>
              <LoginOutlined />
            </span>
          </Tooltip>

          {/* 회원가입 버튼 */}
          <Tooltip title="회원가입">
            <span
              onClick={() => move("/SignUp")}
              className={styles.addUserIcon}
            >
              <UserAddOutlined />
            </span>
          </Tooltip>
        </span>
      ) : (
        <span>
          {/* 로그아웃 버튼 */}
          <Tooltip title="로그아웃">
            <span onClick={logOut} className={styles.profileIcon}>
              <LogoutOutlined />
            </span>
          </Tooltip>

          {/* 프로필 버튼 */}
          <Tooltip title="내 프로필">
            <span
              onClick={() => move("/Profile")}
              className={styles.profileIcon}
            >
              <UserOutlined />
            </span>
          </Tooltip>
        </span>
      )}
    </div>
  );
}
