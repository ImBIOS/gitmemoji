import colors from '../data/colors';
import { EmojiData } from '../types/EmojiData.type';

interface EmojiCardProps {
  emojiData: EmojiData;
  onClick: () => void;
  className?: string;
}

const MinimalEmojiCard = ({ emojiData, onClick, className }: EmojiCardProps) => {
  return (
    <div
      style={{
        backgroundColor: colors[emojiData.name],
      }}
      onClick={onClick}
      className={`${className} rounded-2xl overflow-hidden shadow-sm cursor-pointer flex justify-center items-center flex-col bg-white text-7xl p-10`}
    >
      {emojiData.emoji}
    </div>
  );
};

export default MinimalEmojiCard;
