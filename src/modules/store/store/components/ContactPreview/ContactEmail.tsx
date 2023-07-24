import React, { memo } from 'react'
import List from '@mui/material/List';
import { ListItemDetails } from 'modules/common/components/ListItemDetails';
import { useTranslation } from 'react-i18next';
import { EmailValue } from 'components/libs/EmailValue';
import { IContactInfo } from 'modules/store/store/interfaces/IContactInfo';

type ContactsPreviewProps = {
  contacts: IContactInfo;
}
const ContactsEmail = ({ contacts }: ContactsPreviewProps) => {
  const { t } = useTranslation('emailTypes');
  return (
        <div>
            <List dense>
                {
                    contacts.emails.map((email: any, index: number) => (
                        <ListItemDetails key={index}
                                         secondary={t(email.label)}
                                         primary={<EmailValue value={email.value}/>}
                        />
                    ))
                }
            </List>
        </div>
  );
}

export default memo(ContactsEmail);
