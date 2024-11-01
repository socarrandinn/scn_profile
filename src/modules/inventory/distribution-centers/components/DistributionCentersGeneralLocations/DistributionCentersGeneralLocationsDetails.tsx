import { Grid, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import { findProvinceByStateCode } from '@dfl/location';
import { useTranslation } from 'react-i18next';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';
import DistributionCentersGeneralLocationsDetailSkeleton from './DistributionCentersGeneralLocationsDetailSkeleton';
import { LocationIcon } from 'components/cubanMap/LocationIcon';

const DistributionCentersGeneralLocationsDetails = () => {
  const { t } = useTranslation('distributionCenters');
  const { isLoading, distributionCenter } = useDistributionCenterDetail();
  const states = distributionCenter?.locations?.[0]?.states;
  const locations = useMemo(() => states?.map((pv) => findProvinceByStateCode(pv)?.name || pv), [states]);

  const province = useMemo(
    () => findProvinceByStateCode(distributionCenter?.address?.state as string)?.name || '',
    [distributionCenter?.address?.state],
  );

  if (isLoading) return <DistributionCentersGeneralLocationsDetailSkeleton />;

  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid item xs={12}>
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
                    fontSize={{ xs: 18, md: 30 }}
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
    </Grid >
  );
};

export default memo(DistributionCentersGeneralLocationsDetails);
