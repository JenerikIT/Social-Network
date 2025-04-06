import Post from "./Post";
import KamaVibe from "../../../assets/img/imgPost.svg";
import berserkPost from "../../../assets/img/berserkPost.svg";
import saitamaPost from "../../../assets/img/saitamaPost.svg";

import logoProfile from "../../../assets/img/logoProfile.svg";
import { useCallback, useEffect, useState } from "react";
import "./PostList.scss";
import "./Post.scss";
import "./modal.scss";
type Post = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  imgPost: string;
};
const PostList = () => {
  const [modalPost, setModalPost] = useState(false);
  useEffect(() => {
    if (modalPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalPost]);
  const onClickModal = useCallback((i: boolean) => {
    setModalPost(i);
  }, []);

  const posts: Post[] = [
    {
      id: "1",
      author: {
        name: "Jenerik",
        avatar: logoProfile,
      },
      date: "28 марта, 18:03",
      content:
        "Каждый пиксель, анимация или интерактивный элемент влияют на то, как пользователь чувствует себя на сайте. Хороший фронтенд — это когда после клика хочется сказать: 'Вау, как плавно!'",
      tags: ["trends", "top"],
      likes: 42,
      comments: 7,
      shares: 3,
      imgPost: KamaVibe,
    },
    {
      id: "2",
      author: {
        name: "Jenerik",
        avatar: logoProfile,
      },
      date: "29 марта, 12:45",
      content:
        "Еще один пример поста о важности UX/UI дизайна в современном вебе. Плавные переходы — это основа!",
      tags: ["design", "ux"],
      likes: 35,
      comments: 5,
      shares: 2,
      imgPost: berserkPost,
    },
    {
      id: "3",
      author: {
        name: "Jenerik",
        avatar: logoProfile,
      },
      date: "30 марта, 09:20",
      content:
        "Оптимизация производительности — ключ к успеху любого веб-приложения. Меньше нагрузки, больше скорости!",
      tags: ["performance", "optimization"],
      likes: 28,
      comments: 4,
      shares: 1,
      imgPost: saitamaPost,
    },
  ];
  return (
    <div className="group-posts">
      {posts.map((obj) => (
        <div key={obj.id}>
          <Post
            key={obj.id}
            onClickModal={onClickModal}
            liked={false}
            {...obj}
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
