import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { HomeDeliveryGlobalForm } from '../HomeDeliveryGlobalForm';
import { IDelivery } from 'modules/sales/settings/common/interfaces'
import useHomeDeliveryCreateGlobalForm from '../../hooks/useHomeDeliveryCreateGlobalForm';
import { ExpressDeliveryGlobalForm } from '../ExpressDeliveryGlobalForm';
import { Typography } from '@mui/material';
import { IphoneSwitchField } from 'modules/common/components/IphoneSwitchField';

const HomeDeliveryGlobalConfig = ({ data }: { data: IDelivery }) => {
  const { t } = useTranslation('homeDelivery');
  const { onSubmit, control, error, isLoading, formState, watch } = useHomeDeliveryCreateGlobalForm(data);

  return (
    <Form control={control} onSubmit={onSubmit} isLoading={isLoading} size={'small'} id='home-delivery-global-form' formState={formState} watch={watch}>
      <HandlerError error={error} />
      <div className='flex flex-col md:flex-row gap-5 mt-2'>
        <HomeDeliveryGlobalForm disabled={!data?.enabled || isLoading} />
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
      <div className='mt-3'>
        <div className='flex items-center gap-6 my-4'>
          <Typography sx={{ fontSize: '15px' }}>{t('expressDelivery')}</Typography>
          <IphoneSwitchField label={undefined} name='hasExpress' disabled={!data?.enabled} />
        </div>
      </div>
      <ExpressDeliveryGlobalForm disabled={!data?.enabled || isLoading} />
    </Form>
  );
};

export default memo(HomeDeliveryGlobalConfig);
