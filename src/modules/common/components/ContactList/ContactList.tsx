import { memo, useMemo } from 'react';
import { List } from './styled';
import { ISupplierContact } from 'modules/inventory/provider/supplier/interfaces';
import { ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';

type ContactListProps = {
  contacts: ISupplierContact[];
};

const ContactList = ({ contacts }: ContactListProps) => {
  const { t } = useTranslation('phoneTypes');
  const orderList = useMemo(
    () =>
      contacts?.sort(function (a, b) {
        return a.principal === b.principal ? 0 : a.principal ? -1 : 1;
      }),
    [contacts],
  );
  if (isEmpty(contacts)) return <></>;

  return (
    <List>
      {orderList?.map((contact) => (
        <ListItem key={contact?.value}>
          <ListItemText
            primary={
              <Stack gap={0.5} flexDirection={'row'}>
                <Typography fontWeight={800}>{`${t(contact?.label)}:`}</Typography>
                <Typography>{contact?.value}</Typography>
              </Stack>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default memo(ContactList);

export const renderContactList = (contacts: ISupplierContact[]) => {
  return <ContactList contacts={contacts} />;
};
