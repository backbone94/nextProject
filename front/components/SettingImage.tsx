import { Tooltip, Button } from "antd";
import styles from "../styles/settingImage.module.css";
import requestImg from "../util/requestImg";

const SettingImage = ({ isSignUp, user, setUser, img, setImg }) => {
  const defaultImage = "/defaultImage.png";

  // 이미지 url 요청
  const insertImg = async (e: any) => {
    const url = await requestImg(e);
    setImg(url);

    // 회원가입 할 때만
    if (isSignUp) setUser({ ...user, profile: url });
  };

  return (
    <>
      <div className={styles.imageContainer}>
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
              <img
                width="128"
                height="128"
                className={styles.image}
                src={img}
                alt="profile"
              />
            ) : (
              <img
                width="128"
                height="128"
                className={styles.image}
                src={defaultImage}
                alt="profile"
              />
            )}
          </label>
        </Tooltip>
      </div>
      {img ? (
        <div className={styles.defaultImage}>
          <Button type="text" onClick={() => setImg(defaultImage)}>
            기본 이미지로 설정
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default SettingImage;
