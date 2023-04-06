import 'csshake';
import { useState } from 'react';
import MinimalEmojiCard from '../components/MinimalEmojiCard';
import gitmojis from '../data/gitmojis';
import useGitmojiQuiz from '../hooks/useGitmojiQuiz';

const HardQuiz: React.FC = () => {
  const { currentQuestion, setNewQuestion } = useGitmojiQuiz();
  const [shake, setShake] = useState<string | null>(null);

  if (!currentQuestion) {
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
      <div className='flex-grow-1 p-10'>
        <div className='grid gap-x-2 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8'>
          {gitmojis.map((emoji) => (
            <>
              <MinimalEmojiCard
                emojiData={emoji}
                key={emoji.code}
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
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-5">
          <a href="/" className="text-red-500 font-bold text-2xl">Back to home</a>
        </div>
        <div className="mb-5">
          <a href="/easy" className="text-red-500 font-bold text-2xl">Quiz for newbie</a>
        </div>
      </div>
    </div>
  );
};
export default HardQuiz;
