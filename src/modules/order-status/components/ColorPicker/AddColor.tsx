import {
  Dialog,
  Box,
  DialogTitle,
  IconButton,
  Typography,
  DialogContent,
  Slider,
  DialogActions,
  Button,
} from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FlexBox } from '@dfl/mui-react-common';
import AddIcon from '@mui/icons-material/Add';

interface IAddColor {
  onColorSelect: (colors: { rgb: string; hex: string }) => void;
}

const AddColor = ({ onColorSelect }: IAddColor) => {
  const [open, setOpen] = useState(false);
  const [red, setRed] = useState({
    rgb: 0,
    hex: '00',
  });
  const [green, setGreen] = useState({
    rgb: 0,
    hex: '00',
  });
  const [blue, setBlue] = useState({
    rgb: 0,
    hex: '00',
  });

  const toHex = (value: number): string => {
    return value.toString(16).padStart(2, '0');
  };

  const handleSelect = () => {
    onColorSelect({
      rgb: `rgb(${red.rgb},${green.rgb},${blue.rgb})`,
      hex: `#${red.hex}${green.hex}${blue.hex}`,
    });
    setOpen(false);
  };

  return (
    <>
      <Box
        onClick={() => {
          setOpen(!open);
        }}
        component={'div'}
        sx={{
          backgroundColor: '#088c2a',
          minWidth: '2.3rem',
          width: '2.3rem',
          minHeight: '2.3rem',
          height: '2.3rem',
          margin: '.3rem',
          border: 'none',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: '.2s',
          color: '#ddd',
          '&:hover': {
            transform: 'scale(1.1)',
          },
          '&:active': {
            transform: 'scale(1)',
          },
        }}
      >
        <AddIcon />
      </Box>
      <Dialog open={open}>
        <DialogTitle minWidth={400}>
          <Typography> Escoja un color</Typography>

          <IconButton
            aria-label='close'
            onClick={() => {
              setOpen(false);
            }}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {/* color indicator */}
          <FlexBox flexDirection='row' alignItems='center' justifyContent={'space-between'}>
            <Box
              sx={{
                width: '45%',
                height: '5rem',
                backgroundColor: `#${red.hex}${green.hex}${blue.hex}`,
                borderRadius: '10px',
              }}
            />
            <Box sx={{ width: '45%' }}>
              <Typography component='p' marginRight='1rem'>
                R: {red.rgb}
              </Typography>
              <Typography component='p' marginRight='1rem'>
                G: {green.rgb}
              </Typography>
              <Typography component='p' marginRight='1rem'>
                B: {blue.rgb}
              </Typography>
              <Typography component='p' marginRight='1rem'>
                hex: {`#${red.hex}${green.hex}${blue.hex}`}
              </Typography>
            </Box>
          </FlexBox>
          <Box>
            <Slider
              max={255}
              sx={{ color: '#ff0000' }}
              onChange={(_, value) => {
                setRed({
                  rgb: value as number,
                  hex: toHex(value as number),
                });
              }}
            />

            <Slider
              max={255}
              sx={{ color: '#00ff00' }}
              onChange={(_, value) => {
                setGreen({
                  rgb: value as number,
                  hex: toHex(value as number),
                });
              }}
            />

            <Slider
              max={255}
              sx={{ color: '#0000ff' }}
              onChange={(_, value) => {
                setBlue({
                  rgb: value as number,
                  hex: toHex(value as number),
                });
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            sx={{ width: '100%' }}
            onClick={() => {
              handleSelect();
            }}
          >
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddColor;
