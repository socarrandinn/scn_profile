import { memo } from 'react'
import { Button, Paper, Typography } from '@mui/material';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';
import AvatarEmployee from 'modules/rrhh/employee/employee-detail/common/components/AvatarEmployee/AvatarEmployee';
import { IEmployeeUpdate } from 'modules/rrhh/employee/common/interfaces';
import { FlexBox } from '@dfl/mui-react-common';
import { ButtonLink, RouterTab } from '@dfl/react-security';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { IJobPosition } from 'modules/rrhh/settings/job-position/interfaces';
import { employeeTabs } from 'modules/rrhh/employee/employee-detail/common/constants';
import { useTranslation } from 'react-i18next';

export const PaperContainer = styled(Paper)(() => ({
  padding: '20px 20px 0 20px',
  marginBottom: 20
}));

const BannerDetail = () => {
  const { t } = useTranslation('employee');
  const { employee } = useEmployeeDetail();
  const { id } = useParams();
  const position = employee?.jobInformation?.position as IJobPosition;
  return (
        <PaperContainer>
            <FlexBox gap={4} flexDirection={{ xs: 'column', md: 'row' }}>
                <div>
                    <AvatarEmployee employee={employee as IEmployeeUpdate}/>
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
                        <Button variant={'outlined'} size={'small'} color={'error'} disabled>
                            {t('terminate')}
                        </Button>
                        <ButtonLink variant={'outlined'} size={'small'} to={`/security/users/${id as string}/security`}>
                            {t('user')}
                        </ButtonLink>
                    </FlexBox>
                    <RouterTab tabs={employeeTabs} prefix={`/rrhh/employees/${id as string}`}
                               translationNs={'employee'}/>
                </FlexBox>
            </FlexBox>

        </PaperContainer>
  );
}

export default memo(BannerDetail);
