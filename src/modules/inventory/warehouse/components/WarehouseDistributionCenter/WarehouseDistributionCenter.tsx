import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { TagList } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { Alert, Chip, Divider, Stack, Typography } from '@mui/material';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import WarehouseDistributionCenterSkeleton from './WarehouseDistributionCenterSkeleton';
import { DistributionCenterIcon } from 'modules/inventory/common/components/Icons/DistributionCenterIcon';
import { useToggle } from '@dfl/hook-utils';
import WarehouseAddDistributionCentersModal from '../../containers/WarehouseAddDistributionCentersModal';
import { AddButton } from '@dfl/mui-admin-layout';

const WarehouseDistributionCenter = () => {
  const { t } = useTranslation('warehouse');
  const { warehouse, isLoading } = useWarehouseDetail();

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
        <Stack gap={1}>
          <AddDistributionCenter />
          <Alert severity='warning'>
            <Typography variant={'body1'}>{t('emptyDistributionCenters')}</Typography>
          </Alert>
        </Stack>
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('fields.distributionCenters')} actions={<></>}>
      <Stack
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
        gap={2}
        divider={<Divider flexItem />}
      >
        <AddDistributionCenter />
        <TagList
          value={warehouse?.distributionCenters || []}
          limit={10}
          renderTag={(dc) => <DistributionCenter {...{ dc, t }} />}
        />
      </Stack>
    </FormPaper>
  );
};

export default memo(WarehouseDistributionCenter);

const DistributionCenter = ({ dc, t }: { dc: IDistributionCenters; t: any }) => {
  return (
    <ReactLink to={`/inventory/distribution-centers/${dc?._id as string}/general/`}>
      <Chip
        sx={{
          '.MuiChip-label': {
            padding: '0 12px 0 4px',
          },
        }}
        icon={<DistributionCenterIcon sx={{ ml: 1 }} fontSize='small' color='primary' />}
        label={dc.name}
      />
    </ReactLink>
  );
};

const AddDistributionCenter = () => {
  const { t } = useTranslation('distributionCenters');
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { warehouseId } = useWarehouseDetail();
  return (
    <>
      <AddButton action={onOpen}>{t('add')}</AddButton>

      <WarehouseAddDistributionCentersModal
        onClose={onClose}
        open={isOpen}
        title='add'
        initValue={{
          warehouses: [warehouseId],
          distributionCenter: null,
        }}
      />
    </>
  );
};
