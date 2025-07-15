import Aside from '../components/Resume/Aside';
import Contact from '../components/Resume/Contact';
import Experience from '../components/Resume/Experience';
import Intro from '../components/Resume/Intro';
import Profile from '../components/Resume/Profile';

const Resume = () => {
  return (
    <div className="resume-container">
      <Aside />
      <Intro />
      <Profile />
      <Contact />
      <Experience />
    </div>
  );
};

export default Resume;
