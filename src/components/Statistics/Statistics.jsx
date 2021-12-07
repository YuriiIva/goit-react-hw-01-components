import data from "../../data/data.json";
import StatisticsItem from "./StatisticsItem/StatisticsItem";

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      {data.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </section>
  );
};

export default Statistics;
