const ProfileItem = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">{followers}</span>
            <span className="quantity">1000</span>
          </li>
          <li>
            <span className="label">{views}</span>
            <span className="quantity">2000</span>
          </li>
          <li>
            <span className="label">{likes}</span>
            <span className="quantity">3000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileItem;
