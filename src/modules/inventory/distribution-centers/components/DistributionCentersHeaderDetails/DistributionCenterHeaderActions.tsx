import { PermissionCheck } from '@dfl/react-security';
import { DISTRIBUTION_CENTER_PERMISSIONS } from '../../constants';
import { Box } from '@mui/material';
import { DistributionCenterDeleteButton, DistributionCenterEditButton } from '../DistributionCenterDetailActions';
import { memo } from 'react';
import { DistributionCenterVisiblePicker } from '../DistributionCenterVisiblePicker';

type ActionsProps = {
  visible: boolean;
  id: string;
};

const Actions = ({ visible, id }: ActionsProps) => {
  return (
    <Box gap={1} display={'flex'} alignItems={'center'}>
      <PermissionCheck permissions={DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_WRITE}>
        <DistributionCenterEditButton />
        <DistributionCenterDeleteButton />
      </PermissionCheck>
      <DistributionCenterVisiblePicker rowId={id} value={visible} button />
    </Box>
  );
};

export default memo(Actions);
