import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { HomeDeliveryGlobalForm } from '../HomeDeliveryGlobalForm';
import { IDelivery } from '../../interfaces';
import useHomeDeliveryCreateGlobalForm from '../../hooks/useHomeDeliveryCreateGlobalForm';

const HomeDeliveryGlobalConfig = ({ data }: { data: IDelivery }) => {
  const { t } = useTranslation('homeDelivery');
  const { onSubmit, control, error, isLoading, formState } = useHomeDeliveryCreateGlobalForm(data);

  return (
    <Form control={control} onSubmit={onSubmit} isLoading={isLoading} size={'small'} id='home-delivery-global-form'>
      <HandlerError error={error} />
      <div className='flex flex-col md:flex-row gap-5 mt-2'>
        <HomeDeliveryGlobalForm disabled={!data?.enabled} />
        <LoadingButton
          sx={{ maxHeight: '40px' }}
          variant='contained'
          loading={isLoading}
          type='submit'
          id='home-delivery-global-form'
          disabled={!data?.enabled || !formState?.isDirty}
        >
          {t('common:save')}
        </LoadingButton>
      </div>
    </Form>
  );
};

export default memo(HomeDeliveryGlobalConfig);
