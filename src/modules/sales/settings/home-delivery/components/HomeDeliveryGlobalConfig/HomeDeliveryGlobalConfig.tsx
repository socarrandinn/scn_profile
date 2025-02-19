import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { HomeDeliveryGlobalForm } from '../HomeDeliveryGlobalForm';
import useHomeDeliveryCreateForm from '../../hooks/useHomeDeliveryCreateForm';

const HomeDeliveryGlobalConfig = ({ disabled }: { disabled?: boolean }) => {
  const { t } = useTranslation('homeDelivery');
  const { onSubmit, control, error, isLoading, watch } = useHomeDeliveryCreateForm();
  console.log(watch());

  return (
    <Form control={control} onSubmit={onSubmit} isLoading={isLoading} size={'small'} id='home-delivery-global-form'>
      <HandlerError error={error} />
      <div className='flex flex-col md:flex-row gap-5 mt-2'>
        <HomeDeliveryGlobalForm disabled={disabled} />
        <LoadingButton
          sx={{ maxHeight: '40px' }}
          variant='contained'
          loading={isLoading}
          type='submit'
          id='home-delivery-global-form'
          disabled={disabled}
        >
          {t('common:save')}
        </LoadingButton>
      </div>
    </Form>
  );
};

export default memo(HomeDeliveryGlobalConfig);
