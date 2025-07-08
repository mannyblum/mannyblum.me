import Button from '@/components/Button';
import { BorderOutlined, CheckSquareOutlined } from '@ant-design/icons';
import {
  CheckboxIcon,
  SquareFillIcon,
  SquareIcon,
} from '@primer/octicons-react';
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
    <div className="mt-4">
      <Button variant="vanilla" onClick={handleGoBack}>
        Back to Gallery
      </Button>
      <div className="bg-white h-[100%] mt-4 border-4  border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] py-4 px-8">
        <div className="relative my-4">
          <h2 className="text-4xl font-black mb-4 relative inline-block">
            <span className="relative z-10 uppercase">Trivia Quiz</span>
            <div className="absolute -bottom-1 left-0 w-full h-3 bg-green-400 -rotate-1 z-0"></div>
          </h2>
          <p className="absolute uppercase text-white font-black bg-red-400 text-[16px]! -top-0.5 -right-0.5 py-1.5 sm:-top-5 sm:-right-3  px-4 border-2 border-black rotate-3">
            APP
          </p>
        </div>

        <div>
          <p className="text-xl max-w-2xl mt-6 mb-8!">
            A Trivia/Quiz game that asks you to select a category and
            difficulty, it then queries a trivia API that returns 10 questions
            for you to answer.
          </p>
        </div>
        <div className="mb-8 flex grow justify-center items-center">
          <div className="rounded-md border-5 flex justify-center items-start border-black bg-white h-full mx-auto">
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
          <p className="mb-2">
            I queried some generative AI and asked it to provide me with
            checklist to achieve an MVP. This is what it gave me.
          </p>
          <ul className="list-decimal ml-4 text-sm">
            <li>
              Core Features
              <ul className="ml-4">
                <li>
                  <span className="flex flex-row items-start">
                    <CheckSquareOutlined className="mr-2 mt-1" />
                    Home Page
                  </span>
                  <ul className="ml-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        App title and brief description
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        “Start Quiz” button
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <CheckSquareOutlined className="mr-2 mt-1" />
                    Question Interface
                  </span>
                  <ul className="ml-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Display one question at a time
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Multiple choice answers (radio buttons or buttons)
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        “Next” button (disabled until an answer is selected)
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Question counter (e.g. “Question 3 of 10”)
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Score Tracking
                  </span>
                  <ul className="ml-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Track correct/incorrect answers
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Calculate final score
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Store results in state
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    App title and brief description Results Page
                  </span>
                  <ul className="ml-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Final score summary
                      </span>
                    </li>

                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Percentage or letter grade
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Option to restart quiz
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              Data Handling
              <ul className="ml-4">
                <li>
                  <span className="flex flex-row items-start">
                    <CheckSquareOutlined className="mr-2 mt-1" />
                    Use local JSON or external API for question/answer data
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <CheckSquareOutlined className="mr-2 mt-1" />
                    Shuffle questions and/or answers
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Support multiple question types (optional):
                  </span>
                  <ul className="ml-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Multiple choice
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        True/False
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Fill-in-the-blank (stretch goal)
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              UI/UX
              <ul className="ml-4">
                <li>
                  <span className="flex flex-row items-start">
                    <CheckSquareOutlined className="mr-2 mt-1" />
                    Mobile-first responsive layout
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Progress indicator (e.g., progress bar)
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Visual feedback on answer selection (e.g., highlight
                    correct/wrong)
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Loading state (if fetching data)
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Transition animations between questions (optional)
                  </span>
                </li>
              </ul>
            </li>
            <li>
              State Management
              <ul className="ml-4">
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Use useState and useEffect for managing:
                  </span>
                  <ul className="ml-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Current question index
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <CheckSquareOutlined className="mr-2 mt-1" />
                        Selected answer
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Score
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Quiz completion status
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              Bonus Features (Optional but Impressive)
              <ul className="ml-4">
                <li>
                  <span className="flex flex-row items-start">
                    <CheckSquareOutlined className="mr-2 mt-1" />
                    Categories/Difficulty selection
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Timer for each question
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Leaderboard (localStorage or backend)
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    User authentication (e.g., with Firebase)
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Dark mode toggle
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Accessibility (keyboard nav, ARIA labels)
                  </span>
                </li>
              </ul>
            </li>

            <li>
              Tech Stack Highlights
              <ul className="ml-4">
                <li>
                  <span className="flex flex-row items-start">
                    <CheckSquareOutlined className="mr-2 mt-1" />
                    React components for each screen (Home, Quiz, Result){' '}
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <CheckSquareOutlined className="mr-2 mt-1" />
                    CSS Modules, Tailwind, or styled-components for styling
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <CheckSquareOutlined className="mr-2 mt-1" />
                    JavaScript logic for scoring and transitions
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <CheckSquareOutlined className="mr-2 mt-1" />
                    Optional: TypeScript for type safety
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <hr className="border-2 my-8 border-black" />
      </div>
    </div>
  );
};

export default TriviaQuizPage;
