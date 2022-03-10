import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { tokenCheck } from "../store/reducers/userReducer";
import {
  now,
  searchFirstPage,
  topRated,
  upcoming,
} from "../store/reducers/moviesReducer";
import styles from "../styles/home.module.css";
import { Input } from "antd";
import { useRouter } from "next/router";
import HomeMovie from "../components/HomeMovie";

export default function Home() {
  const email = useSelector((state: RootState) => state.user.email);
  const topRatedList = useSelector(
    (state: RootState) => state.movies.topRatedList
  );
  const nowList = useSelector((state: RootState) => state.movies.nowList);
  const upcomingList = useSelector(
    (state: RootState) => state.movies.upcomingList
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [movies, setMovies] = useState("");

  useEffect(() => {
    // 사이트 방문 시 토큰 유효 체크
    if (email) dispatch(tokenCheck());
    dispatch(topRated());
    dispatch(now());
    dispatch(upcoming());
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

  // 특정 범위 랜덤 숫자
  const random = Math.floor(Math.random() * 20);

  return (
    <div className={styles.homeContainer}>
      {/* 배경 */}
      <div
        style={
          {
            // display: "flex",
            // position: "fixed",
            // zIndex: -99,
            // width: "100%",
            // height: "100%",
            // backgroundColor: 0.5,
            // backdropFilter: blur()
          }
        }
        className={styles.back}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${
            topRatedList[Math.floor(Math.random() * 20)].poster_path
          }`}
          alt="image"
        />
        <img
          src={`https://image.tmdb.org/t/p/original${
            topRatedList[Math.floor(Math.random() * 20)].poster_path
          }`}
          alt="image"
        />
        <img
          src={`https://image.tmdb.org/t/p/original${
            topRatedList[Math.floor(Math.random() * 20)].poster_path
          }`}
          alt="image"
        />
      </div>

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

      {/* 무비차트 & 개봉 예정작 */}
      <div style={{ display: "flex" }}>
        {/* 명작 */}
        <HomeMovie type={"인기작"} list={topRatedList} />

        {/* 현재 상영작 */}
        <HomeMovie type={"현재 상영작"} list={nowList} />

        {/* 개봉 예정작 */}
        <HomeMovie type={"개봉 예정작"} list={upcomingList} />
      </div>
    </div>
  );
}
