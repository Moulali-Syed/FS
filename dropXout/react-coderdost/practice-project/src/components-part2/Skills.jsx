import PropTypes from 'prop-types';

const Skills = ({ skill }) => {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        <li>{skill}</li>
      </ul>
    </div>
  );
};
Skills.propTypes = {
  skill: PropTypes.string.isRequired,
};
export default Skills;
