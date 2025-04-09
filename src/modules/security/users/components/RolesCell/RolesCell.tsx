import { styled } from '@mui/material';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import { renderTagList } from '@dfl/mui-react-common';
import { IRole } from 'modules/security/roles/interfaces';
import { useMemo } from 'react';
import { RoleChip } from 'modules/security/roles/components/RoleChip';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

const RolesCellStyle = styled('div')(({ theme }) => ({
  '.MuiPaper-root': {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '63px',
    width: '32px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
}));

export const RoleChipCell = ({ text }: { text?: IRole }) => {
  console.log(text);
  const isProvider = useMemo(() => text?.type !== ROLE_TYPE_ENUM.ROOT, [text]);

  const route = useMemo(() => (isProvider ? 'providers' : 'system'), [isProvider]);

  if (!text) return <></>;
  return <RoleChip role={text} bgColor={isProvider ? 'warning' : 'error'} route={route} />;
};

export const RolesUserCell = ({ roles }: { roles: IRoleSetting[] }) => {
  return <RolesCellStyle>{renderTagList(roles, 2, RoleChipCell)}</RolesCellStyle>;
};
