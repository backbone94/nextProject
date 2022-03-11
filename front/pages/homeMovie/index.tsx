import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "../../styles/moviePage.module.css";
import Loading from "../../components/Loading";
import Comment from "../../components/Comment";
import VisitedMovies from "../../components/VisitedMovies";
import { useEffect, useState } from "react";
import { Tooltip, message } from "antd";
import { useRouter } from "next/router";
import { clickMovieWithYear } from "../../store/reducers/detailMovieReducer";
import { searchVideo } from "../../store/reducers/videoReducer";
import { searchblog } from "../../store/reducers/blogReducer";
import ReactHtmlParser from "react-html-parser";
import {
  cancelAlarm,
  setAlarm,
  userReducer,
} from "../../store/reducers/userReducer";

const MoviePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { email, alarm, alarmState } = useSelector(
    (state: RootState) => state.user
  );
  // TMDB로부터 얻어온 title과 year
  const { title, year } = router.query;
  const loading = useSelector((state: RootState) => state.detailMovie.loading);
  // 유튜브 영상 ID
  const videoId = useSelector((state: RootState) => state.video.video);
  // 최근 클릭한 영화
  const visitedMovies = useSelector(
    (state: RootState) => state.movies.visitedMovies
  );
  // 네이버 블로그 글 리스트
  const postList = useSelector((state: RootState) => state.blog.postList);
  // TMDB의 title, year를 통해 OMDB의 영화 정보를 불러옴
  const { Actors, Director, Genre, Plot, Poster, Released, Title } =
    useSelector((state: RootState) => state.detailMovie.omdbWithYear);
  const [isAlarm, setIsAlarm] = useState(false);

  // 개봉까지 며칠 남았는지 계산
  const temp = new Date(Released).getTime() - new Date().getTime();
  const diff = Math.floor(temp / (1000 * 60 * 60 * 24) + 1);

  // 첫 방문 또는 뒤로 가기로 방문하는 경우
  useEffect(() => {
    console.log("설정된 알람: ", alarm);
    dispatch(clickMovieWithYear({ title, year }));
    // dispatch(searchVideo(title));
    dispatch(searchblog(title));
    if (email) dispatch(userReducer.actions.alarm(title));
    setIsAlarm(alarmState);
  }, [title, year, alarmState]);

  // 알람 설정
  const alarmSetting = () => {
    const dup = alarm.find(
      (a: { title: string; releaseDate: string }) => a.title === Title
    );
    if (dup) {
      dispatch(cancelAlarm({ email, title: Title, releaseDate: Released }));
      message.success("개봉 알림을 취소하였습니다.");
      setIsAlarm(false);
    } else {
      dispatch(setAlarm({ email, title: Title, releaseDate: Released }));
      message.success("개봉 알림을 설정하였습니다.");
      setIsAlarm(true);
    }
  };

  return loading ? (
    <Loading />
  ) : Title ? (
    // 영화 상세 정보 페이지
    <div className={styles.moviePageContainer}>
      {/* 배경 */}
      {/* <div className={styles.back}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt="image"
        />
      </div> */}

      {/* 최근 클릭한 영화 리스트 */}
      {visitedMovies.length ? <VisitedMovies /> : null}

      <div className={styles.movieInfoAndComment}>
        <div className={styles.movieInfoContainer}>
          <img className={styles.poster} src={Poster} alt="이미지" />
          <div className={styles.movieInfo}>
            <div className={styles.title}>{Title}</div>
            <div className={styles.released}>{Released}</div>
            <div className={styles.text}>{ReactHtmlParser(Plot)}</div>
            <div className={styles.director}>Director</div>
            <div className={styles.text}>{Director}</div>
            <div className={styles.actors}>Actors</div>
            <div className={styles.text}>{Actors}</div>
            <div className={styles.genre}>Genre</div>
            <div style={{ marginBottom: 30 }} className={styles.text}>
              {Genre}
            </div>
            {diff > 0 && email ? (
              <span onClick={alarmSetting} style={{ cursor: "pointer" }}>
                {isAlarm ? (
                  <Tooltip title="개봉 알림 취소">
                    <img src={`/setalarm.png`} alt="alarm" />
                  </Tooltip>
                ) : (
                  <Tooltip title="개봉 알림 설정">
                    <img src={`/cancelalarm.png`} alt="alarm" />
                  </Tooltip>
                )}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      {/* 한줄 리뷰 */}
      <Comment />

      {/* 영화 예고편 */}
      <div className={styles.video}>
        <iframe
          key={videoId}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* 네이버 블로그 */}
      {postList.length !== 0 ? (
        <div className={styles.blog}>
          <div className={styles.naverText}>네이버 블로그 리뷰</div>
          {postList.map((post) => (
            <a
              style={{ color: "black" }}
              target="_blank"
              key={post.description}
              href={post.link}
            >
              <div className={styles.postCard}>
                <div className={styles.postTitle}>
                  {ReactHtmlParser(post.title)}
                </div>
                <div className={styles.date}>{post.postdate}</div>
                <div className={styles.postDesc}>
                  {ReactHtmlParser(post.description)}
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div style={{ margin: "100px 0", minHeight: 100, display: "flex" }}>
          <div style={{ margin: "auto", textAlign: "center" }}>
            <h2>네이버 블로그 리뷰</h2>
            <div style={{ fontSize: 50 }}>💬</div>
          </div>
        </div>
      )}
    </div>
  ) : (
    // 404 페이지
    <div style={{ minHeight: 736, display: "flex" }}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <div style={{ fontSize: 50 }}>💬</div>
        <div style={{ fontSize: 70 }}>404</div>
        <h2>영화를 찾을 수 없습니다.</h2>
      </div>
    </div>
  );
};

export default MoviePage;
