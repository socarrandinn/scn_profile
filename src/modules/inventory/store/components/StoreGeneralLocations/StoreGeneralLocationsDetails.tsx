import { Grid, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import { findProvinceByStateCode } from '@dfl/location';
import { useTranslation } from 'react-i18next';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { useStoreDetail } from '../../context/StoreContext';
import StoreGeneralLocationsDetailSkeleton from './StoreGeneralLocationsDetailSkeleton';
import { CubanMapByIcon } from 'components/cubanMap';
import { LocationIcon } from 'components/cubanMap/LocationIcon';

const StoreGeneralLocationsDetails = () => {
  const { t } = useTranslation('store');
  const { isLoading, store } = useStoreDetail();
  const states = store?.locations?.[0]?.states
  const locations = useMemo(
    () => states?.map((pv) => findProvinceByStateCode(pv)?.name || pv),
    [findProvinceByStateCode, states],
  );

  const province = useMemo(
    () => findProvinceByStateCode(store?.address?.state as string)?.name || '',
    [findProvinceByStateCode, store?.address?.state],
  );

  if (isLoading) return <StoreGeneralLocationsDetailSkeleton />;

  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid item xs={12} md={4} lg={3} order={{ xs: 2, md: 1 }}>
        <Stack>
          <ListItem>
            <ListItemIcon
              sx={{
                minWidth: { xs: 24, md: 40 },
                color: 'primary.main',
                marginBottom: 'auto',
                mt: { xs: 2, md: 0.5 },
              }}
            >
              <LocationIcon sx={{ fontSize: { xs: 18, md: 28 }, mt: { xs: 0.3, md: 0.6 } }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Stack gap={2}>
                  <Typography
                    lineHeight={'normal'}
                    color={'primary.main'}
                    fontSize={{ xs: 20, md: 32 }}
                    fontWeight={800}
                  >
                    {province}
                  </Typography>
                  <Stack>
                    <Typography fontSize={{ xs: 14, md: 16 }} sx={{ color: (theme) => theme.palette.grey[800] }}>
                      {t('distributionState')}
                    </Typography>
                    {locations?.map((l) => (
                      <ListItem key={l} sx={{ padding: 0, marginY: 'auto' }}>
                        <ListItemIcon sx={{ minWidth: 20, color: 'primary.main' }}>
                          <TripOriginIcon sx={{ fontSize: { xs: 12, md: 14 } }} />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{
                            lineHeight: 1,
                            fontSize: { xs: 12, md: 14 },
                            color: (theme) => theme.palette.grey[500],
                          }}
                          primary={l}
                        />
                      </ListItem>
                    ))}
                  </Stack>
                </Stack>
              }
            />
          </ListItem>
        </Stack>
      </Grid>
      <Grid item xs={12} md={8} xl={6} order={{ xs: 1, md: 2 }}>
        <CubanMapByIcon selectedProvincesIds={states} activeProvincePoint={[store?.address?.state as string]} />
      </Grid>
    </Grid>
  );
};

export default memo(StoreGeneralLocationsDetails);
