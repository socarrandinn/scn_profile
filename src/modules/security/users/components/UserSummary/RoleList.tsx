import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, Accordion, AccordionDetails } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import EditOutlined from '@mui/icons-material/EditOutlined';
import RoleItem from './RoleItem';
import { IRoleSetting } from '../../interfaces/IRoleSetting';
import { IUser } from '../../interfaces/IUser';
import { ROLE_PRIORITY, ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { AccordionSummaryStyled } from './styled';
import { IconButton } from '@dfl/mui-react-common';

type RoleListProps = {
  roles: IRoleSetting[];
  user: IUser;
  canEdit?: boolean;
  readOnly?: boolean;
};

const RoleList = ({ roles, user, canEdit, ...rest }: RoleListProps) => {
  const { t } = useTranslation('role');
  const navigate = useNavigate();

  // Agrupar roles por tipo, asegurando que "provider" se agrupe por espacio
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

  // Ordenar claves de los grupos según prioridad de roles
  const sortedGroupKeys = useMemo(() => {
    return Object.keys(groupedRoles).sort((a, b) => {
      const aGroup = groupedRoles[a];
      const bGroup = groupedRoles[b];

      const aType = aGroup[0]?.type;
      const bType = bGroup[0]?.type;

      const aPriority =
        aType === ROLE_TYPE_ENUM.PROVIDER
          ? ROLE_PRIORITY[ROLE_TYPE_ENUM.PROVIDER]
          : ROLE_PRIORITY[aType as ROLE_TYPE_ENUM] || 99;
      const bPriority =
        bType === ROLE_TYPE_ENUM.PROVIDER
          ? ROLE_PRIORITY[ROLE_TYPE_ENUM.PROVIDER]
          : ROLE_PRIORITY[bType as ROLE_TYPE_ENUM] || 99;

      return aPriority - bPriority;
    });
  }, [groupedRoles]);

  // Manejo de navegación asegurando que solo se pase el tipo de rol correcto
  const handleEdit = useCallback((roleType: ROLE_TYPE_ENUM, space?: string) => {
    const params = new URLSearchParams();
    params.set('roleType', roleType);
    if (space) {
      params.set('space', space);
    }
    navigate(`?${params.toString()}`);
  }, [navigate]);

  return (
    <div className="my-5 mx-[18px]">
      <Typography variant="body1" sx={{ mb: 2 }}>
        {t('currentRoles')}
      </Typography>

      {sortedGroupKeys.map((groupKey) => {
        const groupRoles = groupedRoles[groupKey];
        const firstRole = groupRoles[0];

        // Determinar si es un grupo de proveedores y asegurar un roleType válido
        const isProviderGroup = firstRole?.type === ROLE_TYPE_ENUM.PROVIDER;
        const roleType = firstRole?.type as ROLE_TYPE_ENUM; // Asegurar que sea public, provider o admin

        const summaryTitle = isProviderGroup
          ? firstRole?.spaceName
          : t(`type.${roleType}`);

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
                <Typography
                  sx={{ fontSize: '14px', color: '#2B3445', fontWeight: 500 }}
                >
                  {summaryTitle}
                </Typography>
                <Typography sx={{ pl: 0.5 }}>({groupRoles.length})</Typography>
              </div>
              {canEdit && (
                <IconButton
                  tooltip={t('users:changeRole')}
                  onClick={() => { handleEdit(roleType, firstRole?.space); }}
                >
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
