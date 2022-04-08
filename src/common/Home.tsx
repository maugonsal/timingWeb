import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';

const Home: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <h1>{t('title')}</h1>
    </>
  );
};

export default Home;
