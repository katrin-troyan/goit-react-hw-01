import clsx from 'clsx';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.friendItem}>
          <img className={css.avatar} src={avatar} alt="User avatar" />
          <p className={css.name}>{name}</p>
          <p
            className={clsx(css.statusText, {
              [css.statusTextOnline]: isOnline,
              [css.statusTextOffline]: !isOnline,
            })}
          >
            {isOnline ? 'Online' : 'Offline'}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
