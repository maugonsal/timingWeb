import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import EntryPage from './components/Entry';
import Header from './components/Header';
import Title from './components/Title';
import Bar from './components/ProgressBar';

const Home: FC = () => (
  <>
    <Header />
    <Title />
    <EntryPage />
    <Bar
      completed={70}
      daysLeft={30}
      customLabel={
        <>
          <div className="svg">
            <ReactSVG src="/resources/svg/primaryLogo.svg" />
          </div>
          <h4 className="day">Day {31}</h4>
        </>
      }
    />
  </>
);

export default Home;
