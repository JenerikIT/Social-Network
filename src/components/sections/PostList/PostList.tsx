import Post from "./Post";
import imgPost from "../../../assets/img/imgPost.svg";
import { useEffect, useState } from "react";
import HashTag from "../../../UI/HashTag";
import "./PostList.scss";
import "./Post.scss";
import "./modal.scss";

const PostList = () => {
  const [modalPost, setModalPost] = useState(false);
  useEffect(() => {
    if (modalPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalPost]);
  return (
    <div className="group-posts">
      {Array.from({ length: 3 }).map((_, index) => (
        <Post key={index} setModalPost={() => setModalPost(true)} />
      ))}
      <div
        className={`modal-Post-container ${modalPost ? "active" : ""}`}
        onClick={() => setModalPost(false)}
      >
        <div className={`modal-Post ${modalPost ? "active" : ""}`}>
          <img src={imgPost} alt="" className="modal-Post__imagek" />

          <div className="modal-Post__description">
            Каждый пиксель, анимация или интерактивный элемент влияют на то, как
            пользователь чувствует себя на сайте. Хороший фронтенд — это когда
            после клика хочется сказать: "Вау, как плавно!"
          </div>
          <div className="tags">
            <HashTag title={"trends"} />
            <HashTag title={"top"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
