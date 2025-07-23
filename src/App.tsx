import '@ant-design/v5-patch-for-react-19';
import { Conversions } from '@components/Conversions/';
import { Progress } from '@components/Conversions/Progress';
import { ProgressBar } from '@components/Conversions/ProgressBar';
import ProjectList from '@components/projects/ProjectList.tsx';
import { Suspense } from 'react';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';

const Resume = React.lazy(() => import('./pages/Resume.tsx'));
const Projects = React.lazy(() => import('./pages/projects/Projects.tsx'));
const CSSChallenges = React.lazy(
  () => import('./pages/projects/css-challenges/index.tsx'),
);
const DndKitPage = React.lazy(
  () => import('./pages/projects/dnd-kit/index.tsx'),
);
const Small = React.lazy(() => import('./pages/projects/small/Small.tsx'));
const RecipeBook = React.lazy(
  () => import('./pages/projects/small/recipe-book/RecipeBook.tsx'),
);
const TaskApp = React.lazy(
  () => import('./pages/projects/small/task-app/TaskApp.tsx'),
);
const TriviaQuizPage = React.lazy(
  () => import('./pages/projects/trivia-quiz/index.tsx'),
);
const WeatherAppPage = React.lazy(
  () => import('./pages/projects/weather-app/index.tsx'),
);

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Resume />} />
        <Route path="conversions" element={<Conversions />}>
          <Route path="progress" element={<Progress />} />
          <Route path="progress-bar" element={<ProgressBar />} />
        </Route>
        <Route path="projects" element={<Projects />}>
          <Route index element={<ProjectList />} />
          <Route path="css-challenges" element={<CSSChallenges />} />
          <Route path="small" element={<Small />}>
            <Route path="task-app" element={<TaskApp />} />
            <Route path="recipe-book" element={<RecipeBook />} />
          </Route>
          <Route path="trivia" element={<TriviaQuizPage />} />
          <Route path="dnd-kit" element={<DndKitPage />} />
          <Route path="weather" element={<WeatherAppPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
