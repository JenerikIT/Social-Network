import ProfileSidebar from "../components/sections/ProfileSidebar/ProfileSidebar";
import CreatePost from "../components/sections/CreatePost/CreatePost";
import SortDropdown from "../components/sections/SortDropdown/SortDropdown";
import PostList from "../components/sections/PostList/PostList";
import ContactList from "../components/sections/ContactList/ContactList";
import News from "../components/sections/News/News";

type Props = {};

function Home({}: Props) {
  return (
    <div className="main-container">
      <ProfileSidebar />
      <div className="container-posts">
        <CreatePost />
        <SortDropdown />
        <PostList />
      </div>
      <div className="contianer-Contact">
        <ContactList />
        <News />
      </div>
    </div>
  );
}

export default Home;
