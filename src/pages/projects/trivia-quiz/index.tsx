import Button from '@/components/Button';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';

import TriviaQuiz from './TriviaQuiz';

const TriviaQuizPage = () => {
  const navigate = useNavigate();

  const handleGoBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate(`/projects`);
  };
  return (
    <>
      <div className="mt-4">
        <Button variant="vanilla" onClick={handleGoBack}>
          Back to Gallery
        </Button>
      </div>
      <div>
        <div className="relative my-4">
          <h2 className="text-4xl font-black mb-4 relative inline-block">
            <span className="relative z-10 uppercase">Trivia Quiz</span>
            <div className="absolute -bottom-1 left-0 w-full h-3 bg-green-400 -rotate-1 z-0"></div>
          </h2>
          <p className="absolute uppercase text-white font-black bg-red-400 text-[16px]! -top-0.5 -right-0.5 py-1.5 px-4 border-2 border-black rotate-3">
            APP
          </p>
        </div>

        <div>
          <p className="text-xl max-w-2xl mt-6 mb-8!">blah</p>
        </div>
        <div className="mb-8 flex grow justify-center items-center">
          <div className="rounded-md border-5 flex justify-center items-start border-black p-2 bg-white h-full min-w-[600px] w-[600px] margin: 0px auto;">
            <TriviaQuiz />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-black mb-8 relative inline-block">
            <span className="relative z-10 uppercase">Tech Stack</span>
            <div className="absolute -bottom-0 left-0 w-full h-2 bg-purple-400 -rotate-1 z-0"></div>
          </h3>
          <ul className="flex flex-row justify-start items-center mb-8 gap-4">
            <li className="px-2 py-1 bg-green-400">React</li>
            <li className="px-2 py-1 bg-red-400">TailwindCSS</li>
            <li className="px-2 py-1 bg-blue-400">CSS</li>
          </ul>
        </div>
        <hr className="border-2 mb-8 border-black" />
        <div>
          <h4>About this project</h4>
        </div>
        <hr className="border-2 my-8 border-black" />
      </div>
    </>
  );
};

export default TriviaQuizPage;
