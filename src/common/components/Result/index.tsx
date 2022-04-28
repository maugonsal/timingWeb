import { Button } from '@mui/material';
import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import Bar from '../ProgressBar';
import './style.css';

interface IResult {
    progressValue: number;
    counterDaysByOvulation: number;
    rangeDates: string;
}

const Result: FC<IResult> = ({ progressValue, counterDaysByOvulation, rangeDates }) => (
        <div className="result">
                <div className="resultContainer">
                    <div className="date">
                        <h4 className="possibleDay">Possible day of birth:&nbsp;&nbsp;&nbsp;
                            <h4 className="range">{rangeDates}</h4>
                        </h4>
                    </div>
                    <div className="bar">
                        <Bar
                            completed={progressValue}
                            daysLeft={3}
                            customLabel={<>
                                <div className="svg">
                                    <ReactSVG src="/resources/svg/primaryLogo.svg" />
                                </div>
                                <h4 className="day">Day {counterDaysByOvulation}</h4>
                            </>} />
                    </div>
                </div>
            </div>
);

export default Result;
