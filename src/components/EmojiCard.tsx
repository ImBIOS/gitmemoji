import colors from '../data/colors';
import { EmojiData } from '../types/EmojiData.type';

interface EmojiCardProps {
  emojiData: EmojiData;
  onClick: () => void;
  className?: string;
}

const EmojiCard = ({ emojiData, onClick, className }: EmojiCardProps) => {
  return (
    <div
      className={`border rounded-3xl overflow-hidden shadow-sm cursor-pointer flex flex-col bg-white ${className ? className : ''
        }`}
      onClick={onClick}
    >
      <div
        className='flex justify-center items-center'
        style={{ backgroundColor: colors[emojiData.name] }}
      >
        <div className='scale-150'>
          <div className='scale-150'>
            <div className='text-6xl md:text-3xl scale-150 p-28'>{emojiData.emoji}</div>
          </div>
        </div>
      </div>
      <div className='flex-grow flex justify-center items-center'>
        <div className='text-xl font-bold p-4 sm:text-sm md:text-base lg:text-lg xl:text-xl'>
          {emojiData.code}
        </div>
      </div>
    </div>
  );
};

export default EmojiCard;
