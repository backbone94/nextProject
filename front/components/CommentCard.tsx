import { Rate, Button, message, Popconfirm } from "antd";
import { LikeOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import styles from "../styles/comment.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentLike, removeComment } from "../store/reducers/commentReducer";
import { userLike } from "../store/reducers/userReducer";
import { RootState } from "../store";
import moment from "moment";
const CommentCard = ({ comment, desc }) => {
  const user = useSelector((state: RootState) => state.user);
  const { email } = user;
  const [likeCnt, setLikeCnt] = useState(comment.like);
  const dispatch = useDispatch();

  // 리렌더링 될 때마다 좋아요 수 업데이트하기.
  // useState의 클로저 성질 때문에 useEffect로 업데이트 해주지 않으면
  // 계속 이전 값을 참조하게 된다. (두 번째 렌더링 이후부턴 새로운 값을 참조)
  useEffect(() => {
    setLikeCnt(comment.like);
  }, [comment.like]);

  // 리뷰에 좋아요 눌렀을 때
  const incCnt = () => {
    if (!email) {
      message.error("로그인이 필요합니다.");
      return;
    }
    const liked = user.likeComments.find((c) => c === comment._id);
    // 좋아요를 이미 누른 리뷰라면
    if (liked) {
      setLikeCnt(likeCnt - 1);
      dispatch(commentLike({ _id: comment._id, like: likeCnt - 1 }));
      dispatch(userLike({ liked: true, email, _id: comment._id }));
      // 좋아요를 누른 적이 없는 리뷰라면
    } else {
      setLikeCnt(likeCnt + 1);
      dispatch(commentLike({ _id: comment._id, like: likeCnt + 1 }));
      dispatch(userLike({ liked: false, email, _id: comment._id }));
    }
  };

  // 리뷰 삭제
  const deleteComment = () => {
    dispatch(removeComment(comment));
  };

  const date = moment(comment.registerDate).format("YYYY.MM.DD HH:mm");

  return comment.user ? (
    <div className={styles.commentCard}>
      {/* 프로필 이미지 & 닉네임 */}
      <div className={styles.imageNickContainer}>
        <img className={styles.image} src={comment.user.profile} alt="프로필" />
        <div>
          <div>{comment.user.nickName}</div>
          <div className={styles.date}>
            {date}
            {user.email === comment.user.email ? (
              <Popconfirm
                okText="네"
                cancelText="아니오"
                onConfirm={deleteComment}
                title="정말 삭제하시겠습니까?"
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              >
                <span className={styles.deleteComment}>삭제</span>
              </Popconfirm>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <span className={styles.commentStarContainer}>
          <Rate className={styles.commentStar} disabled value={comment.rate} />
          <span className={styles.rateText}>{desc[comment.rate - 1]}</span>
        </span>
        <div style={{ margin: 10 }}>
          {user.email === comment.user.email ? (
            <span className={styles.myComment}>MY평점</span>
          ) : null}
          {comment.text}
        </div>

        {/* 좋아요 버튼 */}
        <div style={{ margin: 10 }}>
          <Button onClick={incCnt} className={styles.like}>
            <span>
              <LikeOutlined className={styles.likeIcon} />
              {likeCnt}
            </span>
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CommentCard;
