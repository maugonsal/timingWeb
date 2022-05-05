import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@mui/material/Modal';
import './style.css';
import { Button } from '@mui/material';
import { ReactSVG } from 'react-svg';
import { Entry } from '../../../types';

const Settings: FC<{
  entry: Entry;
  setEntry: (entry: Entry) => void;
}> = ({ entry, setEntry }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const { ovulationDays, inseminationDays } = entry;

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  const addOvulation = () => {
    setEntry({ ...entry, ovulationDays: ovulationDays + 1 });
  };
  const removeOvulation = () => {
    setEntry({ ...entry, ovulationDays: ovulationDays - 1 });
  };
  const addInsemination = () => {
    setEntry({ ...entry, inseminationDays: inseminationDays + 1 });
  };
  const removeInsemination = () => {
    setEntry({ ...entry, inseminationDays: inseminationDays - 1 });
  };

  return (
    <div>
      <Button variant="text" className="buttonAdd" onClick={handleOpen}>
        <ReactSVG src="/resources/svg/setting.svg" className="settings" />
        {t('settings')}
      </Button>
      <Modal open={visible} onClose={handleClose} className="modal">
        <div className="modalContainer">
          <p>{t('preferences')}</p>
          <div className="containerCounter">
            <h3 className="settingTitle">{t('afterOvulation')}</h3>
            <Button onClick={removeOvulation}>
              <ReactSVG src="/resources/svg/arrowLeft.svg" />
            </Button>
            <div className="settingsDay">{ovulationDays}</div>
            <Button onClick={addOvulation}>
              <ReactSVG src="/resources/svg/arrowRight.svg" />
            </Button>
          </div>
          <div className="containerCounter">
            <h3 className="settingTitle">{t('afterInsemination')}</h3>
            <Button onClick={removeInsemination}>
              <ReactSVG src="/resources/svg/arrowLeft.svg" />
            </Button>
            <div className="settingsDay">{inseminationDays}</div>
            <Button onClick={addInsemination}>
              <ReactSVG src="/resources/svg/arrowRight.svg" />
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Settings;
