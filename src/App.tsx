import { Route, Routes, useLocation } from 'react-router';

import { Conversions } from './components/Conversions/';
import { Progress } from './components/Conversions/Progress';
import { ProgressBar } from './components/Conversions/ProgressBar';
import Resume from './pages/Resume.tsx';
import Projects from './pages/projects/Projects.tsx';
import Small from './pages/projects/small/Small.tsx';
import TaskApp from './pages/projects/small/task-app/TaskApp.tsx';

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route index element={<Resume />} />
      <Route path="conversions" element={<Conversions />}>
        <Route path="progress" element={<Progress />} />
        <Route path="progress-bar" element={<ProgressBar />} />
      </Route>
      <Route path="projects" element={<Projects />}>
        <Route path="small" element={<Small />}>
          <Route path="task-app" element={<TaskApp />} />
          {/* <Route path="recipe-book" element={<RecipeBook />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
