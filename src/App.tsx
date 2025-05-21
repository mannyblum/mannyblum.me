import { BrowserRouter, Routes, Route } from "react-router";

import { Conversions } from "./components/Conversions/";
import { Progress } from "./components/Conversions/Progress";
import { ProgressBar } from "./components/Conversions/ProgressBar";
import Projects from "./pages/projects/Projects.tsx";
import Todo from "./pages/projects/small/tasks/Task.tsx";
import Resume from "./pages/resume.tsx";

function App() {
  return (
    <Routes>
      <Route index element={<Resume />} />
      <Route path="conversions" element={<Conversions />}>
        <Route path="progress" element={<Progress />} />
        <Route path="progress-bar" element={<ProgressBar />} />
      </Route>
      <Route path="projects" element={<Projects />}>
        <Route path="small/todo" element={<Todo />} />
      </Route>
    </Routes>
  );
}

export default App;
