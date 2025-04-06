import "./favourite.scss";
import Post from "../components/sections/PostList/Post";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
type Props = {};
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
function Favourite({}: Props) {
  const [modalPost, setModalPost] = useState(false);
  const { itemsFavourite } = useSelector((state: RootState) => state.favourite);
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
  return (
    <div className="container-favourite">
      <div className="favourite">
        <div className="favourite__header">
          <div className="favourite__title">
            Favorite
            <div className="logo">
              <svg
                width="25"
                height="25"
                viewBox="0 0 47 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.13798 5.29652C7.14784 3.2722 9.87342 2.13499 12.7154 2.13499C15.5573 2.13499 18.2829 3.2722 20.2927 5.29652L23.433 8.45766L26.5733 5.29652C27.5619 4.2652 28.7446 3.44258 30.0522 2.87666C31.3598 2.31074 32.7661 2.01287 34.1892 2.00041C35.6123 1.98795 37.0236 2.26116 38.3408 2.8041C39.6579 3.34703 40.8546 4.14882 41.8609 5.16268C42.8672 6.17654 43.663 7.38217 44.2019 8.70921C44.7408 10.0363 45.012 11.4581 44.9996 12.8919C44.9872 14.3257 44.6916 15.7426 44.1299 17.06C43.5682 18.3774 42.7517 19.5689 41.728 20.565L23.433 39L5.13798 20.565C3.12873 18.5401 2 15.794 2 12.9308C2 10.0675 3.12873 7.32146 5.13798 5.29652V5.29652Z"
                  stroke="#8488FF"
                  stroke-width="4"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{itemsFavourite.length}</p>
            </div>
          </div>
          <div className="favourite__filter">
            <svg
              width="20"
              height="20"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.067 2.625L32.6764 2.625C34.7191 2.625 36.375 4.28093 36.375 6.32363V32.6764C36.375 34.7191 34.7191 36.375 32.6764 36.375H14.067M14.067 2.625L6.32363 2.625C4.28093 2.625 2.625 4.28093 2.625 6.32363L2.625 32.6764C2.625 34.7191 4.28093 36.375 6.32363 36.375H14.067M14.067 2.625V36.375M25.3362 2.625V36.375"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="favourite__groups">
          {itemsFavourite?.map((obj: Post) => (
            <Post
              key={obj.id}
              onClickModal={onClickModal}
              liked={true}
              {...obj}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourite;
