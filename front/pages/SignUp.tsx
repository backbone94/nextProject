import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { User } from "../store/user";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/reducers/userReducer";
import { useRouter } from "next/router";
import { RootState } from "../store";
import { message } from "antd";
import SettingImage from "../components/SettingImage";

const SignUp = () => {
  const email = useSelector((state: RootState) => state.user.email);
  const num = useSelector((state: RootState) => state.verify.verifyNum);
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    profile: "",
    nickName: "",
    introduce: "",
  });
  const [img, setImg] = useState();
  const [verifyNum, setVerifyNum] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  // 회원가입하면 홈으로 이동
  if (email) router.push("/");

  // 회원가입 클릭
  const submit = (e: any) => {
    setUser({ ...user, profile: img });
    const password: string = e.password;
    const passwordCheck: string = e.passwordCheck;

    if (password !== passwordCheck) {
      message.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (Number(verifyNum) !== num) {
      message.error("인증 번호가 일치하지 않습니다.");
      return;
    }
    // 회원가입
    dispatch(addUser(user));
  };

  return (
    <>
      <div style={{ fontSize: 50, textAlign: "center", marginTop: 30 }}>
        회원가입
      </div>
      {/* 이미지 설정 */}
      <SettingImage img={img} setImg={setImg} />

      <SignUpForm
        verifyNum={verifyNum}
        setVerifyNum={setVerifyNum}
        user={user}
        setUser={setUser}
        submit={submit}
      />
    </>
  );
};

export default SignUp;
