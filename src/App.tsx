import '@ant-design/v5-patch-for-react-19';
import { Conversions } from '@components/Conversions/';
import { Progress } from '@components/Conversions/Progress';
import { ProgressBar } from '@components/Conversions/ProgressBar';
import ProjectList from '@components/projects/ProjectList.tsx';
import { Suspense } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet';
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
  () => import('./pages/projects/recipebook/index.tsx'),
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
    <>
      <Helmet>
        <title>
          Senior Frontend Engineer | React, Next.js, GraphQL | Manny Blum
        </title>
        <meta
          name="description"
          content="Portfolio and resume of Manny Blum, Senior Frontend Engineer with expertise in React, TypeScript, GraphQL, and scalable UI development."
        />
        <meta
          name="keywords"
          content="Frontend Engineer, React Developer, Next.js, TypeScript, GraphQL, Apollo, Tailwind CSS, Manny Blum, UI Developer, Web Engineer"
        />
        <meta
          property="og:title"
          content="Manny Blum | Frontend Engineer – React, GraphQL, TypeScript"
        />
        <meta
          property="og:description"
          content="Portfolio and experience of Manny Blum, an expert in building performant, scalable frontend applications."
        />
      </Helmet>
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
            </Route>
            <Route path="recipebook" element={<RecipeBook />} />
            <Route path="trivia" element={<TriviaQuizPage />} />
            <Route path="dnd-kit" element={<DndKitPage />} />
            <Route path="weather-app" element={<WeatherAppPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
