import { queryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { Card, Radio, RadioChangeEvent } from 'antd';
import { useState } from 'react';

import Quiz from '../../../components/TriviaQuiz/Quiz';

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

function easyCategoryQueryOptions() {
  return queryOptions({
    queryKey: ['easy'],
    queryFn: () => {
      return fetchEasyQuiz();
    },
    enabled: false,
  });
}
function mediumCategoryQueryOptions() {
  return queryOptions({
    queryKey: ['medium'],
    queryFn: () => {
      return fetchMediumQuiz();
    },
    enabled: false,
  });
}
function hardCategoryQueryOptions() {
  return queryOptions({
    queryKey: ['hard'],
    queryFn: () => {
      return fetchHardQuiz();
    },
    enabled: false,
  });
}

export default function TriviaQuiz() {
  const { data: categories, isFetching } = useQuery(categoryQueryOptions());
  const queryClient = useQueryClient();

  // TODO: REFACTOR THIS LATER
  const {
    isLoading: easyIsLoading,
    data: easyData,
    isError: easyIsError,
    error: easyError,
    isFetching: easyIsFetching,
    refetch: easyRefetch,
  } = useQuery(easyCategoryQueryOptions());
  const {
    isLoading: mediumIsLoading,
    data: mediumData,
    isError: mediumIsError,
    error: mediumError,
    isFetching: mediumIsFetching,
    refetch: mediumRefetch,
  } = useQuery(mediumCategoryQueryOptions());
  const {
    isLoading: hardIsLoading,
    data: hardData,
    isError: hardIsError,
    error: hardError,
    isFetching: hardIsFetching,
    refetch: hardRefetch,
  } = useQuery(hardCategoryQueryOptions());

  const [value, setValue] = useState('All');
  const [difficulty, setDifficulty] = useState<string>();

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const fetchQuestions = (difficulty: string) => {
    setDifficulty(difficulty);

    if (difficulty === 'easy') {
      easyRefetch();
    } else if (difficulty === 'medium') {
      mediumRefetch();
    } else if (difficulty === 'hard') {
      hardRefetch();
    }
  };

  if (isFetching) {
    return <div>Loading ...</div>;
  }

  if (!categories) return;

  console.log('data', categories);

  const handleQuit = (difficulty: string) => {
    queryClient.removeQueries({ queryKey: [difficulty] });
    setDifficulty(undefined);
  };

  const renderQuiz = () => {
    if (
      easyData?.results.length === 10 ||
      mediumData?.results.length === 10 ||
      hardData?.results.length === 10
    ) {
      const data =
        easyData?.results || mediumData?.results || hardData?.results;

      return <Quiz data={data!} onQuit={handleQuit} />;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="trivia-wrapper w-[393px] h-[852px] my-0 mx-auto">
        <h1 className="text-4xl my-4 mx-auto text-center ">TriviaQuiz</h1>
        <hr className="border-b-2 border-black my-4 w-[80%] mx-auto" />
        <>{difficulty && renderQuiz()}</>
        <div className="flex flex-col mx-2">
          <h4 className="mx-1 mb-2">Category</h4>
          <div className="trivia-categories overflow-auto no-scrollbar flex ">
            <Radio.Group
              value={value}
              onChange={onChange}
              className="radio-custom overflow-auto mx-2 no-scrollbar flex!"
            >
              <Radio key="all" value={'All'} className="m-1! items-start!">
                All
              </Radio>

              {categories.trivia_categories.map((category: Category) => {
                return (
                  <Radio
                    key={category.name}
                    value={category.name}
                    className="m-1! items-start!"
                  >
                    {category.name}
                  </Radio>
                );
              })}
            </Radio.Group>
          </div>
        </div>
        <hr className="border-b-2 border-black my-4 w-[80%] mx-auto" />
        <div className="flex flex-col mx-2">
          <h4 className="mx-1 mb-2">Quiz</h4>
          <div className="quizes">
            <Card
              hoverable
              onClick={() => fetchQuestions('easy')}
              className="w-auto mb-2!"
            >
              Easy
            </Card>
            <Card
              hoverable
              onClick={() => fetchQuestions('medium')}
              className="w-auto mb-2!"
            >
              Medium
            </Card>
            <Card
              hoverable
              onClick={() => fetchQuestions('hard')}
              className="w-auto mb-2!"
            >
              Hard
            </Card>
          </div>
        </div>
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

const fetchEasyQuiz = async (): Promise<QuizResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(
    'https://opentdb.com/api.php?amount=10&difficulty=easy',
  );

  return await response.json();
};

const fetchMediumQuiz = async (): Promise<QuizResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(
    'https://opentdb.com/api.php?amount=10&difficulty=medium',
  );

  return await response.json();
};

const fetchHardQuiz = async (): Promise<QuizResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(
    'https://opentdb.com/api.php?amount=10&difficulty=hard',
  );

  return await response.json();
};

export type QuizEntry = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuizResponse = {
  response_code: number;
  results: QuizEntry[];
};

export type CategoriesResponse = {
  trivia_categories: Category[];
};

export type Category = {
  id: number;
  name: string;
};
