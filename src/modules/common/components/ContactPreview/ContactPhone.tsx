import React, { memo } from 'react';
import List from '@mui/material/List';
import { ListItemDetails } from 'modules/common/components/ListItemDetails';
import { useTranslation } from 'react-i18next';
import { PhoneValue } from 'components/libs/PhoneValue';
import { IContactInfo } from 'modules/common/interfaces/IContactInfo';

type ContactsPreviewProps = {
  contacts: IContactInfo;
};
const ContactsPhones = ({ contacts }: ContactsPreviewProps) => {
  const { t } = useTranslation('phoneTypes');
  return (
    <div>
      <List dense>
        {contacts.phones.map((phone: any, index: number) => (
          <ListItemDetails key={index} secondary={t(phone.label)} primary={<PhoneValue value={phone.value} />} />
        ))}
      </List>
    </div>
  );
};

export default memo(ContactsPhones);
