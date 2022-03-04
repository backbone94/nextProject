import styles from "../styles/top.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Button, Menu, Dropdown } from "antd";
import { userReducer } from "../store/reducers/userReducer";
import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function Top() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  // 로그아웃
  const logOut = () => {
    dispatch(userReducer.actions.logOut());
    router.push("/");
  };

  const move = (route: string) => {
    router.push(route);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link href="/Profile">내 프로필</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <div onClick={logOut}>로그아웃</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.headerContainer}>
      <span onClick={() => move("/")} className={styles.home}>
        MovieTalk
      </span>
      {!user.email ? (
        <div className={styles.userContainer}>
          {/* 로그인 버튼 */}
          <Button onClick={() => move("/LogIn")} className={styles.LogIn}>
            로그인
          </Button>

          {/* 회원가입 버튼 */}
          <Button
            style={{ marginLeft: 10 }}
            onClick={() => move("/SignUp")}
            className={styles.addUserIcon}
          >
            회원가입
          </Button>
        </div>
      ) : (
        <div className={styles.userContainer}>
          {/* 프로필 버튼 */}
          <Dropdown overlay={menu} trigger={["click"]}>
            <img
              style={{
                width: 64,
                height: 64,
                cursor: "pointer",
                borderRadius: "50%",
              }}
              src={user.profile}
            />
          </Dropdown>
        </div>
      )}
    </div>
  );
}
