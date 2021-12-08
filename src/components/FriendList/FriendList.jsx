import FriendItem from "./FriendItem/FriendItem";
import Paper from "../Common/Paper/Paper";

const FriendList = ({ friends }) => {
  return (
    <Paper>
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </Paper>
  );
};

export default FriendList;
