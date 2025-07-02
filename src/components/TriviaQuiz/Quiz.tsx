import { Button } from 'antd';
import { decode } from 'html-entities';
import { useEffect, useState } from 'react';

import QuizEntry from './QuizEntry';
import type { QuizEntryProps } from './QuizEntry';

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

  const onPrevQuestion = () => {
    if (activeStep === 0) return;

    setActiveStep((prev) => prev - 1);
  };

  const handleQuit = () => {
    onQuit(quiz[0].difficulty);
  };

  useEffect(() => {
    if (selectedAnswer) {
      const answer = quiz[activeStep].correct_answer === selectedAnswer;

      setAnswers((answers) => {
        return [...answers, answer];
      });
    }
  }, [selectedAnswer]);

  console.log('selectedAnswer', selectedAnswer);

  return (
    <div className="bg-indigo-400 pt-5 w-full h-full rounded-2xl">
      <div className="text-xs quiz-meta w-[80%] mx-auto flex justify-between">
        <div>{decode(quiz[activeStep].category)}</div>
        <div>
          {activeStep + 1} of {quiz.length}
        </div>
      </div>
      <div className="text-xs  quiz-meta w-[80%] mx-auto ">
        Difficulty:{' '}
        <span className="font-black capitalize">{quiz[0].difficulty}</span>
      </div>
      <hr className="border-b-2 border-black my-2 w-[80%] mx-auto" />

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
      <div className="footer flex justify-between p-2">
        <Button onClick={onPrevQuestion}>Previous</Button>
        <Button onClick={handleQuit}>X</Button>
        <Button disabled={!selectedAnswer} onClick={onNextQuestion}>
          Next
        </Button>
      </div>
    </div>
  );
}
