import { Button, Grid } from '@mui/material';
import { UseFieldArrayAppend } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ICausesIncidence } from '../../interfaces';
import { Add } from '@mui/icons-material';

interface IAddNewAudienceButton {
  append: UseFieldArrayAppend<ICausesIncidence, 'notification.audience'>;
  disabled: boolean;
}

const AddNewAudienceButton = ({ append, disabled }: IAddNewAudienceButton) => {
  const { t } = useTranslation('orderStatus');

  return (
    <Grid item xs={12} sx={{ marginBottom: '2rem' }}>
      <Button
        fullWidth
        onClick={() => {
          append({ target: [], template: '' });
        }}
        disabled={disabled}
        variant='outlined'
        startIcon={<Add />}
      >
        {t('fields.notification.addAudienceButton')}
      </Button>
    </Grid>
  );
};

export default AddNewAudienceButton;
