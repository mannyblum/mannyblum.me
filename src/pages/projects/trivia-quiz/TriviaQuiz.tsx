import CategorySelector from '@/components/TriviaQuiz/CategorySelector';
import DifficultySelector from '@/components/TriviaQuiz/DifficultySelector';
import Quiz, { QUESTION_COUNT } from '@/components/TriviaQuiz/Quiz';
import {
  fetchEasyQuiz,
  fetchHardQuiz,
  fetchMediumQuiz,
} from '@/components/TriviaQuiz/queries';
import { queryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from 'antd';
import { useState } from 'react';

import '../../../assets/styles/quiz.css';

// 1. Core Features
//  [x] Home Page
//    [x] App title and brief description
//    [x] “Start Quiz” button
//  [x] Question Interface
//    [x] Display one question at a time
//    [x] Multiple choice answers (radio buttons or buttons)
//    [x] “Next” button (disabled until an answer is selected)
//    [x] Question counter (e.g. “Question 3 of 10”)
//  [x] Score Tracking
//    [x] Track correct/incorrect answers
//    [x] Calculate final score
//    [x] Store results in state
//  [x] Results Page
//    [x] Final score summary
//    [x] Percentage or letter grade
//    [x] Option to restart quiz

// 2. Data Handling
//  [x] Use local JSON or external API for question/answer data
//  [x] Shuffle questions and/or answers
//  [x] Support multiple question types (optional):
//    [x] Multiple choice
//    [x] True/False
//    [ ] Fill-in-the-blank (stretch goal)

// 3. UI/UX
//  [x] Mobile-first responsive layout
//  [x] Progress indicator (e.g., progress bar)
//  [x] Visual feedback on answer selection (e.g., highlight correct/wrong)
//  [x] Loading state (if fetching data)
//  [x] Transition animations between questions (optional)

// 4. State Management
//  [x] Use useState and useEffect for managing:
//    [x] Current question index
//    [x] Selected answer
//    [x] Score
//    [x] Quiz completion status

// 5. Bonus Features (Optional but Impressive)
//  [x] Categories/Difficulty selection
//  [ ] Timer for each question
//  [ ] Leaderboard (localStorage or backend)
//  [ ] User authentication (e.g., with Firebase)
//  [ ] Dark mode toggle
//  [ ] Accessibility (keyboard nav, ARIA labels)

// 6. Tech Stack Highlights
//  [x] React components for each screen (Home, Quiz, Result)
//  [x] CSS Modules, Tailwind, or styled-components for styling
//  [x] JavaScript logic for scoring and transitions
//  [x] Optional: TypeScript for type safety

function easyQuizQueryOptions(categoryId: number) {
  return queryOptions({
    queryKey: ['easy'],
    queryFn: () => fetchEasyQuiz(categoryId),
    enabled: false,
    throwOnError: true,
  });
}

function mediumQuizQueryOptions(categoryId: number) {
  return queryOptions({
    queryKey: ['medium'],
    queryFn: () => {
      return fetchMediumQuiz(categoryId);
    },
    enabled: false,
    throwOnError: true,
  });
}
function hardQuizQueryOptions(categoryId: number) {
  return queryOptions({
    queryKey: ['hard'],
    queryFn: () => {
      return fetchHardQuiz(categoryId);
    },
    enabled: false,
    throwOnError: true,
  });
}

export default function TriviaQuiz() {
  const queryClient = useQueryClient();

  const [selectedId, setSelectedId] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>();

  const [isQuizActive, setQuizActive] = useState<boolean>(false);

  // TODO: REFACTOR THIS LATER

  const easyQuiz = useQuery(easyQuizQueryOptions(selectedId));
  const mediumQuiz = useQuery(mediumQuizQueryOptions(selectedId));
  const hardQuiz = useQuery(hardQuizQueryOptions(selectedId));

  const fetchQuestions = () => {
    setQuizActive(true);

    if (difficulty === 'easy') {
      easyQuiz.refetch();
    } else if (difficulty === 'medium') {
      mediumQuiz.refetch();
    } else if (difficulty === 'hard') {
      hardQuiz.refetch();
    }
  };

  const handleSelectDifficulty = (diff: string) => {
    if (diff === difficulty) {
      setDifficulty(undefined);
    } else {
      setDifficulty(diff);
    }
  };

  if (easyQuiz.isFetching || mediumQuiz.isFetching || hardQuiz.isFetching) {
    return (
      <div className="text-quiz-base-content h-full w-full bg-black p-5">
        <div className="trivia-wrapper w-[393px] h-full my-0 py-4 mx-auto bg-quiz-base-200 border-quiz-base-300 rounded-2xl flex justify-center items-center">
          <div>Loading Quiz...</div>
        </div>
      </div>
    );
  }

  const handleQuit = () => {
    queryClient.resetQueries({ queryKey: ['easy'], exact: true });
    queryClient.resetQueries({ queryKey: ['medium'], exact: true });
    queryClient.resetQueries({ queryKey: ['hard'], exact: true });
    setDifficulty(undefined);
    setQuizActive(false);
  };

  const renderQuiz = () => {
    if (
      easyQuiz.data?.results?.length === QUESTION_COUNT ||
      mediumQuiz.data?.results?.length === QUESTION_COUNT ||
      hardQuiz.data?.results?.length === QUESTION_COUNT
    ) {
      const data =
        easyQuiz.data?.results ||
        mediumQuiz.data?.results ||
        hardQuiz.data?.results;

      return <Quiz quiz={data!} onQuit={handleQuit} />;
    }

    return;
  };

  const startQuiz = () => {
    fetchQuestions();
  };

  const handleSelectCategory = (categoryId: number) => {
    setSelectedId(categoryId);
  };

  return (
    <div className="flex flex-col text-quiz-base-content w-full h-full bg-black p-5">
      <div className="trivia-wrapper w-[393px] h-full my-0 mx-auto bg-quiz-base-200 border-quiz-base-300 rounded-2xl">
        <>
          {isQuizActive ? (
            renderQuiz()
          ) : (
            <div className="py-4">
              <h1 className="text-4xl mb-4 mx-auto text-center ">TriviaQuiz</h1>
              <CategorySelector
                onSelectCategory={handleSelectCategory}
                selectedId={selectedId}
              />
              <DifficultySelector
                difficulty={difficulty}
                onSetDifficulty={handleSelectDifficulty}
              />
              <div className="quiz-footer mx-auto w-[80%]">
                <Button
                  variant="solid"
                  disabled={!difficulty}
                  className="start-quiz-btn"
                  block
                  onClick={startQuiz}
                >
                  Start Quiz
                </Button>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
}
