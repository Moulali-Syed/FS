import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const Resume = () => {
  return (
    <div>
      <Skills skill="webDesign with HTML and CSS" />
      <Education
        school="Wilton High School"
        college="Silvermine School of Arts"
        others="Codeacademy"
      />
      <Experience
        firstJob="Student Technology Intern for Wilton School District"
        secondJob="Babysitter"
      />
    </div>
  );
};

export default Resume;
