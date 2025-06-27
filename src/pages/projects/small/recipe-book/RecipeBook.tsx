import { useMeal } from '@/context/RecipeBookContext';
import type { Meal } from '@/queryOptions/searchQueryOptions';
import RecipeBook from '@components/RecipeBook/RecipeBook';
import RecipeDetails from '@components/RecipeBook/RecipeDetails';
import { isEmpty } from 'lodash';
import { AnimatePresence } from 'motion/react';

const RecipeBookPage = () => {
  const { meal, setMeal } = useMeal();

  return (
    <div>
      <div className="relative my-4">
        <h2 className="text-4xl font-black mb-4 relative inline-block">
          <span className="relative z-10 uppercase">Recipe Book</span>
          <div className="absolute -bottom-1 left-0 w-full h-3 bg-green-400 -rotate-1 z-0"></div>
        </h2>
        <p className="absolute uppercase text-white font-black bg-red-400 text-[16px]! -top-0.5 -right-0.5 py-1.5 px-4 border-2 border-black rotate-3">
          App
        </p>
      </div>

      <div>
        <p className="text-xl max-w-2xl mt-6 mb-8!">blah blah blah</p>
      </div>
      <div className="border-5 border-black mb-8 h-[500px] min-h-[300px] flex grow justify-center items-center">
        <RecipeBook />
        <AnimatePresence mode="wait">
          {!isEmpty(meal) && (
            <RecipeDetails key="details" onClose={() => setMeal({} as Meal)} />
          )}
        </AnimatePresence>
      </div>
      <div>
        <h3 className="text-2xl font-black mb-8 relative inline-block">
          <span className="relative z-10 uppercase">Tech Stack</span>
          <div className="absolute -bottom-0 left-0 w-full h-2 bg-purple-400 -rotate-1 z-0"></div>
        </h3>
        <ul className="flex flex-row justify-start items-center mb-8 gap-4">
          <li className="px-2 py-1 bg-green-400">React</li>
          <li className="px-2 py-1 bg-indigo-400">Typescript</li>
          <li className="px-2 py-1 bg-purple-400">TailwindCSS</li>
          <li className="px-2 py-1 bg-green-400">react-query</li>
          <li className="px-2 py-1 bg-purple-400">Motion</li>
          <li className="px-2 py-1 bg-green-400">Lodash</li>
        </ul>
      </div>
      <hr className="border-2 mb-8 border-black" />
      <div>
        <h4>About this project</h4>
        <p>
          This is a simple To-do List Application. I just wanted to create
          something simple from the top of my head and w/out many details.
        </p>
        <p>
          I came up with what I thought would be some good features required for
          a valid MVP
        </p>
        <h5>Features: </h5>
        <ul className="list-disc ml-4">
          <li>
            Add/Edit Task
            <ul className="list-disc ml-4">
              <li>Title</li>
              <li>Category</li>
            </ul>
          </li>
          <li>Delete Task</li>
          <li>Mark as completed</li>
          <li>Add Categories</li>
          <li>Filter between: All, Active, Completed</li>
          <li>Clear Completed Tasks</li>
          <li>Data persistence with localStorage</li>
        </ul>
      </div>
      <hr className="border-2 my-8 border-black" />
    </div>
  );
};

export default RecipeBookPage;
