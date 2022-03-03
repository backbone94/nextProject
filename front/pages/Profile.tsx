import styles from "../styles/profile.module.css";
import { Button, Input, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { tokenCheck, withdrawal } from "../store/reducers/userReducer";
import { useRouter } from "next/router";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import SettingImage from "../components/SettingImage";
import DraftEditor from "../components/DraftEditor";

export default function User() {
  const user = useSelector((state: RootState) => state.user);
  const [img, setImg] = useState(user.profile);
  const [nickName, setNickName] = useState(user.nickName);
  const [content, setContent] = useState(user.introduce);
  const dispatch = useDispatch();
  const router = useRouter();

  // 토큰 유효성 체크
  useEffect(() => {
    dispatch(tokenCheck());
  }, []);

  if (!user.email) router.push("/");

  // 회원 탈퇴
  const withdrawalUser = () => {
    dispatch(withdrawal(user.email));
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
      <DraftEditor initialState={content} setContent={setContent} />

      {/* 회원 탈퇴 */}
      <Popconfirm
        title="회원을 탈퇴하시겠습니까?"
        onConfirm={withdrawalUser}
        okText="네"
        cancelText="아니오"
      >
        <Button type="primary" danger>
          회원 탈퇴
        </Button>
      </Popconfirm>
    </div>
  );
}
