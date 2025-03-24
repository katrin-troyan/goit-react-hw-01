import css from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={css.profileCard}>
      <div>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.usertag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsContainer}>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
