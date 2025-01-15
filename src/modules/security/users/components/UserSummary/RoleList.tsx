import { memo, useCallback, useMemo } from 'react';
import { Accordion, AccordionDetails, Typography } from '@mui/material';
import RoleItem from './RoleItem';
import { EditOutlined, ExpandMore } from '@mui/icons-material';
import { IconButton } from '@dfl/mui-react-common';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { AccordionSummaryStyled } from './styled';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { IRoleSetting } from '../../interfaces/IRoleSetting';
import { IUser } from '../../interfaces/IUser';

type RoleListProps = {
  roles: IRoleSetting[];
  user: IUser;
  canEdit?: boolean;
  readOnly?: boolean;
};

const ROLE_PRIORITY = {
  [ROLE_TYPE_ENUM.PUBLIC]: 1,
  [ROLE_TYPE_ENUM.ROOT]: 2,
  [ROLE_TYPE_ENUM.LOGISTIC]: 3,
  [ROLE_TYPE_ENUM.PROVIDER]: 4,
};

const RoleList = ({ roles, user, canEdit, ...rest }: RoleListProps) => {
  const { t } = useTranslation('role');
  const navigate = useNavigate();

  // Agrupa y ordena los roles por tipo
  const groupedRoles = useMemo(() => {
    return roles?.reduce<Record<string, IRoleSetting[]>>((acc, role) => {
      const type = role?.type || '';
      if (!acc[type]) acc[type] = [];
      acc[type].push(role);
      return acc;
    }, {});
  }, [roles]);

  const sortedRoleTypes = useMemo(
    () =>
      Object.keys(groupedRoles).sort(
        (a, b) => (ROLE_PRIORITY[a as ROLE_TYPE_ENUM] || 99) - (ROLE_PRIORITY[b as ROLE_TYPE_ENUM] || 99)
      ),
    [groupedRoles]
  );

  const handleEdit = useCallback(
    (type: ROLE_TYPE_ENUM) => {
      navigate(`?roleType=${type}`);
    },
    [navigate]
  );

  return (
    <div className="my-5 mx-[18px]">
      <Typography variant="body1" sx={{ mb: 2 }}>
        {t('currentRoles')}
      </Typography>
      {sortedRoleTypes.map((roleType) => (
        <Accordion
          key={roleType}
          sx={{
            mt: '13px',
            position: 'static',
            boxShadow: '0px 4px 20px 0px rgba(43, 52, 69, 0.15)',
            borderRadius: '6px',
          }}
        >
          <AccordionSummaryStyled id={roleType} expandIcon={<ExpandMore />}>
            <div className="flex ml-2">
              <Typography sx={{ fontSize: '14px', color: '#2B3445', fontWeight: 500 }}>
                {t(`type.${roleType}`)}
              </Typography>
              <Typography sx={{ pl: 0.5 }}>({groupedRoles[roleType].length})</Typography>
            </div>
            {canEdit && (
              <IconButton tooltip={t('users:changeRole')} onClick={() => { handleEdit(roleType as ROLE_TYPE_ENUM); }}>
                <EditOutlined fontSize="small" color="primary" />
              </IconButton>
            )}
          </AccordionSummaryStyled>
          <AccordionDetails>
            {groupedRoles[roleType].map((role) => (
              <RoleItem
                userId={user?._id as string}
                key={role._id}
                role={role}
                roles={roles}
                {...rest} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default memo(RoleList);
