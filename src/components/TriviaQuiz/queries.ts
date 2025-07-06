import { CategoriesResponse, QuizResponse } from '@/types/Quiz';

export const fetchCategories = async (): Promise<CategoriesResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch('https://opentdb.com/api_category.php');

  if (!response.ok) {
    const error = new Error('Error Fetching Categories');
    (error as any).status = response.status;

    throw error;
  }

  return await response.json();
};

// const fetchQuiz = async (difficulty: string): Promise<QuizResponse> => {
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   const response = await fetch(
//     `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`,
//   );

//   return await response.json();
// };

export const fetchEasyQuiz = async (
  categoryId: number,
): Promise<QuizResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=easy&category=${categoryId}`,
  );

  if (!response.ok) {
    const error = new Error('Error Fetching Categories');
    (error as any).status = response.status;

    throw error;
  }

  return await response.json();
};

export const fetchMediumQuiz = async (
  categoryId: number,
): Promise<QuizResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=medium&category=${categoryId}`,
  );

  if (!response.ok) {
    const error = new Error('Error Fetching Categories');
    (error as any).status = response.status;

    throw error;
  }

  return await response.json();
};

export const fetchHardQuiz = async (
  categoryId: number,
): Promise<QuizResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=hard&category=${categoryId}`,
  );

  if (!response.ok) {
    const error = new Error('Error Fetching Categories');
    (error as any).status = response.status;

    throw error;
  }

  return await response.json();
};
