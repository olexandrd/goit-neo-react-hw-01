import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={css.friendListItem}>
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
  );
};

export default FriendListItem;
