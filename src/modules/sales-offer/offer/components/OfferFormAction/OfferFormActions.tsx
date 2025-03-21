import { LoadingButton } from '@mui/lab';
import { Stack, Button } from '@mui/material';
import { t } from 'i18next';

type Props = {
  handleClose: () => void;
  disabled?: boolean;
  isLoading: boolean;
  mb?: number;
  form?: string;
};
const OfferFormActions = ({ handleClose, isLoading, disabled = false, mb, form = 'offer-form' }: Props) => {
  return (
    <Stack flexDirection={'row'} justifyContent={'end'} gap={1} mt={2} mb={mb}>
      <Button variant='grey' onClick={handleClose}>
        {t('common:cancel')}
      </Button>
      <LoadingButton variant='contained' type={'submit'} loading={isLoading} disabled={disabled} form={form}>
        {t('common:save')}
      </LoadingButton>
    </Stack>
  );
};

export default OfferFormActions;
