import StatisticsItem from "./StatisticsItem/StatisticsItem";
import Paper from "../Common/Paper/Paper";

const Statistics = ({ title, data }) => {
  return (
    <Paper>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </section>
    </Paper>
  );
};

export default Statistics;
