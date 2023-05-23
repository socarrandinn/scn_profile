import React, { memo } from 'react';
import { Box, Divider, Stack } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { ICompensation, IEmployee } from 'modules/rrhh/employee/common/interfaces';
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TeamCard } from 'modules/rrhh/employee/employee-detail/common/components/TeamCard';
import { ITeam } from 'modules/rrhh/team/interfaces';
import { CompensationCard } from 'modules/rrhh/employee/employee-detail/common/components/CompensationCard';

const titleSx = {
  fontSize: '14px',
  color: 'rgba(0, 0, 0, 0.6)',
  fontWeight: 'bold',
};

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
        <ContactSocial social={employee?.social} className={'mb-2'} />
        <HirePreview hiring={employee?.hiring} />
        <Divider sx={{ margin: '15px 0px' }} />
        <EngagementValue
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
        <Divider sx={{ margin: '15px 0px', maxWidth: 100 }} />
        <TeamCard value={employee?.jobInformation?.team as ITeam} />
        <EmployeeCell
          avatar={manager?.general?.avatar}
          employeeId={manager?._id}
          name={`${manager?.general?.firstName} ${manager?.general?.lastName}`}
          category={manager?.category?.name}
          titleComponent={<Box sx={{ mb: 1 }}>{t('section.job.reportedTo')}</Box>}
        />
        <Divider sx={{ margin: '15px 0px' }} />
        <CompensationCard value={employee?.compensation as ICompensation} />
      </Box>
    </Stack>
  );
};

export default memo(EmployeeDetail);
