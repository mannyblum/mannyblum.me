import { Button, Radio, RadioChangeEvent } from 'antd';
import { decode } from 'html-entities';
import { shuffle } from 'lodash';
import { useMemo, useState } from 'react';

import type { QuizEntry } from '../../pages/projects/trivia-quiz/TriviaQuiz';

const indexToLetter = (index: number) => String.fromCharCode(97 + index);

function QuizEntry({
  entry,
  step,
  activeStep,
}: {
  entry: QuizEntry;
  activeStep: number;
  step: number;
}) {
  const [selected, setSelected] = useState();

  const answers = useMemo(() => {
    return shuffle([...entry.incorrect_answers, entry.correct_answer]);
  }, []);

  const onChange = (e: RadioChangeEvent) => {
    setSelected(e.target.value);
  };

  if (step !== activeStep) return null;

  return (
    <div className="p-4 mx-4">
      <h1 className="text-white text-2xl mb-4">
        {step + 1}. {decode(entry.question)}
      </h1>
      <Radio.Group
        className="quiz-options"
        value={selected}
        onChange={onChange}
      >
        {answers.map((answer, index) => {
          return (
            <Radio key={indexToLetter(index)} value={answer}>
              <span className="font-black uppercase mr-1">
                {indexToLetter(index)}.
              </span>
              {answer}
            </Radio>
          );
        })}
      </Radio.Group>
    </div>
  );
}

export default function Quiz({
  data,
  onQuit,
}: {
  data: QuizEntry[];
  onQuit: (difficulty: string) => void;
}) {
  const [activeStep, setActiveStep] = useState(0);

  const onNextQuestion = () => {
    if (activeStep === 9) return;

    setActiveStep((prev) => prev + 1);
  };

  const onPrevQuestion = () => {
    if (activeStep === 0) return;

    setActiveStep((prev) => prev - 1);
  };

  const handleQuit = () => {
    onQuit(data[0].difficulty);
  };

  return (
    <div className="bg-indigo-400 pt-5 w-full h-full rounded-2xl">
      <div className="text-xs quiz-meta w-[80%] mx-auto flex justify-between">
        <div>{decode(data[activeStep].category)}</div>
        <div>
          {activeStep + 1} of {data.length}
        </div>
      </div>
      {data.map((entry, index) => {
        return (
          <QuizEntry
            key={entry.question}
            entry={entry}
            step={index}
            activeStep={activeStep}
          />
        );
      })}
      <hr className="border-b-2 border-black my-4 w-[80%] mx-auto" />
      <div className="footer flex justify-between p-2">
        <Button onClick={onPrevQuestion}>Previous</Button>
        <Button onClick={handleQuit}>X</Button>
        <Button onClick={onNextQuestion}>Next</Button>
      </div>
    </div>
  );
}
