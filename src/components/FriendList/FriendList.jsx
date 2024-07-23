import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.friendListItem}>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
          <span className={friend.isOnline ? css.online : css.offline}>
            {friend.isOnline ? "Online" : "Offline"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
