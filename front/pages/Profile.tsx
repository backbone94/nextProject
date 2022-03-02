import styles from "../styles/profile.module.css";
import { Button, Input, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userReducer } from "../store/reducers/userReducer";
import { useRouter } from "next/router";
import { RootState } from "../store";
import { useState } from "react";
import SettingImage from "../components/SettingImage";
import DraftEditor from "../components/DraftEditor";

export default function User() {
  const user = useSelector((state: RootState) => state.user);
  const [img, setImg] = useState(user.profile);
  const [nickName, setNickName] = useState(user.nickName);
  const dispatch = useDispatch();
  const router = useRouter();

  console.log("회원 정보: ", user);

  // 로그아웃
  const logOut = () => {
    dispatch(userReducer.actions.logOut());
    router.push("/");
  };

  return (
    <div className={styles.profileContainer}>
      <SettingImage img={img} setImg={setImg} />

      {/* 닉네임 변경 */}
      <div className={styles.nickNameInputContainer}>
        <div className={styles.nickNameLabel}>닉네임</div>
        <Input
          onChange={(e) => setNickName(e.target.value)}
          type="text"
          value={nickName}
        />
      </div>

      {/* 자기 소개 */}
      <div className={styles.introduce}>자기소개</div>
      <DraftEditor />

      {/* 로그아웃 버튼 */}
      <Popconfirm
        title="로그아웃 하시겠습니까?"
        onConfirm={logOut}
        okText="네"
        cancelText="아니오"
      >
        <Button type="text">로그아웃</Button>
      </Popconfirm>
    </div>
  );
}
