import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import { ReactLink } from '@dfl/react-security';

type DistributionCentersCellProps = {
  name: string;
  distributionCenterId: string;
};

const DistributionCentersCell = ({ name, distributionCenterId }: DistributionCentersCellProps) => {
  return (
    <ReactLink to={`/inventory/distribution-centers/${distributionCenterId}/general`} underline={'hover'}>
      <FlexBox alignItems={'center'} gap={1}>
        <Stack>
          <Typography>{name}</Typography>
        </Stack>
      </FlexBox>
    </ReactLink>
  );
};

export default memo(DistributionCentersCell);
