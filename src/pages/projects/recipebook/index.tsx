import Button from '@/components/Resume/Button';
import RecipeBookApp from '@/projects/recipebook-app/src/RecipeBookApp';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';

const RecipeBookPage = () => {
  const navigate = useNavigate();

  const handleGoBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate(`/projects`);
  };

  return (
    <div className="mt-4">
      <Button variant="vanilla" onClick={handleGoBack}>
        Back to Gallery
      </Button>
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
        <p className="text-xl max-w-2xl mt-6 mb-8!">
          A simple app to search for recipes on themealdb API. It displays a
          list of results with categories and a detail window hwn clicked.
        </p>
      </div>
      <div className="bg-white mt-4 mb-4 border-4  border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] py-4 px-8">
        <div className="rounded-md border-5 flex justify-start items-start border-black bg-white mx-auto">
          <RecipeBookApp />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-black mb-4 relative inline-block">
          <span className="relative z-10 uppercase">Tech Stack</span>
          <div className="absolute -bottom-0 left-0 w-full h-2 bg-purple-400 -rotate-1 z-0"></div>
        </h3>
        <ul className="sm:text-xs flex flex-row justify-start items-center flex-wrap mb-4 gap-4">
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
          This is a simple Recipe lookup Application. I was experimenting with
          some simple animations and transitions.
        </p>
        <p>Below is a short list of features.</p>
        <h5>Features: </h5>
        <ul className="list-disc ml-4">
          <li>Search by term</li>
          <li>View results</li>
          <li>View Details for Recipe</li>
        </ul>

        <p>
          That's really it. the main purpose was to work with css transitions
          and animations.
        </p>
      </div>
      <hr className="border-2 my-8 border-black" />
    </div>
  );
};

export default RecipeBookPage;
