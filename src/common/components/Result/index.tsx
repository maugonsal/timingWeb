import { Button } from '@mui/material';
import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import Bar from '../ProgressBar';
import './style.css';

const Result: FC = () => (

    <>
        <Button variant="contained" className="buttonCalculate">
            calculate
        </Button>
        <div className="result">
                <div className="resultContainer">
                    <Bar
                        completed={70}
                        daysLeft={30}
                        customLabel={<>
                            <div className="svg">
                                <ReactSVG src="/resources/svg/primaryLogo.svg" />
                            </div>
                            <h4 className="day">Day {31}</h4>
                        </>} />
                </div>
            </div>
    </>
);

export default Result;
