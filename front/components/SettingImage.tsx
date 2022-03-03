import { Tooltip, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import styles from "../styles/settingImage.module.css";
import requestImg from "../util/requestImg";
import { ChangeEvent, useEffect, useRef } from "react";

const SettingImage = ({ img, setImg }) => {
  const imageRef = useRef();

  // 이미지 url 요청
  const insertImg = async (e: any) => {
    const url = await requestImg(e);
    setImg(url);
  };

  return (
    <>
      <div className={styles.imageContainer}>
        <Tooltip title="이미지 변경">
          <input
            ref={imageRef}
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
      ) : null}
    </>
  );
};

export default SettingImage;
