import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { FormPaper } from 'modules/common/components/FormPaper';
import { Info } from '@mui/icons-material';
import { InfoIcon } from 'components/icons/InfoIcon';
import { ExpressDeliveryActiveCheckbox } from '../components/ExpressDeliveryActiveCheckbox';
import { ExpressDeliveryGlobalConfig } from '../components/ExpressDeliveryGlobalConfig';
import { IDelivery } from 'modules/sales/settings/common/interfaces'
import { useShippingExpressSettings } from '../contexts/ShippingExpressDetail';
import { ExpressDeliveryList } from '../pages';

const ExpressDeliverySettingsContainer = () => {
  const { t } = useTranslation('expressDelivery');
  const { settings, isLoading } = useShippingExpressSettings();

  return (
    <>
      <FlexBox gap={{ xs: 0, xl: 3 }} flexDirection={{ xs: 'column', xl: 'row' }}>
        <FormPaper
          sx={{ flex: 1 }}
          mbHeader={'0px'}
          title={
            <div className='flex gap-2 items-center mb-2'>
              <Typography variant='h3'>{t('list')}</Typography>
              <ExpressDeliveryActiveCheckbox settings={settings} isLoading={isLoading} />
            </div>
          }
        >
          <Typography color={'subtitle2'} sx={{ mb: 1.5 }}>{t('activeDescription')}</Typography>
          <ExpressDeliveryGlobalConfig data={settings as IDelivery} />
        </FormPaper>
        <FormPaper sx={{ maxWidth: { xs: undefined, xl: '420px' }, display: 'flex', gap: 2, borderLeft: '8px solid #65BE46', position: 'relative' }}>
          <Info fontSize='small' color='primary' />
          <Typography>{t('description')}</Typography>
          <InfoIcon sx={{ position: 'absolute', bottom: '-4px', right: 0, width: 50, height: 50 }} />
        </FormPaper>
      </FlexBox>

      <ExpressDeliveryList />
    </>
  );
};

export default memo(ExpressDeliverySettingsContainer);
