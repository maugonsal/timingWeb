import React, { FC } from 'react';
import { Button } from '@mui/material';
import '../style.css';
import { useTranslation } from 'react-i18next';

const AddNewDate: FC<{ onClick: () => void }> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <Button variant="text" className="buttonAdd" onClick={onClick}>
      {t('addNewDate')}
    </Button>
  );
};

export default AddNewDate;
