import Box from "@mui/material/Box";
import styles from "../styles/signUp.module.css";
import { SmileOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";

const signUpForm = ({
  user,
  setUser,
  submit,
  img,
  Input,
  insertImg,
  setImg,
}) => {
  return (
    <Box onSubmit={submit} component="form" className={styles.formContainer}>
      <div className={styles.signUpText}>회원가입</div>
      <div className={styles.avatarAndUploader}>
        {img ? (
          <img
            style={{ borderRadius: "10%" }}
            height="128"
            width="128"
            src={img}
            alt="avatar"
          />
        ) : (
          <SmileOutlined className={styles.avatar} />
        )}
        <div>
          <label htmlFor="contained-button-file">
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => insertImg(e)}
              accept="image/*"
              id="contained-button-file"
              type="file"
            />
            <Button component="span">이미지 추가</Button>
          </label>
          <Button onClick={() => setImg(undefined)} component="span">
            이미지 제거
          </Button>
        </div>
      </div>
      <div className={styles.textGroup}>
        <TextField
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          style={{ marginBottom: 15 }}
          label="이름"
        />
        <TextField
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          style={{ marginBottom: 15 }}
          type="email"
          label="이메일"
        />
        <TextField
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          style={{ marginBottom: 15 }}
          type="password"
          label="비밀번호"
        />
        <TextField
          style={{ marginBottom: 15 }}
          type="password"
          label="비밀번호 확인"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <Button type="submit" variant="contained">
          회원가입
        </Button>
      </div>
    </Box>
  );
};

export default signUpForm;
