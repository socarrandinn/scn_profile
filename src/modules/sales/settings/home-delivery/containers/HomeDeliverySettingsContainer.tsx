import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { useShippingHomeSettings } from 'modules/sales/settings/home-delivery/contexts';
import { HomeDeliveryActiveCheckbox } from 'modules/sales/settings/home-delivery/components/HomeDeliveryActiveCheckbox';
import { FlexBox } from '@dfl/mui-react-common';
import { FormPaper } from 'modules/common/components/FormPaper';
import { Info } from '@mui/icons-material';
import { InfoIcon } from 'components/icons/InfoIcon';
import { HomeDeliveryGlobalConfig } from '../components/HomeDeliveryGlobalConfig';
import { IDelivery } from 'modules/sales/settings/common/interfaces'
import { LocationsList } from '../pages';

const HomeDeliverySettingsContainer = () => {
  const { t } = useTranslation('homeDelivery');
  const { settings, isLoading } = useShippingHomeSettings();

  return (
    <>
      <FlexBox gap={{ xs: 0, xl: 3 }} flexDirection={{ xs: 'column', xl: 'row' }}>
        <FormPaper
          sx={{ flex: 1 }}
          mbHeader={'0px'}
          title={
            <div className='flex gap-2 items-center mb-2'>
              <Typography variant='h3'>{t('list')}</Typography>
              <HomeDeliveryActiveCheckbox settings={settings} isLoading={isLoading} />
            </div>
          }
        >
          <Typography color={'subtitle2'} sx={{ mb: 1.5 }}>{t('activeDescription')}</Typography>
          <HomeDeliveryGlobalConfig data={settings as IDelivery} />
        </FormPaper>
        <FormPaper sx={{ maxWidth: { xs: undefined, xl: '420px' }, display: 'flex', gap: 2, borderLeft: '8px solid #65BE46', position: 'relative', }}>
          <Info fontSize='small' color='primary' />
          <Typography>{t('description')}</Typography>
          <InfoIcon sx={{ position: 'absolute', bottom: '-4px', right: 0, width: 50, height: 50 }} />
        </FormPaper>
      </FlexBox>

      <LocationsList />
    </>
  );
};

export default memo(HomeDeliverySettingsContainer);
