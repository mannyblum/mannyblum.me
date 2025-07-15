import Button from '@/components/Resume/Button';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';

import CSSChallenges from './Challenges';

const CSSChallengesPage = () => {
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
            <span className="relative z-10 uppercase">CSS Challenges</span>
            <div className="absolute -bottom-1 left-0 w-full h-3 bg-green-400 -rotate-1 z-0"></div>
          </h2>
          <p className="absolute uppercase text-white font-black bg-indigo-400 text-[16px]! -top-0.5 -right-0.5 py-1.5 px-4 border-2 border-black rotate-3">
            CSS
          </p>
        </div>

        <div>
          <p className="text-xl max-w-2xl mt-6 mb-8!">
            These are just a bunch of random CSS projects. The ideas came from
            an Scrimba I found a while back. All of these examples are pure CSS.
            Except for the last one, we used some javascript to generate the
            graph. Some TailwindCSS was used here and there but almost
            everything is plain CSS.
          </p>
        </div>
        <div className="mb-8 min-h-[300px] flex grow justify-center items-center">
          <CSSChallenges />
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
          <p>Various CSS exercises</p>
        </div>
        <hr className="border-2 my-8 border-black" />
      </div>
    </>
  );
};

export default CSSChallengesPage;
