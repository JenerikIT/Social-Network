import ProfileContact from "../components/sections/ProfileContact/ProfileContact";
import ProfileSidebar from "../components/sections/ProfileSidebar/ProfileSidebar";
import UserProfile from "../components/sections/UserProfile/UserProfile";

const Profile = () => {
  return (
    <div className="main-container profile">
      <ProfileSidebar />
      <div className="profile__user">
        <UserProfile />
      </div>
      <ProfileContact />
    </div>
  );
};

export default Profile;
