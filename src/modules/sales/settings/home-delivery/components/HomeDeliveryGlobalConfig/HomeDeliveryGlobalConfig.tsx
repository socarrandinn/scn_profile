import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { HomeDeliveryGlobalForm } from '../HomeDeliveryGlobalForm';
import useHomeDeliveryCreateForm from '../../hooks/useHomeDeliveryCreateForm';

const HomeDeliveryGlobalConfig = () => {
  const { t } = useTranslation('homeDelivery');
  const { onSubmit, control, error, isLoading } = useHomeDeliveryCreateForm();

  return (
    <Form control={control} onSubmit={onSubmit} isLoading={isLoading} size={'small'} id='home-delivery-global-form'>
      <HandlerError error={error} />
      <div className='flex gap-5 mt-2'>
        <HomeDeliveryGlobalForm />
        <LoadingButton variant='contained' loading={isLoading} type='submit' id='home-delivery-global-form'>
          {t('common:save')}
        </LoadingButton>
      </div>
    </Form>
  );
};

export default memo(HomeDeliveryGlobalConfig);
