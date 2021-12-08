import StatisticsItem from "./StatisticsItem/StatisticsItem";

const Statistics = ({ title, data }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {data.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </section>
  );
};

export default Statistics;
