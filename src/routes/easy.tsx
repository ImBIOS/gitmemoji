import 'csshake';
import { useState } from 'react';
import EmojiCard from '../components/EmojiCard';
import useGitmojiQuiz from '../hooks/useGitmojiQuiz';

const EasyQuiz = () => {
  const { currentQuestion, choices, setNewQuestion } = useGitmojiQuiz();
  const [shake, setShake] = useState<string | null>(null);

  if (!currentQuestion || !choices) {
    return null;
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='shadow-sm py-10 px-4 rounded-3xl mx-5 mb-3 text-3xl text-center font-bold text-gray-500 bg-white sticky top-3'
        onClick={async () => {
          setShake(currentQuestion.name);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setShake(null);
        }}
      >
        {currentQuestion.description}
      </div>

      <div className="flex-grow p-5 grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-2">
        {choices.map((emoji) => (
          <EmojiCard
            emojiData={emoji}
            key={emoji.name}
            className={shake === emoji.name ? 'shake shake-constant' : ''}
            onClick={async () => {
              if (emoji.name === currentQuestion.name) {
                return setNewQuestion();
              }
              setShake(emoji.name);
              await new Promise((resolve) => setTimeout(resolve, 1000));
              setShake(null);
            }}
          />
        ))}
      </div>

      <div className="flex flex-col items-center">
        <div className="mt-5">
          <a href="/" className="text-red-500 font-bold text-2xl">Back to home</a>
        </div>
        <div className="mb-5">
          <a href="/hard" className="text-red-500 font-bold text-2xl">Quiz for gurus</a>
        </div>
      </div>

    </div>
  );
};

export default EasyQuiz;