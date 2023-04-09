import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
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
    <li class="item">
      <span class="status" online={online}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
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
