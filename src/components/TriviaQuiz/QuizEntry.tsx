import { Radio, RadioChangeEvent } from 'antd';
import { decode } from 'html-entities';
import { shuffle } from 'lodash';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';

const indexToLetter = (index: number) => String.fromCharCode(97 + index);

export type QuizEntryProps = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

const slideVariants = {
  initial: {
    x: 300,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
  exit: {
    x: '-100vw',
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  hidden: {
    x: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

export default function QuizEntry({
  entry,
  step,
  onSelectAnswer,
}: {
  entry: QuizEntryProps;
  step: number;
  onSelectAnswer: (selectedAnswer: string | undefined) => void;
}) {
  const [selected, setSelected] = useState();

  const answers = useMemo(() => {
    return shuffle([...entry.incorrect_answers, entry.correct_answer]);
  }, [entry]);

  const onChange = (e: RadioChangeEvent) => {
    setSelected(e.target.value);
    onSelectAnswer(e.target.value);
  };

  return (
    <motion.div
      key={step}
      variants={slideVariants}
      initial="initial"
      animate="visible"
      exit="exit"
      className="mx-4 px-4"
    >
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
              {decode(answer)}
            </Radio>
          );
        })}
      </Radio.Group>
    </motion.div>
  );
}
