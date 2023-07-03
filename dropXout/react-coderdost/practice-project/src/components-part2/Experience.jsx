import PropTypes from 'prop-types';

const Experience = ({ firstJob, secondJob }) => {
  return (
    <div>
      <h1>Experience</h1>
      <ul>
        <li>{firstJob}</li>
        <li>{secondJob}</li>
      </ul>
    </div>
  );
};

Experience.propTypes = {
  firstJob: PropTypes.string.isRequired,
  secondJob: PropTypes.string.isRequired,
  others: PropTypes.string.isRequired,
};
export default Experience;
