import styles from "../styles/comment.module.css";
import { Input, Rate, Button } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addComment, getCommentList } from "../store/reducers/commentReducer";
import { useRouter } from "next/router";
import CommentCard from "./CommentCard";

const desc = ["2", "4", "6", "8", "10"];

const Comment = () => {
  const user = useSelector((state: RootState) => state.user);
  const comment = useSelector((state: RootState) => state.comment);
  const { commentList } = comment;
  const router = useRouter();
  const { detail } = router.query;
  const [star, setStar] = useState(0);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentList(detail));
  }, [detail]);

  const handleChange = (value: number) => {
    setStar(value);
  };

  // 리뷰 달기
  const register = (e) => {
    if (e.key === "Enter" || e._reactName === "onClick") {
      if (!text) return;
      dispatch(
        addComment({
          movie: detail,
          rate: star,
          text,
          user: user._id,
          nickName: user.nickName,
          profile: user.profile,
        })
      );
      setText("");
      setStar(0);
    }
  };

  const writeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentRegister}>
        <div className={styles.star}>
          <span>
            <div>별점을 선택하세요.</div>
            <Rate
              allowClear={false}
              disabled={user.email ? false : true}
              onChange={handleChange}
              value={star}
            />
            {user.email && star ? (
              <span style={{ fontWeight: 700 }} className="ant-rate-text">
                {desc[star - 1]}
              </span>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className={styles.commentInput}>
          <Input
            onKeyDown={register}
            disabled={user.email ? false : true}
            placeholder={
              user.email ? "감상평을 등록해주세요." : "로그인이 필요합니다."
            }
            value={text}
            onChange={writeComment}
          />
          <Button onClick={register} style={{ height: 40 }}>
            등록
          </Button>
        </div>
      </div>
      <div className={styles.commentList}>
        {commentList &&
          commentList.map((comment) => (
            <CommentCard key={comment._id} comment={comment} desc={desc} />
          ))}
      </div>
    </div>
  );
};

export default Comment;
