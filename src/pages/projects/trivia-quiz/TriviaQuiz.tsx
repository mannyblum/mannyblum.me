import Quiz from '@/components/TriviaQuiz/Quiz';
import type { QuizEntryProps } from '@/components/TriviaQuiz/QuizEntry';
import { queryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Card, Radio, RadioChangeEvent } from 'antd';
import { useState } from 'react';

import '../../../assets/styles/quiz.css';

// 1. Core Features
//  [x] Home Page
//    [ ] App title and brief description
//    [x] “Start Quiz” button
//  [x] Question Interface
//    [x] Display one question at a time
//    [x] Multiple choice answers (radio buttons or buttons)
//    [x] “Next” button (disabled until an answer is selected)
//    [x] Question counter (e.g. “Question 3 of 10”)
//  [ ] Score Tracking
//    [x] Track correct/incorrect answers
//    [x] Calculate final score
//    [x] Store results in state
//  [ ] Results Page
//    [x] Final score summary
//    [ ] Percentage or letter grade
//    [x] Option to restart quiz

// 2. Data Handling
//  [x] Use local JSON or external API for question/answer data
//  [x] Shuffle questions and/or answers
//  [ ] Support multiple question types (optional):
//    [x] Multiple choice
//    [x] True/False
//    [ ] Fill-in-the-blank (stretch goal)

// 3. UI/UX
//  [x] Mobile-first responsive layout
//  [ ] Progress indicator (e.g., progress bar)
//  [ ] Visual feedback on answer selection (e.g., highlight correct/wrong)
//  [ ] Loading state (if fetching data)
//  [ ] Transition animations between questions (optional)

// 4. State Management
//  [ ] Use useState and useEffect for managing:
//    [x] Current question index
//    [x] Selected answer
//    [ ] Score
//    [ ] Quiz completion status

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

