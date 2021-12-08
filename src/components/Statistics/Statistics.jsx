// import StatisticsItem from "./StatisticsItem/StatisticsItem";
import Paper from "../Common/Paper/Paper";
import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, data }) => {
  return (
    <Paper>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.stat}>
          {data.map(({ id, label, percentage }) => (
            <li key={id} className={s.item}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </Paper>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
