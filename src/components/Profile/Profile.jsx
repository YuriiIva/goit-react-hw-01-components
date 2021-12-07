import user from "../../data/user.json";
import ProfileItem from "./ProfileItem/ProfileItem";

const Profile = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <ProfileItem
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
};
export default Profile;
