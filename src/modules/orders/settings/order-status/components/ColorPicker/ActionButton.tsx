import { Button } from '@mui/material';
import React from 'react'

interface IActionButton {
  handleClick: () => void,
  label: string
}

const ActionButton = ({ handleClick, label }: IActionButton) => {
  return (
      <Button
        variant='contained'
        sx={{ width: '100%' }}
        onClick={() => {
          handleClick()
        }}
      >
        {label}
      </Button>
  );
}

export default ActionButton
