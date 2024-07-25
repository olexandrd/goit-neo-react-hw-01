import css from "./TransactionItem.module.css";

const TransactionItem = ({ item }) => {
  return (
    <tr className={css.Transaction}>
      <td className={css.Type}>{item.type}</td>
      <td className={css.Amount}>{item.amount}</td>
      <td className={css.Currency}>{item.currency}</td>
    </tr>
  );
};

export default TransactionItem;
