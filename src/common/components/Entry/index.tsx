import { FC, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Input, Button, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AddNewDate from './components/AddNewDate';
import { generateDateId } from '../../../utils/date';
import { Entry } from '../../../types';
import './style.css';

const EntryPage: FC = () => {
  const [entry, setEntry] = useState<Entry>({
    name: '',
    ovulation: '',
    lastInsemination: '',
    inseminations: [],
  });

  return (
    <div>
      <div className="containerEntry">
        <h1 className="title">Calculator</h1>
        <ReactSVG src="/resources/svg/appLogoBlack.svg" />
      </div>
      <div className="containerInputs">
        <div className="containerData">
          <h4 className="titleInput">Name of the Dog</h4>
          <Input placeholder="Name" className="inputName" />
        </div>
        <div className="containerData">
          <h4 className="titleInput">Ovulation Date</h4>
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
        <div className="containerInsemination">
          <h4 className="titleInput">Insemination Date</h4>
          {entry.inseminations.map((insemination, index) => (
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
                  }));
                }}
                renderInput={(params) => (
                  <TextField className="containerDate" {...params} />
                )}
              />
            </LocalizationProvider>
          ))}
          <AddNewDate
            onClick={() => {
              setEntry((prev) => ({
                ...prev,
                inseminations: [
                  ...prev.inseminations,
                  { id: generateDateId(), date: new Date().toString() },
                ],
              }));
            }}
          />
        </div>
        <div className="buttons">
          <Button variant="contained" className="buttonCalculate">
            Calculate
          </Button>
          <Button variant="text" className="buttonAdd">
            <ReactSVG src="/resources/svg/setting.svg" className="settings" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
