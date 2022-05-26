import React, { FC } from 'react';
import { Button } from '@mui/material';
import '../style.css';
import { useTranslation } from 'react-i18next';
import { Entry } from '../../../../types';

const AddNewDate: FC<{ entry: Entry; onClick: () => void }> = ({
  onClick,
  entry,
}) => {
  const { t } = useTranslation();
  return (
    <Button
      disabled={entry.inseminations.length === 0}
      variant="contained"
      className="buttonAdd"
      onClick={onClick}>
      {t('addNewDate')}
    </Button>
  );
};

export default AddNewDate;
