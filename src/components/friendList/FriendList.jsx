import PropTypes from 'prop-types';
import css from './FriendList.module.css';

import FriendListItem from './FriendListItem';

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

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
