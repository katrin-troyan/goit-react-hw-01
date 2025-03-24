import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.headerRow}>
          <th className={css.headerCell}>Type</th>
          <th className={css.headerCell}>Amount</th>
          <th className={css.headerCell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableRow}>
            <td className={css.tableCell}>{type}</td>
            <td className={css.tableCell}>
              <span className={css.amount}>{amount}</span>
            </td>
            <td className={css.tableCell}>
              <span className={css.currency}>{currency}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
