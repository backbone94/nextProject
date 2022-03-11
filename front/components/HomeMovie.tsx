import styles from "../styles/homeMovie.module.css";
import { Row, Col, Button } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const HomeMovie = ({ type, list }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // 선택한 영화의 상세 페이지로 이동
  const moveToDetail = (title: string, year: string) => {
    router.push({ pathname: "/homeMovie", query: { title, year } });
  };

  // 더보기 버튼 클릭
  const enterMovies = () => {
    router.push(`/homeMovie/${type}`);
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.type}>{type}</div>
      <div className={styles.gridContainer}>
        <Row>
          {list &&
            list.map((li, index) =>
              index >= 9 ? null : (
                <Col key={li.id} className="gutter-row" span={8}>
                  <div
                    onClick={() =>
                      moveToDetail(li.original_title, li.release_date)
                    }
                    className={styles.movieCard}
                  >
                    <img
                      width={150}
                      height={195}
                      className={styles.img}
                      src={`https://image.tmdb.org/t/p/original${li.poster_path}`}
                      alt="image"
                    />
                    <div className={styles.info}>
                      <div className={styles.titleInfo}>{li.title}</div>
                    </div>
                  </div>
                </Col>
              )
            )}
        </Row>
      </div>
      <div className={styles.viewMore}>
        <Button onClick={enterMovies} className={styles.button}>
          More
        </Button>
      </div>
    </div>
  );
};

export default HomeMovie;
