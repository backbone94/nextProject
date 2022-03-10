import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import styles from "../styles/moviePage.module.css";
import { imdbSearch } from "../store/reducers/detailMovieReducer";
import Loading from "../components/Loading";
import Comment from "../components/Comment";
import ReactHtmlParser from "react-html-parser";
import { searchVideo } from "../store/reducers/videoReducer";
import { searchblog } from "../store/reducers/blogReducer";

const movieChart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query.id;
  const { imdb, loading } = useSelector(
    (state: RootState) => state.detailMovie
  );
  const { title, stars, directors, genres, image, plotLocal, releaseDate } =
    imdb;
  const videoId = useSelector((state: RootState) => state.video.video);
  const postList = useSelector((state: RootState) => state.blog.postList);

  useEffect(() => {
    dispatch(imdbSearch(id));
    dispatch(searchVideo(title));
    dispatch(searchblog(title));
  }, [id, title]);

  return loading ? (
    <Loading />
  ) : title ? (
    // 영화 상세 정보 페이지
    <div className={styles.moviePageContainer}>
      <div className={styles.movieInfoAndComment}>
        <div className={styles.movieInfoContainer}>
          <img className={styles.poster} src={`${image}`} alt="이미지" />
          <div className={styles.movieInfo}>
            <div className={styles.title}>{title}</div>
            <div className={styles.released}>{releaseDate}</div>
            <div className={styles.text}>{plotLocal}</div>
            <div className={styles.director}>Director</div>
            <div className={styles.text}>{directors}</div>
            <div className={styles.actors}>Actors</div>
            <div className={styles.text}>{stars}</div>
            <div className={styles.genre}>Genre</div>
            <div className={styles.text}>{genres}</div>
          </div>
        </div>
      </div>

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

export default movieChart;
