import React, { FC, useState } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { Entry } from '../../../../types';
import { formatDate } from '../../../../utils/date';

const CalculatedEntry: FC<{
  entry: Entry;
  setRangeDates: (date: string) => void;
  setProbableDay: (date: string) => void;
  setProgressValue: (value: number) => void;
  setCounterDaysByOvulation: (days: number) => void;
  setCounterLeft: (days: number) => void;
}> = ({
  entry,
  setRangeDates,
  setProbableDay,
  setProgressValue,
  setCounterDaysByOvulation,
  setCounterLeft,
}) => {
  const { ovulationDays, inseminationDays } = entry;
  const { t } = useTranslation();

  const calculate = () => {
    if (entry?.ovulation !== '') {
      const probableDayBirth = addDays(
        new Date(entry.ovulation),
        ovulationDays,
      );
      setProbableDay(`${formatDate(probableDayBirth)}`);
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
          `${formatDate(firstDayBirthOfInsemination)} / ${formatDate(
            lastDayBirthOfInsemination,
          )}`,
        );
      } else {
        setRangeDates(`${formatDate(firstDayBirthOfInsemination)}`);
      }
    }
  };

  const counterDays: number = differenceInDays(
    new Date(),
    entry?.ovulation !== ''
      ? new Date(entry.ovulation)
      : new Date(
        addDays(
          new Date(entry.lastInsemination ?? new Date()),
          inseminationDays,
        ),
      ),
  );

  const counterLeft = inseminationDays - counterDays;

  const progressCount = Math.abs(counterDays) / inseminationDays;
  setCounterDaysByOvulation(counterDays);
  setCounterLeft(counterLeft);
  setProgressValue(progressCount);

  return (
    <div>
      <Button
        disabled={entry.ovulation === '' || entry.inseminations.length === 0}
        variant="contained"
        className="buttonCalculate"
        onClick={() => calculate()}>
        {t('calculate')}
      </Button>
    </div>
  );
};

export default CalculatedEntry;
