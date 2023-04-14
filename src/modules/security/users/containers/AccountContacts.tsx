import { useUser } from '@dfl/react-security';
import { memo } from 'react';
import ContactListContainer from './ContactListContainer';

const AccountContacts = () => {
  const { user } = useUser();

  return (
    <>
      <ContactListContainer id={user.id || ''} />
    </>
  );
};

export default memo(AccountContacts);
