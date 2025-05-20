import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.tsx";
import { Conversions } from "./components/Conversions/";
import { Progress } from "./components/Conversions/Progress";
import { ProgressBar } from "./components/Conversions/ProgressBar";
import Projects from "./pages/projects/Projects.tsx";
import Todo from "./pages/projects/small/tasks/Task.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="conversions" element={<Conversions />}>
          <Route path="progress" element={<Progress />} />
          <Route path="progress-bar" element={<ProgressBar />} />
        </Route>
        <Route path="projects" element={<Projects />}>
          <Route path="small/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
