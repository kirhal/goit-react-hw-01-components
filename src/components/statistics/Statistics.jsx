import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}

      <ul class="stat-list">
        {stats.map(elem => (
          <li class="item" key={elem.id}>
            <span class="label">{elem.label}</span>
            <span class="percentage">{elem.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
