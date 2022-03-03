import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/logIn.module.css";
import { getUser } from "../store/reducers/userReducer";
import { RootState } from "../store";
import { useRouter } from "next/router";

const LogIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const email = useSelector((state: RootState) => state.user.email);

  // 로그인 하면 홈으로 이동
  if (email) {
    router.push("/");
  }

  // 로그인
  const logIn = async (e: any) => {
    const email = e.email;
    const password = e.password;
    dispatch(getUser({ email, password }));
  };

  return (
    <div className={styles.logInContainer}>
      <div className={styles.logInText}>로그인</div>
      <Form
        className={styles.logInForm}
        initialValues={{ remember: true }}
        onFinish={logIn}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "이메일을 적으세요." }]}
        >
          <Input
            className={styles.emailInput}
            prefix={<UserOutlined />}
            placeholder="이메일"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "비밀번호를 적으세요." }]}
        >
          <Input
            className={styles.pwInput}
            prefix={<LockOutlined />}
            type="password"
            placeholder="비밀번호"
          />
        </Form.Item>
        <Form.Item className={styles.submitButton}>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogIn;
