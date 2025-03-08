import { ReactLink } from '@dfl/react-security';
import { Avatar, Stack } from '@mui/material';
import { TransTypography } from 'components/TransTypography';
import { DistributionCenterIcon } from 'modules/inventory/common/components/Icons/DistributionCenterIcon';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { memo } from 'react';

const OrderDistributionCenter = ({ distributionCenter }: { distributionCenter: IDistributionCenters }) => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
      <Avatar>
        <DistributionCenterIcon />
      </Avatar>
      <Stack>
        <Stack flexDirection={'row'} gap={0.5}>
          <TransTypography fontWeight={600} message='subOrder:details.distributionCenter' />
          <ReactLink to={`/inventory/distribution-centers/${distributionCenter?._id as string}/general`}>
            {distributionCenter?.name}
          </ReactLink>
        </Stack>
        <Stack flexDirection={'row'} gap={0.5}>
          <TransTypography fontWeight={600} message='subOrder:details.logistic' />
          <ReactLink to={`/inventory/distribution-centers/${distributionCenter?.logistic?._id as string}/general`}>
            {distributionCenter?.logistic?.name}
          </ReactLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default memo(OrderDistributionCenter);
