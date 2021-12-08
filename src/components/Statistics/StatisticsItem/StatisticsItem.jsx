import PropTypes from "prop-types";

const StatisticsItem = ({ label, percentage }) => {
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    </ul>
  );
};
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticsItem;
