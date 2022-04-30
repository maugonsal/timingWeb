import { Button } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import Bar from '../ProgressBar';
import './style.css';

interface IResult {
    progressValue: number;
    counterDaysByOvulation: number;
    rangeDates: string;
    setCounterLeft: number;
}

const Result: FC<IResult> = ({
  progressValue, counterDaysByOvulation, rangeDates, setCounterLeft,
}) => {
  const { t } = useTranslation();

  return (
        <div className="result">
                <div className="resultContainer">
                    <div className="date">
                        <h4 className="possibleDay">{t('posibleDay')}:&nbsp;&nbsp;&nbsp;
                            <h4 className="range">{rangeDates}</h4>
                        </h4>
                    </div>
                    <div className="bar">
                        <Bar
                            completed={progressValue}
                            daysLeft={setCounterLeft}
                            customLabel={<>
                                <div className="svg">
                                    <ReactSVG src="/resources/svg/primaryLogo.svg" />
                                </div>
                                <h4 className="day">{t('day')} {counterDaysByOvulation}</h4>
                            </>} />
                    </div>
                </div>
            </div>
  );
};

export default Result;
