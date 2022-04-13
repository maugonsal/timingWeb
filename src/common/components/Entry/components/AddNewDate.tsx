import React, { FC } from 'react';
import { Button } from '@mui/material';
import '../style.css';

const AddNewDate: FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button variant="text" className="buttonAdd" onClick={onClick}>
    + Add Insemination Date
  </Button>
);

export default AddNewDate;
