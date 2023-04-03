import Description from '../components/Description';
import ExternalLink from '../components/ExternalLink';
import GitHubButton from '../components/GithubButton';
import GoToQuiz from '../components/GoToQuiz';
import Group from '../components/Group';
import Layout from '../components/Layout';
import Title from '../components/Title';

const Root: React.FC = () => {
  return (
    <Layout>
      <Group>
        <Title>
          Git<b>me</b>moji
        </Title>
        <Description>
          Learn <ExternalLink href='https://gitmemoji.imam.dev/'>gitmoji!</ExternalLink>
        </Description>
      </Group>
      <GitHubButton />
      <Group>
        <GoToQuiz to='/easy'>Quiz for newbies</GoToQuiz>
        <GoToQuiz to='/hard'>Quiz for gurus</GoToQuiz>
      </Group>
    </Layout>
  );
};

export default Root;
