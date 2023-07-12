import { memo, useState } from 'react';
import { SkeletonForm } from '@dfl/mui-react-common';
import { useEmployeeDetail } from 'modules/store/employee/employee-detail/common/context/EmployeeDetail';
import GeneralInfo from 'modules/store/employee/employee-detail/general/components/EmployeeGeneralInfo/GeneralInfo';
import AddressInfo from 'modules/store/employee/employee-detail/general/components/EmployeeGeneralInfo/AddressInfo';
import ContactsInfo from 'modules/store/employee/employee-detail/general/components/EmployeeGeneralInfo/ContactsInfo';
import SocialMediaInfo from 'modules/store/employee/employee-detail/general/components/EmployeeGeneralInfo/SocialMediaInfo';
import { ViewMode } from 'modules/store/employee/common/interfaces/IViewMode';

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
