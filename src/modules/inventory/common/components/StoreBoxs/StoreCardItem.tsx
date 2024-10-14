import { memo, useMemo } from 'react';
import { IWarehouseDistribution } from '../../interfaces/IProductAnalytic';
import { Box, ListItem, ListItemIcon, ListItemText, PaperProps, Stack, Typography } from '@mui/material';
import { PaperContent, TotalDividend } from './common';
import { Trans, useTranslation } from 'react-i18next';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { StoreAreaIcon } from '../Icons/StoreAreaIcon';
import LinearProgressBar from './LinearProgressBar';

type WarehouseCardItemProps = {
  warehouse: IWarehouseDistribution;
  paperProps?: PaperProps;
};

const defaultProps: PaperProps = {
  sx: {
    minHeight: 180,
    // minWidth: 400,
    maxWidth: {
      xs: '100%',
      md: '50%',
      lg: '33.33%',
    },
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
};

const StoreCardItem = ({ warehouse, paperProps = defaultProps }: WarehouseCardItemProps) => {
  const { t } = useTranslation('warehouse');
  const total = useMemo(() => `${warehouse?.total}/${warehouse?.of}`, [warehouse]);
  const noVisible = useMemo(
    () => (warehouse?.notStock !== 0 ? (warehouse?.total / warehouse?.notStock) * 100 : 0),
    [warehouse],
  );
  const hasStock = useMemo(
    () => (warehouse?.hasStock !== 0 ? (warehouse?.total / warehouse?.hasStock) * 100 : 0),
    [warehouse],
  );
  return (
    <PaperContent {...paperProps}>
      <ListItem sx={{ padding: 0, mb: 1 }}>
        <ListItemIcon sx={{ minWidth: 35 }}>
          <StoreAreaIcon />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ fontWeight: 600, fontSize: 15, lineHeight: 1.2 }}
          primary={warehouse?.warehouseName || warehouse?.warehouse}
        />
      </ListItem>
      <Stack gap={{ xs: 1, md: 2 }} flexDirection={{ xs: 'column', md: 'row' }}>
        <Stack gap={1} flexGrow={1} height={'100%'} justifyContent={'end'}>
          <TotalDividend color={'primary'} fontSize={{ xs: 30, md: 44 }}>
            {total}
          </TotalDividend>
          <Box>
            <Typography fontSize={14} fontWeight={600} sx={{ color: '#3E3D3D' }}>
              {t('distribution.productQuantity')}
            </Typography>
            <Coverage coverage={warehouse?.coverage} />
          </Box>
        </Stack>
        <Stack flexGrow={1} gap={{ xs: 1, md: 2 }}>
          <LinearProgress
            title={t('distribution.hasStock')}
            value={hasStock}
            ofProd={`${warehouse?.hasStock}/${warehouse.total}`}
            color='primary'
          />
          <LinearProgress
            title={t('distribution.notVisibles')}
            value={noVisible}
            ofProd={`${warehouse?.notStock}/${warehouse.total}`}
            color='warning'
          />
        </Stack>
      </Stack>
    </PaperContent>
  );
};

export default memo(StoreCardItem);

export const Coverage = ({ coverage }: { coverage: number }) => {
  return (
    <Typography fontSize={13} color={'primary'}>
      <Trans i18nKey={'warehouse:distribution:coverage'} values={{ coverage }} />
    </Typography>
  );
};

type LinearProgressProps = {
  title: string;
  value: number;
  ofProd: string;
  color: 'warning' | 'primary';
};
export const LinearProgress = ({ ofProd, title, value, color }: LinearProgressProps) => {
  return (
    <Stack flexGrow={1} gap={0.5}>
      <Stack width={'100%'} flexDirection={'row'} gap={1} justifyContent={'space-between'} alignItems={'center'}>
        <ListItem sx={{ padding: 0, marginY: 'auto' }}>
          <ListItemIcon sx={{ minWidth: 20, color: 'primary.main' }}>
            <TripOriginIcon color={color} sx={{ fontSize: { xs: 12, md: 14 } }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              lineHeight: 1,
              fontSize: { xs: 12, md: 14 },
              color: (theme) => theme.palette.grey[500],
            }}
            primary={title}
          />
        </ListItem>
        <TotalDividend sx={{ color: `${color}.main` }} fontSize={{ xs: 12, md: 14 }}>
          {ofProd}
        </TotalDividend>
      </Stack>
      <LinearProgressBar value={value} color={color} />
    </Stack>
  );
};
