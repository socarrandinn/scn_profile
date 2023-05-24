import React, { memo } from 'react';
import { Box, Divider, Stack } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { ICompensation, IEmployee, JobInformation } from 'modules/rrhh/employee/common/interfaces';
import { ContactsPreview } from 'modules/rrhh/employee/employee-detail/common/components/ContactsPreview';
import { CategorySection } from 'modules/rrhh/employee/employee-detail/common/components/CategorySection';
import EmployeeCell from 'modules/rrhh/employee/management/components/EmployeeCell/EmployeeCell';
import { AddressValue } from 'modules/common/components/Address';
import { IAddress } from 'modules/common/interfaces';
import ContactSocial from 'modules/rrhh/employee/employee-detail/common/components/ContactsPreview/ContactSocial';
import { useTranslation } from 'react-i18next';
import { EngagementValue } from 'modules/rrhh/employee/common/components/EngagementValue';
import { HirePreview } from 'modules/rrhh/employee/employee-detail/common/components/HirePreview';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import { ITeam } from 'modules/rrhh/team/interfaces';
import { CompensationCard } from 'modules/rrhh/employee/employee-detail/common/components/CompensationCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Label } from 'modules/common/components/Label';
import { TeamCell } from 'modules/rrhh/team/components/TeamCell';

const EmployeeDetail = () => {
  const { employee, isLoading, error } = useEmployeeDetail();
  const { t } = useTranslation('employee');

  if (isLoading) {
    return <SummaryWithAvatarSkeleton />;
  }
  if (error) {
    return <HandlerError error={error} />;
  }
  const manager = employee?.jobInformation.reported as IEmployee;

  return (
    <Stack p={2} spacing={2}>
      <CategorySection category={employee?.category} />

      <Box>
        <ContactsPreview contacts={employee?.contacts} social={employee?.social} hideSocial={true} />
        <SubSectionTitle>{t('common:address')}</SubSectionTitle>
        <AddressValue
          value={employee?.address as IAddress}
          showStreet={true}
          hideIcon={true}
          textStyle={{
            fontSize: '14px',
            color: 'rgba(0, 0, 0, 0.6)',
            fontStyle: 'normal',
          }}
        />
        <ContactSocial social={employee?.social} className={'mb-2'} />
        <Divider sx={{ margin: '15px 0px' }} />
        <HirePreview hiring={employee?.hiring} />
        <EngagementValue
          className={'mt-4 mb-1'}
          value={employee?.jobInformation?.engagement}
          iconStyle={{
            color: 'rgba(0, 0, 0, 0.6)',
          }}
          textStyle={{
            fontSize: '14px',
            color: 'rgba(0, 0, 0, 0.6)',
            fontStyle: 'normal',
          }}
        />
        <Label
          value={(employee?.jobInformation as JobInformation)?.location?.name || ''}
          icon={LocationOnIcon}
          iconStyle={{
            color: 'rgba(0, 0, 0, 0.6)',
          }}
          textStyle={{
            fontSize: '14px',
            color: 'rgba(0, 0, 0, 0.6)',
            fontStyle: 'normal',
          }}
        />
        {employee?.jobInformation?.team && (
          <Box className={'my-2'}>
            <SubSectionTitle>{t('section.team.title')}:</SubSectionTitle>
            <TeamCell data={employee?.jobInformation?.team as ITeam} link className={'mt-1'} />
          </Box>
        )}
        <EmployeeCell
          avatar={manager?.general?.avatar}
          employeeId={manager?._id}
          name={`${manager?.general?.firstName} ${manager?.general?.lastName}`}
          category={manager?.category?.name}
          titleComponent={<SubSectionTitle sx={{ mb: 1 }}>{t('section.job.reportedTo')}</SubSectionTitle>}
        />
        <Divider sx={{ margin: '15px 0px' }} />
        <CompensationCard value={employee?.compensation as ICompensation} />
      </Box>
    </Stack>
  );
};

export default memo(EmployeeDetail);
