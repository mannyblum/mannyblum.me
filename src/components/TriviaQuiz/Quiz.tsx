import { Button } from 'antd';
import { decode } from 'html-entities';
import { useEffect, useState } from 'react';

import QuizEntry from './QuizEntry';
import type { QuizEntryProps } from './QuizEntry';
import QuizProgress from './QuizProgress';

export default function Quiz({
  quiz,
  onQuit,
}: {
  quiz: QuizEntryProps[];
  onQuit: (difficulty: string) => void;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  const [answers, setAnswers] = useState<boolean[]>([]);

  const onNextQuestion = () => {
    if (activeStep === 9) return;

    setSelectedAnswer(undefined);

    setActiveStep((prev) => prev + 1);
  };

  const handleQuit = () => {
    onQuit(quiz[activeStep].difficulty);
  };

  useEffect(() => {
    if (selectedAnswer) {
      const answer = quiz[activeStep].correct_answer === selectedAnswer;

      setAnswers((answers) => {
        return [...answers, answer];
      });
    }
  }, [selectedAnswer]);

  const renderEndScreen = () => {
    let correctAnswers = 0;

    answers.map((answer: boolean) => {
      if (answer) {
        correctAnswers += 1;
      }
    });

    return (
      <div className="w-full h-[50%] bg-amber-400 rounded-lg flex flex-col justify-center items-center">
        <h1 className="mb-4 text-5xl">Congrats!!</h1>
        <p className="text-md!">
          You scored {correctAnswers} / {quiz.length}
        </p>
        <Button className="uppercase" onClick={handleQuit}>
          Restart
        </Button>
      </div>
    );
  };

  if (activeStep === quiz.length) {
    return renderEndScreen();
  }

  return (
    <div className=" pt-5 w-full h-full rounded-2xl">
      <div className="text-xs quiz-meta w-[80%] mx-auto flex justify-between">
        <div>{decode(quiz[activeStep].category)}</div>
        <div>
          {activeStep + 1} of {quiz.length}
        </div>
      </div>
      <div className="text-xs  quiz-meta w-[80%] mx-auto ">
        Difficulty:{' '}
        <span className="font-black capitalize">
          {quiz[activeStep].difficulty}
        </span>
      </div>
      {/* <hr className="border-b-2 border-black my-2 w-[80%] mx-auto" /> */}
      <QuizProgress activeStep={activeStep} totalSteps={quiz.length} />

      {quiz.map((entry, index) => {
        return (
          <QuizEntry
            key={entry.question}
            entry={entry}
            step={index}
            activeStep={activeStep}
            onSelectAnswer={(answer) => setSelectedAnswer(answer)}
          />
        );
      })}
      <hr className="border-b-2 border-black my-4 w-[80%] mx-auto" />
      <div className="footer w-[80%] mx-auto box-content flex justify-between gap-4">
        <Button
          variant="solid"
          className="w-[30%] px-4! py-5! flex-none text-quiz-error-content! bg-quiz-error! border-0!"
          onClick={handleQuit}
        >
          <span className="block text-xl! uppercase font-black!">Quit</span>
        </Button>
        <Button
          variant="solid"
          className="flex-1 w-[70%] px-4 py-5! text-xl! uppercase font-black! border-0! bg-quiz-accent! text-quiz-accent-content! disabled:bg-quiz-neutral! disabled:text-quiz-base-300! disabled:opacity-50"
          disabled={!selectedAnswer}
          onClick={onNextQuestion}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
