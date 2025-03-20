import { memo } from 'react';
import { List } from './styled';
import { ISupplierContact } from 'modules/inventory/provider/supplier/interfaces';
import { ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import { CheckCircle } from '@mui/icons-material';

type ContactListProps = {
  contacts: ISupplierContact[];
};

const ContactList = ({ contacts }: ContactListProps) => {
  const { t } = useTranslation('phoneTypes');
  if (isEmpty(contacts)) return <></>;

  return (
    <List dense sx={{ p: 0 }}>
      {contacts?.map((contact) => (
        <ListItem sx={{ p: 0, m: 0 }} key={contact?.value}>
          <ListItemText
            primary={
              <Stack gap={0.5} flexDirection={'row'}>
                <Typography fontWeight={800}>{`${t(contact?.label)}:`}</Typography>
                <Typography variant={'body1'} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {contact?.value}
                  {contact?.principal ? <CheckCircle fontSize='small' color='success' /> : ''}
                </Typography>
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
