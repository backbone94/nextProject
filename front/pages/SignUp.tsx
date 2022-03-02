import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import requestImg from "../util/requestImg";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import SignUpForm from "../components/SignUpForm";
import { User } from "../store/user";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/reducers/userReducer";
import { useRouter } from "next/router";
import { RootState } from "../store";

const Input = styled("input")({
  display: "none",
});

// Snackbar
export interface State extends SnackbarOrigin {
  open: boolean;
}

const SignUp = () => {
  const email = useSelector((state: RootState) => state.user.email);
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
  const [img, setImg] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  // 회원가입하면 홈으로 이동
  if (email) router.push("/");

  // Snackbar
  const [alert, setAlert] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = alert;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setAlert({ open: true, ...newState });
  };

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  // 이미지 url 요청
  const insertImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const url = await requestImg(e);
    setImg(url);
  };

  // 회원가입 클릭
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password: string = e.target[5].value;
    const passwordCheck: string = e.target[7].value;

    if (password !== passwordCheck) {
      handleClick({ vertical: "top", horizontal: "center" })();
      return;
    }

    // 회원가입
    dispatch(addUser(user));
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="비밀번호가 일치하지 않습니다."
        key={vertical + horizontal}
      />

      <SignUpForm
        user={user}
        setUser={setUser}
        submit={submit}
        img={img}
        Input={Input}
        insertImg={insertImg}
        setImg={setImg}
      />
    </>
  );
};

export default SignUp;
