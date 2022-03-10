import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { tokenCheck } from "../store/reducers/userReducer";
import {
  searchFirstPage,
  weekBoxoffice,
} from "../store/reducers/moviesReducer";
import styles from "../styles/home.module.css";
import { Input } from "antd";
import { useRouter } from "next/router";
import MovieChart from "../components/MovieChart";

export default function Home() {
  const email = useSelector((state: RootState) => state.user.email);
  // const boxOffice = useSelector((state: RootState) => state.movies.boxOffice)
  const dispatch = useDispatch();
  const router = useRouter();
  const [movies, setMovies] = useState("");

  // 일주일 전 날짜
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate() - 6;
  const weekAgo = new Date(year, month, day)
    .toISOString()
    .substring(0, 10)
    .replace(/-/g, "");

  useEffect(() => {
    // 사이트 방문 시 토큰 유효 체크
    if (email) dispatch(tokenCheck());
    dispatch(weekBoxoffice(weekAgo));
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
      {/* 모바일 로그인&회원가입 */}
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

      {/* 영화 검색창 */}
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

      {/* 무비 차트 */}
      <div className={styles.weekBoxofficeContainer}>
        <div className={styles.movieChartText}>주간 무비차트</div>
        <MovieChart />
      </div>
    </div>
  );
}
