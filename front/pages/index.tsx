import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { tokenCheck } from "../store/reducers/userReducer";
import { searchMovie } from "../store/reducers/searchReducer";
import styles from "../styles/home.module.css";
import { Input } from "antd";
import { useRouter } from "next/router";

export default function Home() {
  const email = useSelector((state: RootState) => state.user.email);
  const dispatch = useDispatch();
  const router = useRouter();
  const [movieTitle, setMovieTitle] = useState("");

  useEffect(() => {
    // 사이트 방문 시 토큰 유효 체크
    if (email) dispatch(tokenCheck());
  }, []);

  // 영화 검색 엔터 키
  const enterMovieTitle = (e) => {
    if (e.key === "Enter") {
      dispatch(searchMovie(movieTitle));
      router.push(`/${movieTitle}`);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.searchInputContainer}>
        {/* <div className={styles.searchText}>영화 검색</div> */}
        <div className={styles.gifContainer}>
          <img className={styles.gif} src="/totoro.gif" alt="totoro" />
        </div>
        <Input
          autoFocus
          onKeyUp={enterMovieTitle}
          placeholder="영화 제목을 입력하세요."
          className={styles.searchInput}
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
      </div>
    </div>
  );
}
