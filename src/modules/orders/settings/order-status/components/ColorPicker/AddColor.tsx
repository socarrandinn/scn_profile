import {
  Dialog,
  Box,
  DialogTitle,
  IconButton,
  Typography,
  DialogContent,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FlexBox } from '@dfl/mui-react-common';
import AddIcon from '@mui/icons-material/Add';
import ColorValueIndicator from './ColorValueIndicator';
import ColorIndicator from './ColorIndicator';
import ColorSlider from './ColorSlider';
import ActionButton from './ActionButton';
import { useTranslation } from 'react-i18next';
import useColorPicker from 'modules/orders/settings/order-status/hooks/useColorPicker';

interface IAddColor {
  onColorSelect: (colors: { rgb: string; hex: string }) => void;
}

const AddColor = ({ onColorSelect }: IAddColor) => {
  const { t } = useTranslation()
  const { blue, green, red, setBlue, setGreen, setRed, open, setOpen } = useColorPicker('')

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
          <Typography>{t('orderStatus:colorSelectTitle')}</Typography>
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
            <ColorIndicator color={`#${red.hex}${green.hex}${blue.hex}`} />
            <ColorValueIndicator
              redValue={red.rgb}
              greenValue={green.rgb}
              blueValue={blue.rgb}
              hexValue={`#${red.hex}${green.hex}${blue.hex}`}
            />
          </FlexBox>
          <Box>
            <ColorSlider
              color='#ff0000'
              value={red.rgb}
              onchange={(value) => {
                setRed({
                  rgb: value,
                  hex: toHex(value),
                });
              }}
            />
            <ColorSlider
              color='#00ff00'
              value={green.rgb}
              onchange={(value) => {
                setGreen({
                  rgb: value,
                  hex: toHex(value),
                });
              }}
            />
            <ColorSlider
              color='#0000ff'
              value={blue.rgb}
              onchange={(value) => {
                setBlue({
                  rgb: value,
                  hex: toHex(value),
                });
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <ActionButton label={t('common:add')} handleClick={handleSelect} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddColor;
