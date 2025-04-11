import { IconButton } from '@dfl/mui-react-common';
import { Info } from '@mui/icons-material';
import { Divider, Stack, Typography } from '@mui/material';

import { DistributionCenterIcon } from 'modules/inventory/common/components/Icons/DistributionCenterIcon';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { useTranslation } from 'react-i18next';

type Props = {
  distributionCenter: Pick<IDistributionCenters, '_id' | 'name'>;
};
const DispatchDistributionCenterSummary = ({ distributionCenter }: Props) => {
  const { t } = useTranslation('distributionCenters');
  if (!distributionCenter) return <></>;

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        bgcolor: 'background.default',
        alignItems: 'center',
        // justifyContent: 'space-between',
        p: 2,
        gap: 1,
        borderRadius: 2,
      }}
      divider={
        <>
          <Divider flexItem orientation='vertical' sx={{ mx: 2 }} />
        </>
      }
    >
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <IconButton tooltip={t('dispatch:commonSubOrderInDistributionCenter')}>
          <Info />
        </IconButton>
        <DistributionCenterIcon />
        <Stack>
          <Typography fontWeight={600}>{t('distributionCenters:name')}</Typography>
        </Stack>
      </Stack>

      {distributionCenter?.name}
    </Stack>
  );
};

export default DispatchDistributionCenterSummary;
