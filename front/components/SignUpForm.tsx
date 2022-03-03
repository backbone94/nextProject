import styles from "../styles/signUp.module.css";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { emailVerify } from "../store/reducers/verifyReducer";
import { useEffect, useState } from "react";

const SignUpForm = ({ verifyNum, setVerifyNum, user, setUser, submit }) => {
  const dispatch = useDispatch();
  const [verify, setVerify] = useState(false);
  let timeOut = null;

  useEffect(() => {
    return function cleanup() {
      clearTimeout(timeOut);
    };
  }, []);

  // 이메일 인증
  const emailVerification = () => {
    if (user.email === "") message.error("이메일을 적으세요!");
    else {
      dispatch(emailVerify(user.email));
      setVerify(true);
      timeOut = setTimeout(() => {
        setVerify(false);
        setVerifyNum();
        message.error("시간이 초과 되었습니다.");
      }, 180000);
    }
  };

  return (
    <div className={styles.signUpContainer}>
      {/* 회원가입 form */}
      <Form
        className={styles.signUpForm}
        initialValues={{ remember: true }}
        onFinish={submit}
      >
        <Form.Item
          name="nickName"
          rules={[{ required: true, message: "닉네임을 적으세요." }]}
        >
          <Input
            value={user.nickName}
            onChange={(e) => setUser({ ...user, nickName: e.target.value })}
            className={styles.nickNameInput}
            prefix={<UserOutlined />}
            placeholder="닉네임"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "비밀번호를 적으세요." }]}
        >
          <Input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className={styles.pwInput}
            prefix={<LockOutlined />}
            type="password"
            placeholder="비밀번호"
          />
        </Form.Item>

        <Form.Item
          name="passwordCheck"
          rules={[{ required: true, message: "비밀번호를 적으세요." }]}
        >
          <Input
            className={styles.pwInput}
            prefix={<LockOutlined />}
            type="password"
            placeholder="비밀번호 확인"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "이메일을 적으세요." }]}
        >
          <div style={{ display: "flex" }}>
            <Input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className={styles.emailInput}
              prefix={<MailOutlined />}
              placeholder="이메일"
            />
            <Button style={{ height: "auto" }} onClick={emailVerification}>
              인증
            </Button>
          </div>
        </Form.Item>

        <Input
          type="number"
          value={verifyNum}
          onChange={(e) => setVerifyNum(e.target.value)}
          disabled={!verify}
          placeholder="인증번호 입력"
          className={styles.verifyInput}
        />

        <Form.Item className={styles.submitButton}>
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
