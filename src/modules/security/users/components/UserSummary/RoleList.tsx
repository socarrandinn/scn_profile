import { memo } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import RoleItem from './RoleItem';
import { getUseRoleId } from 'modules/security/roles/utils/getUseRoleId';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import { useTranslation } from 'react-i18next';
import { Edit, ExpandMore } from '@mui/icons-material';
import { IconButton } from '@dfl/mui-react-common';
import { EditIcon } from 'components/icons/EditIcon';

type RoleListProps = {
  roles: IRoleSetting[];
  userId: string;
  readOnly?: boolean;
};

const RoleList = ({ roles, ...rest }: RoleListProps) => {
  const { t } = useTranslation('role');

  return (
    <div className='my-5 mx-[18px]'>
      <Typography variant='h3' sx={{ mb: 2 }}>{t('currentRoles')}</Typography>
      {roles?.map((role) => (
        <Accordion
          key={role?._id}
          sx={{
            mt: '13px',
            position: 'static',
            boxShadow: '0px 4px 20px 0px rgba(43, 52, 69, 0.15)',
            borderRadius: '6px'
          }}
        >
          <AccordionSummary
            id={role?._id}
            expandIcon={<ExpandMore />}
            sx={{
              minHeight: '47px',
              '&.Mui-expanded': { minHeight: '47px', borderBottom: '1px solid rgba(223, 222, 237, 0.5)', mt: '13px' },
              '.MuiAccordionSummary-content':
                { display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0 },
              '& .MuiAccordionSummary-content.Mui-expanded': {
                margin: 0,
              },
            }}
          >
            <Typography sx={{ fontSize: '14px', color: '#2B3445', fontWeight: 500 }}>
              {t(`type.${role?.type}`)}
            </Typography>
            <IconButton tooltip={t('users:changeRole')}>
              <EditIcon fontSize='small' color='primary' />
            </IconButton>
          </AccordionSummary>
          <AccordionDetails>
            <RoleItem key={getUseRoleId(role)} role={role} roles={roles} {...rest} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default memo(RoleList);
