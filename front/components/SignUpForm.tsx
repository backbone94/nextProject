import styles from "../styles/signUp.module.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import SettingImage from "./SettingImage";

const SignUpForm = ({ user, setUser, submit, img, setImg }) => {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpText}>회원가입</div>

      {/* 이미지 설정 */}
      <SettingImage img={img} setImg={setImg} />
      {/* <div className={styles.imageContainer}>
        <Tooltip title="이미지 변경">
          <input
            id="inputId"
            onChange={(e) => insertImg(e)}
            accept="image/*"
            className={styles.fileInput}
            type="file"
          />
          <label htmlFor="inputId">
            {img ? (
              <img className={styles.image} src={img} alt="profile" />
            ) : (
              <SmileOutlined className={styles.image} />
            )}
          </label>
        </Tooltip>
      </div>
      {img ? (
        <div className={styles.defaultImage}>
          <Button type="text" onClick={() => setImg("")}>
            기본 이미지로 설정
          </Button>
        </div>
      ) : null} */}

      {/* 회원가입 form */}
      <Form
        className={styles.signUpForm}
        initialValues={{ remember: true }}
        onFinish={submit}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "이메일을 적으세요." }]}
        >
          <Input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className={styles.emailInput}
            prefix={<UserOutlined />}
            placeholder="이메일"
          />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: "이름을 적으세요." }]}
        >
          <Input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className={styles.nameInput}
            prefix={<UserOutlined />}
            placeholder="이름"
          />
        </Form.Item>

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
