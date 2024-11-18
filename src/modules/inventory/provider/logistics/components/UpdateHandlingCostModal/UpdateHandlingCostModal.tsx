import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  ConditionContainer,
  DialogForm,
  Form,
  FormTextField,
  HandlerError,
  LoadingButton,
} from '@dfl/mui-react-common';
import useUpdateManyLogisticsHandlingCost from 'modules/inventory/provider/logistics/hooks/useUpdateManyLogisticsHandlingCost';
import SelectLogistics from './SelectLogistics';
import { IBulkUpdateHandlingCost } from '../../interfaces';

type UpdateHandlingCostModalProps = {
  open: boolean;
  onClose: () => void;
  initValues?: IBulkUpdateHandlingCost;
  loadingInitValues?: boolean;
};

const UpdateHandlingCostModal = ({ open, onClose, initValues, loadingInitValues }: UpdateHandlingCostModalProps) => {
  const { t } = useTranslation('logistics');
  const { isLoading, reset, onSubmit, control, error } = useUpdateManyLogisticsHandlingCost(onClose, initValues);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm open={open} maxWidth='xs' onClose={handleClose} title={t('editHandlingCost')}>
      <DialogContent>
        <HandlerError error={error} />
        <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size='large' id='form-add-roles-to-user'>
          <Stack gap={2} mt={1}>
            <ConditionContainer active={!loadingInitValues}>
              <SelectLogistics name={'logistics'} placeholder={t('list')} multiple />
            </ConditionContainer>
            <FormTextField
              name='handlingCost'
              type='number'
              label={t('fields.handlingCost')}
              inputProps={{ step: 0.01, min: 0 }}
            />
          </Stack>
        </Form>
      </DialogContent>

      <DialogActions>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='form-add-roles-to-user'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(UpdateHandlingCostModal);
