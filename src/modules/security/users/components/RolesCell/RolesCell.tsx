import { styled } from '@mui/material';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import { RoleChip } from 'modules/security/roles/components/RoleCell/RoleCell';
import { renderTagList } from '@dfl/mui-react-common';
import { IRole } from 'modules/security/roles/interfaces';
import { useMemo } from 'react';

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
  const isProvider = useMemo(() => !!text?.provider, [text]);

  if (!text) return <></>;
  return <RoleChip role={text} bgColor={isProvider ? 'warning' : 'error'} />;
};

export const RolesCell = ({ roles }: { roles: IRoleSetting[] }) => {
  return <RolesCellStyle>{renderTagList(roles, 2, RoleChipCell)}</RolesCellStyle>;
};
