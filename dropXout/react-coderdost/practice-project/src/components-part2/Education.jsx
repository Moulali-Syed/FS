import PropTypes from 'prop-types';

const Education = ({ school, college, others }) => {
  return (
    <div>
      <h2>Education</h2>
      <ul>
        <li>{school}</li>
        <li>{college}</li>
        <li>{others}</li>
      </ul>
    </div>
  );
};

Education.propTypes = {
  school: PropTypes.string.isRequired,
  college: PropTypes.string.isRequired,
  others: PropTypes.string.isRequired,
};
export default Education;
