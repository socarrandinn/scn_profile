import { memo, useMemo } from 'react';
import { Chip } from '@mui/material';
import { ReactLink } from '@dfl/react-security';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleAvatar } from 'modules/security/roles/components/RoleAvatar';
import FontIconPicker from 'components/libs/FontIconPicker';
import { FlexBox } from '@dfl/mui-react-common';

type UserCellProps = {
  role: IRole;
};

const RoleCell = ({ role }: UserCellProps) => {
  const icon = useMemo(() => {
    if (role?.icon === 'owner' || role?.icon === 'role4') return 'AssignmentIndIcon';
    if (role?.icon === 'account' || role?.icon === 'role12') return 'AdminPanelSettingsIcon';
    if (role?.icon === 'secure' || role?.icon === 'role9') return 'VerifiedUserIcon';
    return role.icon;
  }, [role?.icon]);

  return (
        <FlexBox alignItems={'center'} gap={1}>
            <FontIconPicker readOnly value={icon} key={icon} size={'small'}/>
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
                <ReactLink to={`/security/roles/${role?._id as string}`} underline={'hover'}>
                    {role?.name}
                </ReactLink>
            }
            variant='outlined'
        />
  );
};

export default memo(RoleCell);
