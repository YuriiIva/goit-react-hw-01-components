import Paper from "../Common/Paper/Paper";
import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <Paper>
        <table className={s.transaction}>
          <thead>
            <tr className={s.thead}>
              <th className={s.item}>Type</th>
              <th className={s.item}>Amount</th>
              <th className={s.item}>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, type, amount, currency }) => (
              <tr key={id} className={s.section}>
                <td className={s.data}>{type}</td>
                <td className={s.data}>{amount}</td>
                <td className={s.data}>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
