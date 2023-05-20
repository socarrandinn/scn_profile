import { memo, useState } from 'react';
import { SkeletonForm } from '@dfl/mui-react-common';
import { useEmployeeDetail } from 'modules/rrhh/employee/management/contexts/EmployeeDetail';
import GeneralInfo from 'modules/rrhh/employee/management/components/EmployeeGeneralInfo/GeneralInfo';
import AddressInfo from 'modules/rrhh/employee/management/components/EmployeeGeneralInfo/AddressInfo';
import ContactsInfo from 'modules/rrhh/employee/management/components/EmployeeGeneralInfo/ContactsInfo';
import SocialMediaInfo from 'modules/rrhh/employee/management/components/EmployeeGeneralInfo/SocialMediaInfo';
import { ViewMode } from 'modules/rrhh/employee/management/interfaces/IViewMode';

const EmployeeGeneralInfo = () => {
  const { isLoading: isLoadingEmployee } = useEmployeeDetail();

  const [viewMode, setViewMode] = useState<ViewMode>({
    general: true,
    address: true,
    contacts: true,
    social: true,
  });

  if (isLoadingEmployee) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }

  return (
    <>
      <GeneralInfo viewMode={viewMode?.general} setViewMode={setViewMode} />

      <AddressInfo viewMode={viewMode?.address} setViewMode={setViewMode} />

      <ContactsInfo viewMode={viewMode?.contacts} setViewMode={setViewMode} />

      <SocialMediaInfo viewMode={viewMode?.social} setViewMode={setViewMode} />
    </>
  );
};

export default memo(EmployeeGeneralInfo);
