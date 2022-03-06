import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { User } from "../store/type/user";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/reducers/userReducer";
import { useRouter } from "next/router";
import { RootState } from "../store";
import { message } from "antd";
import SettingImage from "../components/SettingImage";

const defaultImage =
  "https://my-blog1684.s3.ap-northeast-2.amazonaws.com/next/defaultImage.png";

const SignUp = () => {
  const email = useSelector((state: RootState) => state.user.email);
  const num = useSelector((state: RootState) => state.verify.verifyNum);
  const [user, setUser] = useState<User>({
    _id: "",
    email: "",
    password: "",
    profile: "",
    nickName: "",
    introduce: "",
    likeComments: [],
  });
  const [img, setImg] = useState("");
  const [verifyNum, setVerifyNum] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  // 회원가입하면 홈으로 이동
  if (email) router.push("/");

  // 회원가입 클릭
  const submit = (e: any) => {
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
      <div style={{ fontSize: 30, textAlign: "center", marginTop: 100 }}>
        회원가입
      </div>
      {/* 이미지 설정 */}
      <SettingImage
        isSignUp={true}
        user={user}
        setUser={setUser}
        img={img}
        setImg={setImg}
      />

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
