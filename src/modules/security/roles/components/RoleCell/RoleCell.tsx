import { memo } from 'react';
import { Chip } from '@mui/material';
import { ReactLink } from '@dfl/react-security';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleAvatar } from 'modules/security/roles/components/RoleAvatar';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';

type UserCellProps = {
  role: IRole;
  bgColor?: 'error' | 'warning'
};

const RoleCell = ({ role, bgColor }: UserCellProps) => {
  return (
        <FlexBox alignItems={'center'} gap={1}>
            <IconPreview value={role.icon} size={'small'} bgColor={bgColor || 'error'}/>
            <ReactLink to={`${role?._id as string}`} underline={'hover'}>
                {role.name}
            </ReactLink>
        </FlexBox>
  );
};
export const RoleChip = ({ role }: UserCellProps) => {
  return (
        <Chip
            avatar={<RoleAvatar role={role} size={24}/>}
            label={
                <ReactLink to={`/security/roles/${(role?.role || role?._id) as string}`} underline={'hover'}>
                    {role?.name}
                </ReactLink>
            }
            variant='outlined'
        />
  );
};

export default memo(RoleCell);
