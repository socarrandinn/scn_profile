import React, { memo } from 'react'
import { IEmployeeContactInfo } from 'modules/store/employee/common/interfaces';
import List from '@mui/material/List';
import { ListItemDetails } from 'modules/common/components/ListItemDetails';
import { useTranslation } from 'react-i18next';
import { EmailValue } from 'components/libs/EmailValue';

type ContactsPreviewProps = {
  contacts?: IEmployeeContactInfo
}

const ContactsEmail = ({ contacts }: ContactsPreviewProps) => {
  const { t } = useTranslation('emailTypes');
  return (
        <div>
            <List dense>
                {
                    contacts?.emails?.map((email, index) => (
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
