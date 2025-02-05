import { memo, useCallback, useMemo } from 'react';
import { Accordion, AccordionDetails, Typography } from '@mui/material';
import RoleItem from './RoleItem';
import { EditOutlined, ExpandMore } from '@mui/icons-material';
import { IconButton } from '@dfl/mui-react-common';
import { ROLE_PRIORITY, ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
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

const RoleList = ({ roles, user, canEdit, ...rest }: RoleListProps) => {
  const { t } = useTranslation('role');
  const navigate = useNavigate();

  const groupedRoles = useMemo(() => {
    return roles?.reduce<Record<string, IRoleSetting[]>>((acc, role) => {
      if (role?.type === ROLE_TYPE_ENUM.PROVIDER && role.space) {
        const spaceKey = role.space;
        if (!acc[spaceKey]) acc[spaceKey] = [];
        acc[spaceKey].push(role);
      } else {
        const key = role?.type || '';
        if (!acc[key]) acc[key] = [];
        acc[key].push(role);
      }
      return acc;
    }, {});
  }, [roles]);

  const sortedGroupKeys = useMemo(() => {
    return Object.keys(groupedRoles).sort((a, b) => {
      const aGroup = groupedRoles[a];
      const bGroup = groupedRoles[b];

      const aType = aGroup[0]?.type;
      const bType = bGroup[0]?.type;

      const aPriority = aType === ROLE_TYPE_ENUM.PROVIDER ? ROLE_PRIORITY[ROLE_TYPE_ENUM.PROVIDER] : (ROLE_PRIORITY[aType as ROLE_TYPE_ENUM] || 99);
      const bPriority = bType === ROLE_TYPE_ENUM.PROVIDER ? ROLE_PRIORITY[ROLE_TYPE_ENUM.PROVIDER] : (ROLE_PRIORITY[bType as ROLE_TYPE_ENUM] || 99);

      return aPriority - bPriority;
    });
  }, [groupedRoles]);

  const handleEdit = useCallback((key: string) => {
    navigate(`?roleType=${key}`);
  }, [navigate]);

  return (
    <div className="my-5 mx-[18px]">
      <Typography variant="body1" sx={{ mb: 2 }}>
        {t('currentRoles')}
      </Typography>

      {sortedGroupKeys.map((groupKey) => {
        const groupRoles = groupedRoles[groupKey];
        const firstRole = groupRoles[0];

        const isProviderGroup = firstRole?.type === ROLE_TYPE_ENUM.PROVIDER;
        const summaryTitle = isProviderGroup
          ? firstRole?.spaceName
          : t(`type.${groupKey}`);

        return (
          <Accordion
            key={groupKey}
            sx={{
              mt: '13px',
              position: 'static',
              boxShadow: '0px 4px 20px 0px rgba(43, 52, 69, 0.15)',
              borderRadius: '6px',
            }}
          >
            <AccordionSummaryStyled id={groupKey} expandIcon={<ExpandMore />}>
              <div className="flex ml-2">
                <Typography sx={{ fontSize: '14px', color: '#2B3445', fontWeight: 500 }}>
                  {summaryTitle}
                </Typography>
                <Typography sx={{ pl: 0.5 }}>
                  ({groupRoles.length})
                </Typography>
              </div>
              {canEdit && (
                <IconButton tooltip={t('users:changeRole')} onClick={() => { handleEdit(groupKey); }}>
                  <EditOutlined fontSize="small" color="primary" />
                </IconButton>
              )}
            </AccordionSummaryStyled>

            <AccordionDetails>
              {groupRoles?.map((role) => (
                <RoleItem
                  userId={user?._id as string}
                  key={role?._id}
                  role={role}
                  roles={roles}
                  {...rest}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default memo(RoleList);
