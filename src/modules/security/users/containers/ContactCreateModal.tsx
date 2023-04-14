import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Grid } from '@mui/material';
import { DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { IShippingContact } from 'modules/security/users/interfaces/IShippingContact';
import { useTranslation } from 'react-i18next';
import useNewContactForm from 'modules/security/users/hooks/useNewContactForm';
import { ContactForm } from 'modules/security/users/components/ContactForm';

type CreateContactModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  initValue?: IShippingContact;
  dataError?: any;
  onClose: () => void;
};
const CreateContactModal = ({
  title = 'shipping.create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: CreateContactModalProps) => {
  const { t } = useTranslation('users');
  const { onSubmit, control, isLoading, error, state, reset } = useNewContactForm(onClose, initValue, true);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'car-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}
        <HandlerError error={error} />
        {
          <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'contact-form'} size={'small'} dark>
            <Grid container columnSpacing={2} rowSpacing={4}>
              <ContactForm state={state} />
            </Grid>
          </Form>
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant='outlined' color={'secondary'}>
          {t('common:cancel')}
        </Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='contact-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(CreateContactModal);
