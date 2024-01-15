import sampleSize from 'lodash/sampleSize';
import shuffle from 'lodash/shuffle';
import { useCallback, useEffect, useState } from 'react';

import gitmojis from '../data/gitmojis';
import { EmojiData } from '../types/EmojiData.type';

const useGitmojiQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<EmojiData | null>(null);
  const [choices, setChoices] = useState<EmojiData[] | null>(null);

  const setNewQuestion = useCallback(() => {
    const [question, ...possibleAnswers] = sampleSize(gitmojis, 4);
    setCurrentQuestion(question);
    setChoices(shuffle([question, ...possibleAnswers]));
  }, []);

  useEffect(() => {
    setNewQuestion();
  }, [setNewQuestion]);

  return { currentQuestion, choices, setNewQuestion };
};

export default useGitmojiQuiz;
