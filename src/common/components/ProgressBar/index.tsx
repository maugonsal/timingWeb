import React, { FC } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import './style.css';
import { useTranslation } from 'react-i18next';

interface IBar {
  completed: number | string;
  daysLeft: number;
  customLabel: any;
}

const Bar: FC<IBar> = ({ completed, daysLeft, customLabel }) => {
  const { t } = useTranslation();

  return (
  <div className="containerBar">
    <div className="titleDaysLeft">
      <h4 className="titleDays">{t('daysLeft')}: &nbsp;</h4>
      <h4 className="daysLeft">{daysLeft}</h4>
    </div>
    <ProgressBar
      completed={completed}
      bgColor="#8940FA"
      baseBgColor="#A5B6B7"
      borderRadius="3px"
      customLabel={customLabel}
      labelClassName="label"
      maxCompleted={1}
    />
  </div>
  );
};

export default Bar;
