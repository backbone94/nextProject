import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { tokenCheck } from "../store/reducers/userReducer";
import { searchFirstPage } from "../store/reducers/moviesReducer";
import { translate } from "../store/reducers/translateReducer";
import styles from "../styles/home.module.css";
import { Input } from "antd";
import { useRouter } from "next/router";

export default function Home() {
  const translated = useSelector(
    (state: RootState) => state.translate.translatedText
  );
  const email = useSelector((state: RootState) => state.user.email);
  const dispatch = useDispatch();
  const router = useRouter();
  const [movies, setMovies] = useState("");

  useEffect(() => {
    // 사이트 방문 시 토큰 유효 체크
    if (email) dispatch(tokenCheck());
  }, []);

  const enterMovies = (e) => {
    if (e.key === "Enter") {
      dispatch(searchFirstPage(movies));
      router.push(`/${movies}`);
    }
  };

  const move = (route: string) => {
    router.push(route);
  };

  return (
    <div className={styles.homeContainer}>
      {!email ? (
        <div className={styles.mobileLogInSignUp}>
          <span onClick={() => move("/LogIn")} className={styles.mobileLogIn}>
            로그인
          </span>
          <span onClick={() => move("/SignUp")} className={styles.mobileSignUp}>
            회원가입
          </span>
        </div>
      ) : null}
      <div className={styles.searchInputContainer}>
        <div className={styles.gifContainer}>
          <img className={styles.gif} src="/totoro.gif" alt="totoro" />
        </div>
        <Input
          autoFocus
          onKeyUp={enterMovies}
          placeholder="영화 제목을 입력하세요."
          className={styles.searchInput}
          value={movies}
          onChange={(e) => setMovies(e.target.value)}
        />
      </div>
    </div>
  );
}
