import { useMeal } from '@/context/RecipeBookContext';
import type { Meal } from '@/queryOptions/searchQueryOptions';
import RecipeBook from '@components/RecipeBook/RecipeBook';
import RecipeDetails from '@components/RecipeBook/RecipeDetails';
import { isEmpty } from 'lodash';
import { AnimatePresence } from 'motion/react';

const Home = () => {
  const { meal, setMeal } = useMeal();

  return (
    <div className="bg-amber-50 h-screen py-2 pb-4 ">
      <RecipeBook />
      <AnimatePresence mode="wait">
        {!isEmpty(meal) && (
          <RecipeDetails key="details" onClose={() => setMeal({} as Meal)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
