import 'csshake';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmojiCard from '../components/EmojiCard';
import useGitmojiQuiz from '../hooks/useGitmojiQuiz';

const EasyQuiz: React.FC = () => {
  const { currentQuestion, choices, setNewQuestion } = useGitmojiQuiz();
  const [shake, setShake] = useState<string | null>(null);

  if (!currentQuestion || !choices) {
    return null;
  }

  return (
    <Layout>
      <Question
        onClick={async () => {
          setShake(currentQuestion.name);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setShake(null);
        }}
      >
        {currentQuestion.description}
      </Question>

      <EasyGrid>
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
      </EasyGrid>

      <Group>
        <GoToQuiz to='/'>Back to home</GoToQuiz>
        <GoToQuiz to='/hard'>Quiz for gurus</GoToQuiz>
      </Group>
    </Layout>
  );
};

const Layout = styled.div`
  min-height: 100vh;
  background-color: #eee;
`;

const Question = styled.div`
  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
  padding: 1em 0.5em;
  font-size: 30px;
  text-align: center;
  color: #555;
  font-weight: bold;
  background-color: #fff;
  position: sticky;
  top: 0;
`;

const Grid = styled.div`
  flex-grow: 1;
  padding: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const EasyGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GoToQuiz = styled(Link)`
  color: #ef584a;
  text-decoration: none;
  font-weight: bold;
  font-size: 40px;
  margin-top: 20px;
`;

export default EasyQuiz;
