import { FC, useMemo, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Input, Button, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useTranslation } from 'react-i18next';
import bgLocale from 'date-fns/locale/bg';
import AddNewDate from './components/AddNewDate';
import { generateDateId } from '../../../utils/date';
import { Entry } from '../../../types';
import './style.css';
import CalculatedEntry from './components/CalculatedEntry';
import Settings from '../Settings';
import Result from '../Result';

const EntryPage: FC = () => {
  const { t } = useTranslation();
  const [entry, setEntry] = useState<Entry>({
    name: '',
    ovulation: new Date().toString(),
    lastInsemination: '',
    inseminations: [{ id: '0', date: new Date().toString() }],
    ovulationDays: 63,
    inseminationDays: 61,
  });
  const [rangeDates, setRangeDates] = useState<string>('');
  const [progressValue, setProgressValue] = useState<number>(0);
  const [counterDaysByOvulation, setCounterDaysByOvulation] = useState<number>(0);
  const [counterLeft, setCounterLeft] = useState<number>(0);
  const [probableDay, setProbableDay] = useState<string>('');

  const calculated = useMemo(
    () => (
      <Result
        probableDay={probableDay}
        progressValue={progressValue}
        counterDaysByOvulation={
          progressValue === 1 ? 0 : Math.abs(counterDaysByOvulation)
        }
        rangeDates={rangeDates}
        setCounterLeft={counterLeft}
      />
    ),
    [
      probableDay,
      progressValue,
      rangeDates,
      counterDaysByOvulation,
      counterLeft,
    ],
  );

  return (
    <div>
      <div className="containerEntry ">
        <h1 className="title">{t('calculator')}</h1>
        <ReactSVG src="/resources/svg/appLogoBlack.svg" />
      </div>
      <div className={`containerInputs ${rangeDates !== '' && 'border'}`}>
        <div className="contentInputs">
          <div className="containerOvulation">
            <h4 className="titleInput">{t('ovulation')}</h4>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={bgLocale}>
              <DatePicker
                className="containerDate"
                value={entry.ovulation}
                onChange={(newOvulation) => {
                  setEntry((prev) => ({
                    ...prev,
                    ovulation: newOvulation?.toString() || '',
                  }));
                }}
                renderInput={(params) => (
                  <TextField className="containerDate" {...params} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="containerInsemination">
            {entry.inseminations.map((insemination, index) => (
              <>
                <h4 className="titleInput">{t('insemination')}</h4>
                <div className="containerDateInsemination">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      key={insemination.id}
                      value={entry.inseminations[index].date}
                      onChange={(newDate) => {
                        const { inseminations } = entry;
                        const inseminationId = entry.inseminations[index].id;
                        const inseminationsDates = inseminations.map((item) => {
                          if (item.id === inseminationId) {
                            return {
                              ...item,
                              date: newDate?.toString() || '',
                            };
                          }
                          return item;
                        });
                        setEntry((prev) => ({
                          ...prev,
                          inseminations: inseminationsDates,
                          lastInsemination:
                            inseminationsDates[inseminationsDates.length - 1]
                              .date,
                        }));
                      }}
                      renderInput={(params) => (
                        <TextField className="containerDate" {...params} />
                      )}
                    />
                  </LocalizationProvider>
                  {entry.inseminations.length > 1 && (
                    <Button
                      variant="outlined"
                      className="deletedDate"
                      onClick={() => {
                        setEntry((prev) => ({
                          ...prev,
                          inseminations: prev.inseminations.filter(
                            (prevInseminations) => prevInseminations.id !== insemination.id,
                          ),
                        }));
                      }}>
                      X
                    </Button>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
        <AddNewDate
          onClick={() => {
            setEntry((prev) => ({
              ...prev,
              inseminations: [
                ...prev.inseminations,
                { id: generateDateId(), date: new Date().toString() },
              ],
              lastInsemination:
                entry.inseminations?.[entry.inseminations.length - 1]?.date,
            }));
          }}
          entry={entry}
        />
        <div className="buttons">
          <CalculatedEntry
            entry={entry}
            setRangeDates={setRangeDates}
            setCounterDaysByOvulation={setCounterDaysByOvulation}
            setProgressValue={setProgressValue}
            setCounterLeft={setCounterLeft}
            setProbableDay={setProbableDay}
          />
          <Settings entry={entry} setEntry={setEntry} />
        </div>
      </div>
      {rangeDates !== '' && calculated}
    </div>
  );
};

export default EntryPage;
