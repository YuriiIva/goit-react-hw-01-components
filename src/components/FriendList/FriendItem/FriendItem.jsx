import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.status : s.offLine}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default FriendItem;
