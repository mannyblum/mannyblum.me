import Aside from "./components/Aside";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="resume-container">
      <Aside />
      <Intro />
      <Profile />
      <Contact />
      <Experience />
    </div>
  );
}

export default App;
