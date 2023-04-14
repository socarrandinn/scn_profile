import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindContactsByUser } from '../hooks/useFindContactsByUser';
import { contactColumns } from '../constants/contact.columns';
import ContactEditModal from './ContactEditModal';
import { ContactListToolbar } from '../components/ContactListToolbar';

type ContactListContainerProps = {
  id: string;
};

const ContactListContainer = ({ id }: ContactListContainerProps) => {
  const { isLoading, error, data } = useFindContactsByUser(id);

  return (
    <Box>
      <ContactListToolbar />
      <Table columns={contactColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} />
      <ContactEditModal />
    </Box>
  );
};

export default memo(ContactListContainer);
