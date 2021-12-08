import user from "../../data/user.json";
import ProfileItem from "./ProfileItem/ProfileItem";
import Paper from "../Common/Paper/Paper";

const Profile = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Paper>
        <ProfileItem
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Paper>
    </div>
  );
};
export default Profile;
