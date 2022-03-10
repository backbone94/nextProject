import { Row, Col } from "antd";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styles from "../styles/home.module.css";

const MovieChart = () => {
  const router = useRouter();
  const boxOffice = useSelector((state: RootState) => state.movies.boxOffice);

  const moveToImdb = (id: string) => {
    router.push(`/movieChart?id=${id}`);
  };

  return (
    <div className={styles.weekBoxoffice}>
      <Row gutter={[30, 30]}>
        {boxOffice.map((b) => (
          <Col key={b.id} className="gutter-row" span={8}>
            <div className={styles.movieChartCard}>
              <div className={styles.no}>NO.{b.rank}</div>
              <img
                width={150}
                style={{ cursor: "pointer" }}
                onClick={() => moveToImdb(b.id)}
                src={b.image}
                alt="image"
              />
              <div className={styles.info}>
                <div className={styles.movieChartTitle}>{b.title}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieChart;
