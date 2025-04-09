import { memo } from 'react';
import { Chip } from '@mui/material';
import { ReactLink } from '@dfl/react-security';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleAvatar } from 'modules/security/roles/components/RoleAvatar';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';

export type RoleCellProps = {
  role: IRole;
  bgColor?: 'error' | 'warning' | 'info' | undefined;
  route?: string;
};

const RoleCell = ({ role, bgColor }: RoleCellProps) => {
  return (
    <FlexBox alignItems={'center'} gap={1}>
      <IconPreview value={role.icon} size={'small'} bgColor={bgColor || 'error'} />
      <ReactLink to={`${role?._id as string}`} underline={'hover'}>
        {role?.name}
      </ReactLink>
    </FlexBox>
  );
};

export default memo(RoleCell);
