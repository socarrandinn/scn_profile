import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { TagList } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { Box, Chip, Typography } from '@mui/material';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import WarehouseDistributionCenterSkeleton from './WarehouseDistributionCenterSkeleton';
import { StorefrontRounded } from '@mui/icons-material';

const WarehouseDistributionCenter = () => {
  const { t } = useTranslation('warehouse');
  const { warehouse, isLoading } = useWarehouseDetail();

  /*   if (open) {
    return (
      <FormPaper title={t('fields.logistic')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <StoreDetailProviderUpdateContainer
          initValue={{
            _id: warehouse?._id,
            logistic: warehouse?.logistic._id,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  } */

  if (isLoading) {
    return (
      <FormPaper title={t('fields.distributionCenters')} actions={<></>}>
        <WarehouseDistributionCenterSkeleton />
      </FormPaper>
    );
  }

  if (warehouse?.distributionCenters?.length === 0 || !warehouse?.distributionCenters) {
    return (
      <FormPaper title={t('fields.distributionCenters')} actions={<></>}>
        <Typography variant={'body1'}>{t('emptyDistributionCenters')}</Typography>
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('fields.distributionCenters')} actions={<></>}>
      <Box
        sx={{
          '& .MuiStack-root': {
            flexWrap: 'wrap',
            gap: 1,
          },
          '& a': {
            marginLeft: '0 !important',
            '& .MuiChip-root': {
              marginLeft: '0 !important',
            },
          },
        }}
      >
        <TagList
          value={warehouse?.distributionCenters || []}
          limit={10}
          renderTag={(dc) => <DistributionCenter {...{ dc, t }} />}
        />
      </Box>
    </FormPaper>
  );
};

export default memo(WarehouseDistributionCenter);

const DistributionCenter = ({ dc, t }: { dc: IDistributionCenters; t: any }) => {
  return (
    <ReactLink to={`/inventory/distribution-centers/${dc?._id as string}/general/`}>
      <Chip icon={<StorefrontRounded />} label={dc.name} />
    </ReactLink>
  );
};