function categoryQueryOptions() {
  return queryOptions({
    queryKey: ['categories'],
    queryFn: () => {
      return fetchCategories();
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60, // 1 hour
  });
}

function easyCategoryQueryOptions(categoryId: number) {
  return queryOptions({
    queryKey: ['easy'],
    queryFn: () => fetchEasyQuiz(categoryId),
    enabled: false,
  });
}

function mediumCategoryQueryOptions(categoryId: number) {
  return queryOptions({
    queryKey: ['medium'],
    queryFn: () => {
      return fetchMediumQuiz(categoryId);
    },
    enabled: false,
  });
}
function hardCategoryQueryOptions(categoryId: number) {
  return queryOptions({
    queryKey: ['hard'],
    queryFn: () => {
      return fetchHardQuiz(categoryId);
    },
    enabled: false,
  });
}

export default function TriviaQuiz() {
  const { data: categories, isFetching } = useQuery(categoryQueryOptions());
  const queryClient = useQueryClient();

  const [selectedId, setSelectedId] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>();

  const [isQuizActive, setQuizActive] = useState<boolean>(false);

  // TODO: REFACTOR THIS LATER
  const {
    data: easyData,
    isFetching: easyIsFetching,
    refetch: easyRefetch,
  } = useQuery(easyCategoryQueryOptions(selectedId));

  const {
    data: mediumData,
    isFetching: mediumIsFetching,
    refetch: mediumRefetch,
  } = useQuery(mediumCategoryQueryOptions(selectedId));

  const {
    data: hardData,
    isFetching: hardIsFetching,
    refetch: hardRefetch,
  } = useQuery(hardCategoryQueryOptions(selectedId));

  const onCategoryChange = (e: RadioChangeEvent) => {
    setSelectedId(e.target.value);
  };

  const fetchQuestions = () => {
    setQuizActive(true);

    if (difficulty === 'easy') {
      easyRefetch();
    } else if (difficulty === 'medium') {
      mediumRefetch();
    } else if (difficulty === 'hard') {
      hardRefetch();
    }
  };

  const handleSelectDifficulty = (diff: string) => {
    if (diff === difficulty) {
      setDifficulty(undefined);
    } else {
      setDifficulty(diff);
    }
  };

  if (isFetching) {
    return <div>Loading ...</div>;
  }

  if (!categories) return;

  const handleQuit = () => {
    queryClient.resetQueries({ queryKey: ['easy'], exact: true });
    queryClient.resetQueries({ queryKey: ['medium'], exact: true });
    queryClient.resetQueries({ queryKey: ['hard'], exact: true });
    setDifficulty(undefined);
    setQuizActive(false);
  };

  const renderQuiz = () => {
    if (
      easyData?.results?.length === 10 ||
      mediumData?.results?.length === 10 ||
      hardData?.results?.length === 10
    ) {
      const data =
        easyData?.results || mediumData?.results || hardData?.results;

      return <Quiz quiz={data!} onQuit={handleQuit} />;
    }

    return;
  };

  const startQuiz = () => {
    fetchQuestions();
  };

  return (
    <div className="flex flex-col text-quiz-base-content w-full bg-black p-10">
      <div className="trivia-wrapper w-[393px] h-[852px] my-0 mx-auto bg-quiz-base-200 border-quiz-base-300 pt-5 rounded-2xl">
        <h1 className="text-4xl my-4 mx-auto text-center ">TriviaQuiz</h1>
        <>
          {isQuizActive ? (
            renderQuiz()
          ) : (
            <>
              <div className="flex flex-col w-[80%] mx-auto bg-quiz-base-100 border-quiz-base-300 mb-2 rounded-2xl p-5">
                <h4 className="mx-1 mb-2">Category</h4>
                <div className="trivia-categories overflow-auto no-scrollbar flex ">
                  <Radio.Group
                    value={selectedId}
                    onChange={onCategoryChange}
                    className="radio-custom overflow-auto mx-2 no-scrollbar flex!"
                  >
                    <Radio key={0} value={0} className="category-radio">
                      All
                    </Radio>

                    {categories.trivia_categories.map((category: Category) => {
                      return (
                        <Radio
                          key={category.id}
                          value={category.id}
                          className="category-radio"
                        >
                          {category.name}
                        </Radio>
                      );
                    })}
                  </Radio.Group>
                </div>
              </div>
              {/* <hr className="border-b-2 border-black my-4 w-[80%] mx-auto" /> */}
              <div className="flex flex-col w-[80%] mx-auto bg-quiz-base-100 border-quiz-base-300 mb-4 rounded-2xl p-5">
                <h4 className="mx-1 mb-2">Quiz</h4>
                <div className="quizes">
                  <Card
                    hoverable
                    onClick={() => handleSelectDifficulty('easy')}
                    className={`difficulty-card ${difficulty === 'easy' ? 'difficulty-card-selected' : ''}`}
                  >
                    Easy
                  </Card>
                  <Card
                    hoverable
                    onClick={() => handleSelectDifficulty('medium')}
                    className={`difficulty-card ${difficulty === 'medium' ? 'difficulty-card-selected' : ''}`}
                  >
                    Medium
                  </Card>
                  <Card
                    hoverable
                    onClick={() => handleSelectDifficulty('hard')}
                    className={`difficulty-card ${difficulty === 'hard' ? 'difficulty-card-selected' : ''}`}
                  >
                    Hard
                  </Card>
                </div>
              </div>
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
            </>
          )}
        </>
      </div>
    </div>
  );
}

const fetchCategories = async (): Promise<CategoriesResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch('https://opentdb.com/api_category.php');

  return await response.json();
};

// const fetchQuiz = async (difficulty: string): Promise<QuizResponse> => {
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   const response = await fetch(
//     `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`,
//   );

//   return await response.json();
// };

const fetchEasyQuiz = async (categoryId: number): Promise<QuizResponse> => {
  console.log('meta', categoryId);

  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=easy&category=${categoryId}`,
  );

  return await response.json();
};

const fetchMediumQuiz = async (categoryId: number): Promise<QuizResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=medium&category=${categoryId}`,
  );

  return await response.json();
};

const fetchHardQuiz = async (categoryId: number): Promise<QuizResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=hard&category=${categoryId}`,
  );

  return await response.json();
};

export type QuizResponse = {
  response_code: number;
  results: QuizEntryProps[];
};

export type CategoriesResponse = {
  trivia_categories: Category[];
};

export type Category = {
  id: number;
  name: string;
};
