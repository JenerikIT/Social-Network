import "./favourite.scss";
import Post from "../PostList/Post";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
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
        <div className="favourite__groups">
          {itemsFavourite.length ? (
            itemsFavourite.map((obj: Post) => (
              <Post
                key={obj.id}
                onClickModal={onClickModal}
                liked={true}
                {...obj}
              />
            ))
          ) : (
            <div className="Empty-favourite">
              <svg
                width="100"
                height="100"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 18.9999C19 19.2651 18.8946 19.5195 18.7071 19.707C18.5196 19.8946 18.2652 19.9999 18 19.9999H4C3.73478 19.9999 3.48043 19.8946 3.29289 19.707C3.10536 19.5195 3 19.2651 3 18.9999V9.99992H0L10.327 0.61192C10.5111 0.444398 10.7511 0.351562 11 0.351562C11.2489 0.351563 11.4889 0.444398 11.673 0.61192L22 9.99992H19V18.9999ZM11 15.9999L14.359 12.6409C14.5679 12.432 14.7337 12.1839 14.8467 11.911C14.9598 11.638 15.018 11.3454 15.018 11.0499C15.018 10.7544 14.9598 10.4619 14.8467 10.1889C14.7337 9.91589 14.5679 9.66785 14.359 9.45892C14.1501 9.24999 13.902 9.08425 13.629 8.97118C13.3561 8.8581 13.0635 8.79991 12.768 8.79991C12.4725 8.79991 12.1799 8.8581 11.907 8.97118C11.634 9.08425 11.3859 9.24999 11.177 9.45892L11 9.63592L10.823 9.45892C10.6141 9.24999 10.366 9.08425 10.093 8.97118C9.82006 8.8581 9.52748 8.79991 9.232 8.79991C8.93652 8.79991 8.64394 8.8581 8.37096 8.97118C8.09797 9.08425 7.84993 9.24999 7.641 9.45892C7.43207 9.66785 7.26633 9.91589 7.15326 10.1889C7.04018 10.4619 6.98199 10.7544 6.98199 11.0499C6.98199 11.3454 7.04018 11.638 7.15326 11.911C7.26633 12.1839 7.43207 12.432 7.641 12.6409L11 15.9999Z"
                  fill="white"
                />
              </svg>
              К сожалению, вам ничего пока не понравилось:(
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favourite;
