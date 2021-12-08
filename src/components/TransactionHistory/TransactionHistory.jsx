import Paper from "../Common/Paper/Paper";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <Paper>
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
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
