import PropTypes from "prop-types";

const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default FriendItem;
