import css from "./TransactionHistory.module.css";
import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.TransactionHistory}>
      <thead className={css.TransactionHistoryHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <TransactionItem key={transaction.id} item={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
