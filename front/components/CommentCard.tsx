import { Rate, Button } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import styles from "../styles/comment.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentLike } from "../store/reducers/commentReducer";
import { userLike } from "../store/reducers/userReducer";
import { RootState } from "../store";

const CommentCard = ({ comment, desc }) => {
  const user = useSelector((state: RootState) => state.user);
  const { email } = user;
  const [likeCnt, setLikeCnt] = useState(comment.like);
  const [dislikeCnt, setDislikeCnt] = useState(comment.dislike);
  const [likeClick, setLikeClick] = useState(false);
  const [dislikeClick, setDislikeClick] = useState(false);
  const dispatch = useDispatch();

  // 리뷰에 좋아요 눌렀을 때
  const incCnt = () => {
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

  const decCnt = () => {
    setDislikeClick(!dislikeClick);
  };

  return comment.user ? (
    <div className={styles.commentCard}>
      {/* 프로필 이미지 & 닉네임 */}
      <div className={styles.imageNickContainer}>
        <img className={styles.image} src={comment.user.profile} alt="프로필" />
        <div>
          <div>{comment.user.nickName}</div>
          <div className={styles.date}>{comment.registerDate}</div>
        </div>
      </div>
      <div>
        <span className={styles.commentStarContainer}>
          <Rate className={styles.commentStar} disabled value={comment.rate} />
          <span className={styles.rateText}>{desc[comment.rate - 1]}</span>
        </span>
        <div style={{ margin: 10 }}>{comment.text}</div>

        {/* 좋아요 버튼 */}
        <div style={{ margin: 10 }}>
          <Button onClick={incCnt} className={styles.like}>
            <span>
              <LikeOutlined className={styles.likeIcon} />
              {likeCnt}
            </span>
          </Button>
          <Button onClick={decCnt} className={styles.like}>
            <span>
              <DislikeOutlined className={styles.likeIcon} />
              {dislikeCnt}
            </span>
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CommentCard;
