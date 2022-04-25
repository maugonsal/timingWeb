import React, { FC, useState } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { Entry } from '../../../../types';
import { formatDate } from '../../../../utils/date';

const CalculatedEntry: FC<{
  entry: Entry;
  setRangeDates: (date: string) => void;
  setProgressValue: (arg0: number) => void;
  setCounterDaysByOvulation: (arg0: number) => void;
}> = ({
  entry,
  setRangeDates,
  setProgressValue,
  setCounterDaysByOvulation,
}) => {
  const [probableDay, setProbableDay] = useState<string>('');

  const { ovulationDays, inseminationDays } = entry;
  const { t } = useTranslation();

  const calculate = () => {
    if (entry?.ovulation !== '') {
      const probableDayBirth = addDays(
        new Date(entry.ovulation),
        ovulationDays,
      );
      setProbableDay(probableDayBirth.toString());
    }
    if (entry?.inseminations.length) {
      const firstInsemination = entry.inseminations[0].date;

      const firstDayBirthOfInsemination = addDays(
        new Date(firstInsemination),
        inseminationDays,
      );

      const lastDayBirthOfInsemination = addDays(
        new Date(entry.lastInsemination ?? new Date()),
        inseminationDays,
      );
      if (entry?.inseminations.length > 1) {
        setRangeDates(
          `${formatDate(firstDayBirthOfInsemination)} - ${formatDate(
            lastDayBirthOfInsemination,
          )}`,
        );
      } else {
        setRangeDates(`${formatDate(firstDayBirthOfInsemination)}`);
      }
    }
    const counterDays: number = differenceInDays(
      new Date(),
      entry?.ovulation !== ''
        ? new Date(probableDay)
        : new Date(
          addDays(
            new Date(entry.lastInsemination ?? new Date()),
            inseminationDays,
          ),
        ),
    );
    const progressCount = Math.abs(counterDays) / inseminationDays;
    setCounterDaysByOvulation(counterDays);
    setProgressValue(progressCount);
  };

  return (
    <div>
      <Button
        variant="contained"
        className="buttonCalculate"
        onClick={() => calculate()}>
        {t('calculate')}
      </Button>
    </div>
  );
};

export default CalculatedEntry;
