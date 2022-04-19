import { FC } from 'react';
import EntryPage from './components/Entry';
import Header from './components/Header';
import Title from './components/Title';

const Home: FC = () => (
  <>
    <Header />
    <Title />
    <EntryPage />
  </>
);

export default Home;
