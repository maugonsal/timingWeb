import { FC, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Input, Button, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useTranslation } from 'react-i18next';
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
    ovulation: '',
    lastInsemination: '',
    inseminations: [],
    ovulationDays: 63,
    inseminationDays: 61,
  });

  return (
    <div>
      <div className="containerEntry">
        <h1 className="title">{t('calculator')}</h1>
        <ReactSVG src="/resources/svg/appLogoBlack.svg" />
      </div>
      <div className="containerInputs">
        <div className="containerData">
          <h4 className="titleInput">{t('name')}</h4>
          <Input placeholder="Name" className="inputName" />
        </div>
        <div className="containerData">
          <h4 className="titleInput">{t('ovulation')}</h4>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
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
        <div className="containerData">
          {entry.inseminations.length ? null : (
            <h4 className="titleInput">{t('insemination')}</h4>
          )}
          {entry.inseminations.map((insemination, index) => (
            <div className="containerInsemination">
              <h4 className="titleInput">{t('insemination')}</h4>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  key={insemination.id}
                  className="containerDate"
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
                        inseminationsDates[inseminationsDates.length - 1].date,
                    }));
                  }}
                  renderInput={(params) => (
                    <TextField className="containerDate" {...params} />
                  )}
                />
              </LocalizationProvider>
            </div>
          ))}
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
          />
        </div>
        <div className="buttons">
          <CalculatedEntry
            entry={entry}
            setRangeDates={setRangeDates}
            setProgressValue={setProgressValue}
            setCounterDaysByOvulation={setCounterDaysByOvulation}
          />
          <Settings entry={entry} setEntry={setEntry} />
        </div>
      </div>
      {rangeDates !== '' && <Result progressValue={progressValue} counterDaysByOvulation={progressValue === 1 ? 0 : Math.abs(counterDaysByOvulation)} rangeDates={rangeDates} />}
    </div>
  );
};