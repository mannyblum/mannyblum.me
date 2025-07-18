import BookProvider from '@/context/RecipeBookContext.tsx';
import '@ant-design/v5-patch-for-react-19';
import { Conversions } from '@components/Conversions/';
import { Progress } from '@components/Conversions/Progress';
import { ProgressBar } from '@components/Conversions/ProgressBar';
import { Route, Routes, useLocation } from 'react-router';

import ProjectList from './components/projects/ProjectList.tsx';
import Resume from './pages/Resume.tsx';
import Projects from './pages/projects/Projects.tsx';
import CSSChallenges from './pages/projects/css-challenges/index.tsx';
import DndKitPage from './pages/projects/dnd-kit/index.tsx';
import Small from './pages/projects/small/Small.tsx';
import RecipeBook from './pages/projects/small/recipe-book/RecipeBook.tsx';
import TaskApp from './pages/projects/small/task-app/TaskApp.tsx';
import TriviaQuizPage from './pages/projects/trivia-quiz/index.tsx';
import WeatherAppPage from './pages/projects/weather-app/index.tsx';

function App() {
  const location = useLocation();
  return (
    <BookProvider>
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
    </BookProvider>
  );
}

export default App;
