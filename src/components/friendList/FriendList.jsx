import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          online={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, online }) {
  return (
    <li className={css.item}>
      {online ? (
        <span
          className={css.status}
          style={{
            backgroundColor: '#f05f5f',
          }}
        ></span>
      ) : (
        <span
          className={css.status}
          style={{
            backgroundColor: '#93c47d',
          }}
        ></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="40" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
