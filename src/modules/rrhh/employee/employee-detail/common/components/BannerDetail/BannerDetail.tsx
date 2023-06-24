import { memo } from 'react'
import { Button, Paper, Typography } from '@mui/material';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';
import AvatarEmployee from 'modules/rrhh/employee/employee-detail/common/components/AvatarEmployee/AvatarEmployee';
import { IEmployeeUpdate } from 'modules/rrhh/employee/common/interfaces';
import { FlexBox } from '@dfl/mui-react-common';
import { ButtonLink, PermissionCheck, RouterTab, useSecurity } from '@dfl/react-security';
import { styled } from '@mui/material/styles';
import { IJobPosition } from 'modules/rrhh/settings/job-position/interfaces';
import { employeeTabs } from 'modules/rrhh/employee/employee-detail/common/constants';
import { useTranslation } from 'react-i18next';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/management/constants';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';

export const PaperContainer = styled(Paper)(() => ({
  padding: '20px 20px 0 20px',
  marginBottom: 20
}));

const BannerDetail = () => {
  const { t } = useTranslation('employee');
  const { employee } = useEmployeeDetail();
  const { id, isMe } = useEmployeeDetail();
  const { hasPermission } = useSecurity();
  const heCanChange = hasPermission(EMPLOYEE_PERMISSIONS.EMPLOYEE_WRITE);

  const position = employee?.jobInformation?.position as IJobPosition;
  return (
        <PaperContainer>
            <FlexBox gap={4} flexDirection={{ xs: 'column', md: 'row' }}>
                <div>
                    <AvatarEmployee employee={employee as IEmployeeUpdate} readyOnly={!heCanChange}/>
                </div>
                <FlexBox flexDirection={'column'} gap={1}>
                    <FlexBox gap={1} flexDirection={'column'}>
                        <Typography variant={'h2'}>
                            {employee?.general?.firstName} {employee?.general?.lastName}
                        </Typography>
                        <Typography variant={'body2'}>
                            {position?.name}
                        </Typography>
                    </FlexBox>
                    <FlexBox gap={1} mt={1} mb={2}>
                        <Button variant={'outlined'} size={'small'} disabled>
                            {t('common:export')}
                        </Button>
                        <PermissionCheck permissions={EMPLOYEE_PERMISSIONS.EMPLOYEE_WRITE}>
                            <Button variant={'outlined'} size={'small'} color={'error'} disabled>
                                {t('terminate')}
                            </Button>
                            <ButtonLink variant={'outlined'} size={'small'} to={`/security/users/${id}/security`}>
                                {t('user')}
                            </ButtonLink>
                        </PermissionCheck>
                    </FlexBox>
                    <RouterTab tabs={employeeTabs} prefix={`/rrhh/employees/${isMe ? 'me' : id}`}
                               translationNs={'employee'}/>
                </FlexBox>
            </FlexBox>

        </PaperContainer>
  );
}

export default memo(BannerDetail);
