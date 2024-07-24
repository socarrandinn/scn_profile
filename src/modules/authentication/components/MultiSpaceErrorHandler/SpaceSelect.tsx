import { memo, useEffect } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Avatar, Box, Collapse, IconButton, ListItemAvatar, ListItemText, Theme, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from '@mui/system/colorManipulator';

type SpaceSelectProps = {
  spaces: any[];
  error: any;
  setValue: (field: string, value: any) => void;
};

const getOptionLabel = (option: any) => option.name;
const isOptionEqualToValue = (option: any, value: any) => option?.identifier === value?.identifier;

const SpaceSelect = ({ spaces, setValue, error }: SpaceSelectProps) => {
  const { t } = useTranslation('authentication');
  const { isOpen, onOpen, onClose } = useToggle(true);

  useEffect(() => {
    onOpen();
  }, [error, onOpen]);

  const handleClose = () => {
    setValue('space', null);
    onClose();
  };

  return (
    <Collapse in={isOpen}>
      <Box
        sx={{
          backgroundColor: (theme: Theme) => lighten(theme.palette?.warning?.light || '#fff4e5', 0.9),
          pt: 6,
          pb: 2,
          px: 2,
          position: 'relative',
        }}
      >
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 4,
            // color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          <FormSelectAutocompleteField
            name={'space'}
            options={spaces}
            fullWidth
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
            inputProps={{
              placeholder: t('selectSpace'),
            }}
            required
            renderOption={(props, option) => (
              <li {...props} key={option._id}>
                <ListItemAvatar>
                  <Avatar alt={option.name} src={option.logo} />
                </ListItemAvatar>

                <ListItemText primary={option.name} secondary={option.identifier} />
              </li>
            )}
          />
        </Box>
        <Typography mt={1}>{t('multiSpace')}</Typography>
      </Box>
    </Collapse>
  );
};

export default memo(SpaceSelect);
