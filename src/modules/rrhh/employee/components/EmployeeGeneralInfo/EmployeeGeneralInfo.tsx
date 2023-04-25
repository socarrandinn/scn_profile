import { memo, useCallback, useState } from 'react';
import { Form, HandlerError, SkeletonForm } from '@dfl/mui-react-common';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';
import { useEmployeeDetail } from 'modules/rrhh/employee/contexts/EmployeeDetail';
import { useSecurity } from '@dfl/react-security';
import useEmployeePersonalUpdateForm from 'modules/rrhh/employee/hooks/useEmployeePersonalUpdateForm';
import GeneralInfo from 'modules/rrhh/employee/components/EmployeeGeneralInfo/GeneralInfo';
import AddressInfo from 'modules/rrhh/employee/components/EmployeeGeneralInfo/AddressInfo';
import ContactsInfo from 'modules/rrhh/employee/components/EmployeeGeneralInfo/ContactsInfo';

type ViewMode = {
  general: boolean,
  address: boolean,
  contacts: boolean
}

const EmployeeGeneralInfo = () => {
  const { employee, isLoading: isLoadingEmployee } = useEmployeeDetail();
  const { hasPermission } = useSecurity();

  const [viewMode, setViewMode] = useState<ViewMode>(
    {
      general: true,
      address: true,
      contacts: true
    }
  );

  const { control, onSubmit, isLoading, error } = useEmployeePersonalUpdateForm(employee, setViewMode);

  const onChangeViewMode = useCallback((section: string, value: boolean) => {
    setViewMode((prev) => ({ ...prev, [section]: value }));
  }, []);

  if (isLoadingEmployee) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }

  return (
    <>
      <HandlerError error={error} errors={ACCOUNT_ERRORS} />
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control} readOnly={!hasPermission('USER_ADMIN')}>

          <GeneralInfo
            data={employee?.general}
            viewMode={viewMode?.general}
            onChangeViewMode={onChangeViewMode}
            isLoading={isLoading}
          />

          <AddressInfo
              data={employee?.address}
              viewMode={viewMode?.address}
              onChangeViewMode={onChangeViewMode}
              isLoading={isLoading}
          />

          <ContactsInfo
              data={employee?.contacts}
              viewMode={viewMode?.contacts}
              onChangeViewMode={onChangeViewMode}
              isLoading={isLoading}
          />

      </Form>
    </>
  );
};

export default memo(EmployeeGeneralInfo);
