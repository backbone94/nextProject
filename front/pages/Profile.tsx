import styles from "../styles/profile.module.css";
import { Button, Input, message, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNickOrIntro,
  changePw,
  withdrawal,
} from "../store/reducers/userReducer";
import { useRouter } from "next/router";
import { RootState } from "../store";
import { useState } from "react";
import SettingImage from "../components/SettingImage";
import DraftEditor from "../components/DraftEditor";
import bcrypt from "bcryptjs";

export default function Profile() {
  const user = useSelector((state: RootState) => state.user);
  const [img, setImg] = useState(user.profile);
  const [nickName, setNickName] = useState(user.nickName);
  const [newPw, setNewPw] = useState("");
  const [newPwCheck, setNewPwCheck] = useState("");
  const [prevPw, setPrevPw] = useState("");
  const [content, setContent] = useState(user.introduce);
  const dispatch = useDispatch();
  const router = useRouter();

  if (!user.email) router.push("/");

  // 회원 탈퇴
  const withdrawalUser = () => {
    dispatch(withdrawal(user.email));
    router.push("/");
  };

  // 이미지 & 닉네임 & 자기소개 변경
  const nickChange = () => {
    dispatch(
      changeNickOrIntro({
        email: user.email,
        profile: img,
        nickName,
        introduce: content,
      })
    );
  };

  // 비밀번호 변경
  const changePW = () => {
    bcrypt.compare(prevPw, user.password).then((isMatch) => {
      if (!isMatch) message.error("현재 비밀번호가 일치하지 않습니다.");
      else {
        dispatch(changePw({ email: user.email, password: newPw }));
        setPrevPw("");
        setNewPw("");
        setNewPwCheck("");
      }
    });
  };

  return (
    <div className={styles.profileContainer}>
      <div style={{ fontSize: 30, textAlign: "center", marginTop: 30 }}>
        프로필
      </div>
      {/* 이미지 & 닉네임 & 자기소개 변경 */}
      <div className={styles.nickAndIntroContainer}>
        {/* 이미지 */}
        <SettingImage
          isSignUp={false}
          user={null}
          setUser={null}
          img={img}
          setImg={setImg}
        />
        {/* 닉네임 */}
        <div className={styles.nickNameInputContainer}>
          <div className={styles.nickNameLabel}>닉네임</div>
          <Input
            size="large"
            onChange={(e) => setNickName(e.target.value)}
            type="text"
            value={nickName}
          />
        </div>
        {/* 자기 소개 */}
        <div className={styles.introduce}>자기소개</div>
        <DraftEditor initialState={content} setContent={setContent} />

        {/* 저장하기 버튼 */}
        <div className={styles.submitButton}>
          <Button
            disabled={
              img !== user.profile ||
              content !== user.introduce ||
              nickName !== user.nickName
                ? false
                : true
            }
            onClick={nickChange}
            size="large"
            type="primary"
          >
            저장하기
          </Button>
        </div>
      </div>

      {/* 비밀번호 변경 */}
      <div className={styles.passwordInputContainer}>
        <div className={styles.passwordLabel}>비밀번호</div>
        <Input
          className={styles.currentPw}
          size="large"
          value={prevPw}
          onChange={(e) => setPrevPw(e.target.value)}
          type="password"
          placeholder="현재 비밀번호"
        />
        <br />
        <Input
          className={styles.newPw}
          size="large"
          value={newPw}
          onChange={(e) => setNewPw(e.target.value)}
          type="password"
          placeholder="새 비밀번호"
        />
        <br />
        <Input
          size="large"
          value={newPwCheck}
          onChange={(e) => setNewPwCheck(e.target.value)}
          type="password"
          placeholder="새 비밀번호 확인"
        />
        {/* 저장하기 버튼 */}
        <div className={styles.submitButton}>
          <Button
            onClick={changePW}
            disabled={prevPw && newPw && newPw === newPwCheck ? false : true}
            size="large"
            type="primary"
          >
            저장하기
          </Button>
        </div>
      </div>

      {/* 핸드폰 번호 변경 */}
      <div className={styles.phone}></div>

      {/* 회원 탈퇴 */}
      <Popconfirm
        title="회원을 탈퇴하시겠습니까?"
        onConfirm={withdrawalUser}
        okText="네"
        cancelText="아니오"
      >
        <Button
          className={styles.withdrawal}
          style={{ marginBottom: 50 }}
          type="primary"
          danger
        >
          회원 탈퇴
        </Button>
      </Popconfirm>
    </div>
  );
}
