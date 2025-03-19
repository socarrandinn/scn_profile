import { Divider, Stack, Tooltip, Typography } from '@mui/material';
import { IShippingPackage } from '../../interfaces/IOrder';
import { Cancel, CheckCircle } from '@mui/icons-material';
import { RefrigerationIcon } from './icons/RefrigerationIcon';
import { FragileIcon } from './icons/FragileIcon';
import { WeightIcon } from './icons/WeightIcon';
import { VolumeIcon } from './icons/VolumeIcon';
import { useTranslation } from 'react-i18next';

type Props = {
  shippingPackage: IShippingPackage;
};
const OrderShippingPackageInfo = ({ shippingPackage }: Props) => {
  const { t } = useTranslation('order');
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 2,
        alignItems: 'center',
        p: '2px 4px',
        backgroundColor: 'background.default',
        borderRadius: 1,
      }}
      divider={<Divider sx={{ display: { xs: 'none', md: 'block' } }} orientation='vertical' flexItem />}
    >
      {/* Peso */}
      <Tooltip title={t('shippingPackage.weight')}>
        <Stack direction='row' alignItems='center' spacing={1}>
          <WeightIcon fontSize='small' color='secondary' />
          <Typography>{shippingPackage?.weight} kg</Typography>
        </Stack>
      </Tooltip>

      {/* Volumen */}
      <Tooltip title={t('shippingPackage.volume')}>
        <Stack direction='row' alignItems='center' spacing={1}>
          <VolumeIcon fontSize='small' color='secondary' />
          <Typography>{shippingPackage?.volume || 'N/A'}</Typography>
        </Stack>
      </Tooltip>

      {/* Refrigeración */}
      <Tooltip title={t('shippingPackage.needsRefrigeration')}>
        <Stack direction='row' alignItems='center' spacing={0.5}>
          <RefrigerationIcon fontSize='small' />
          {shippingPackage?.needsRefrigeration ? (
            <CheckCircle fontSize='small' sx={{ color: 'primary.main' }} />
          ) : (
            <Cancel fontSize='small' sx={{ color: 'error.main' }} />
          )}
        </Stack>
      </Tooltip>

      {/* Frágil */}
      <Tooltip title={t('shippingPackage.isFragile')}>
        <Stack direction='row' alignItems='center' spacing={0.5}>
          <FragileIcon fontSize='small' />
          {shippingPackage?.isFragile ? (
            <CheckCircle fontSize='small' sx={{ color: 'primary.main' }} />
          ) : (
            <Cancel fontSize='small' sx={{ color: 'error.main' }} />
          )}
        </Stack>
      </Tooltip>
    </Stack>
  );
};

export default OrderShippingPackageInfo;
