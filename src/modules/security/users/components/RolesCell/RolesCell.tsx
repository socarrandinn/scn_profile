import { styled } from '@mui/material';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import { RoleChip } from 'modules/security/roles/components/RoleCell/RoleCell';
import { renderTagList } from '@dfl/mui-react-common';
import { IRole } from 'modules/security/roles/interfaces';

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
  if (!text) return <></>;
  return <RoleChip role={text} />;
};

export const RolesCell = ({ roles }: { roles: IRoleSetting[] }) => (
  <RolesCellStyle>{renderTagList(roles, 2, RoleChipCell)}</RolesCellStyle>
);
