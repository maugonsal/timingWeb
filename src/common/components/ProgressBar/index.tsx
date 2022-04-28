import React, { FC } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import './style.css';

interface IBar {
  completed: number | string;
  daysLeft: number;
  customLabel: any;
}

const Bar: FC<IBar> = ({ completed, daysLeft, customLabel }) => (
  <div className="containerBar">
    <div className="title">
      <h4 className="titleDays">Days left: &nbsp;</h4>
      <h4 className="days">{daysLeft}</h4>
    </div>
    <ProgressBar
      completed={completed}
      bgColor="#8940FA"
      baseBgColor="#A5B6B7"
      borderRadius="3px"
      customLabel={customLabel}
      labelClassName="label"
    />
  </div>
);

export default Bar;
