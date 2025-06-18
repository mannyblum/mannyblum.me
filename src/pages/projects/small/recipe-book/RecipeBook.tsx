import { useMeal } from '@/context/RecipeBookContext';
import type { Meal } from '@/queryOptions/searchQueryOptions';
import RecipeBook from '@components/RecipeBook/RecipeBook';
import RecipeDetails from '@components/RecipeBook/RecipeDetails';
import { isEmpty } from 'lodash';
import { AnimatePresence } from 'motion/react';

const Home = () => {
  const { meal, setMeal } = useMeal();

  return (
    <div className="bg-amber-50 h-[90vh] my-4 mb-20 py-4 border-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] border-black relative overflow-y-scroll">
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
