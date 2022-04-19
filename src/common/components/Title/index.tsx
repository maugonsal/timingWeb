import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const Title: FC = () => {
  const { t } = useTranslation();

  return (
      <div className="containerTitle">
          <h1 className="title">{t('title')}</h1>
          <h1 className="subtitle">{t('subtitle')}</h1>
      </div>
  );
};

export default Title;
