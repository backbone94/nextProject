import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { User } from "../store/user";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/reducers/userReducer";
import { useRouter } from "next/router";
import { RootState } from "../store";
import { message } from "antd";

const SignUp = () => {
  const email = useSelector((state: RootState) => state.user.email);
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    profile: "",
    nickName: "",
  });
  const [img, setImg] = useState();
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

    // 회원가입
    dispatch(addUser(user));
  };

  return (
    <>
      <SignUpForm
        user={user}
        setUser={setUser}
        submit={submit}
        img={img}
        setImg={setImg}
      />
    </>
  );
};

export default SignUp;
