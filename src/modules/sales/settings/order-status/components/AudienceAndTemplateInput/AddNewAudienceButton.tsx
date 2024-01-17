import { Button, Grid } from '@mui/material';
import { Control, UseFieldArrayAppend, useWatch } from 'react-hook-form';
import { IOrderStatus } from '../../interfaces';

interface IAddNewAudienceButton {
  append: UseFieldArrayAppend<IOrderStatus, 'notification.audience'>;
  control: Control<IOrderStatus, any>;
}

const AddNewAudienceButton = ({ append, control }: IAddNewAudienceButton) => {
  const audienceTargetValues = useWatch({
    control,
    name: 'notification.audience'
  })
  const disableButton = () => {
    return audienceTargetValues.filter((value) => {
      return !value.template || !value.target;
    }).length !== 0
  }
  return (
    <Grid item xs={12} sx={{ marginBottom: '2rem' }}>
      <Button
        sx={{ width: '100%' }}
        onClick={() => {
          append({ target: '', template: '' });
        }}
        disabled={disableButton()}
      >
        Agregar audiencia
      </Button>
    </Grid>
  );
}

export default AddNewAudienceButton
