import { memo, useCallback, useMemo } from 'react';
import { Accordion, AccordionDetails, Typography } from '@mui/material';
import RoleItem from './RoleItem';
import { getUseRoleId } from 'modules/security/roles/utils/getUseRoleId';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import { useTranslation } from 'react-i18next';
import { EditOutlined, ExpandMore } from '@mui/icons-material';
import { IconButton } from '@dfl/mui-react-common';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { AccordionSummaryStyled } from './styled';
import { IUser } from '../../interfaces/IUser';
import { useParamsLink } from '@dfl/react-security';
import { useNavigate } from 'react-router';

type RoleListProps = {
  roles: IRoleSetting[];
  user: IUser;
  readOnly?: boolean;
  canEdit?: boolean;
};

const priority = {
  [ROLE_TYPE_ENUM.PUBLIC]: 1,
  [ROLE_TYPE_ENUM.ROOT]: 2,
  [ROLE_TYPE_ENUM.LOGISTIC]: 3,
  [ROLE_TYPE_ENUM.PROVIDER]: 4,
};

const RoleList = ({ roles, canEdit, user, ...rest }: RoleListProps) => {
  const { t } = useTranslation('role');
  const navigate = useNavigate();

  const roleCountByType: any = useMemo(() => {
    return roles?.reduce<Record<string, number>>((acc, role) => {
      const type = role?.type || '';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
      // @ts-ignore
    }, {});
  }, [roles]);

  const sortedRoles = useMemo(() => {
    return [...roles].sort((a, b) => {
      const aPriority = a?.type ? priority[a?.type] : 99;
      const bPriority = b?.type ? priority[b?.type] : 99;
      return aPriority - bPriority;
    });
  }, [roles]);

  const handleEdit = useCallback((type: ROLE_TYPE_ENUM) => {
    navigate(`?roleType=${type}`);
  }, [navigate]);

  return (
    <div className="my-5 mx-[18px]">
      <Typography variant="body1" sx={{ mb: 2 }}>{t('currentRoles')}</Typography>
      {sortedRoles?.map((role: IRoleSetting) => {
        const roleType = role?.type as ROLE_TYPE_ENUM;
        const roleCount = roleCountByType[roleType] || 0;
        return (
          <Accordion
            key={role?._id}
            sx={{
              mt: '13px',
              position: 'static',
              boxShadow: '0px 4px 20px 0px rgba(43, 52, 69, 0.15)',
              borderRadius: '6px',
            }}
          >
            <AccordionSummaryStyled id={role?._id} expandIcon={<ExpandMore />}>
              <div className="flex ml-2">
                <Typography sx={{ fontSize: '14px', color: '#2B3445', fontWeight: 500 }}>
                  {t(`type.${role?.type as ROLE_TYPE_ENUM}`)}
                </Typography>
                <Typography sx={{ pl: 0.5 }}>{`(${roleCount as number})`}</Typography>
              </div>

              {canEdit && (
                <IconButton tooltip={t('users:changeRole')} onClick={() => handleEdit(roleType)}>
                  <EditOutlined fontSize="small" color="primary" />
                </IconButton>
              )}
            </AccordionSummaryStyled>

            <AccordionDetails>
              <RoleItem userId={user?._id as string} key={getUseRoleId(role)} role={role} roles={roles} {...rest} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default memo(RoleList);
