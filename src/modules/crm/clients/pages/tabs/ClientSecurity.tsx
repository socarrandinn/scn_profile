import { memo } from 'react';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import RetypePassword from 'modules/security/users/components/UserSecurityInfo/RetypePassword';
import { useClientDetails } from '../../context/ClientDetailsContext';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import UserRoleInfo from 'modules/security/users/components/UserSummary/UserRoleInfo';
import { Divider } from '@mui/material';
import { UserActions } from 'modules/security/users/components/UserActions';
import { FormPaper } from 'modules/common/components/FormPaper';

const ClientSecurity = () => {
  const { client, isLoading, setUser } = useClientDetails();

  return (
    <DetailLayout mb={3}>
      <DetailSummary>
        <UserRoleInfo isLoading={isLoading} user={client} />
        <Divider />
        <UserActions user={client as IUser} isLoading={isLoading} setUser={setUser} />
      </DetailSummary>
      <DetailContent ghost>
        <FormPaper nm>
          <RetypePassword user={client as IUser} />
        </FormPaper>
      </DetailContent>
    </DetailLayout>
  );
};

export default memo(ClientSecurity);
