import { memo } from 'react';
import ContactsEmail from 'modules/store/store/components/ContactPreview/ContactEmail';
import { useTranslation } from 'react-i18next';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import ContactsPhones from 'modules/store/store/components/ContactPreview/ContactPhone';
import { IContactInfo } from 'modules/store/store/interfaces/IContactInfo';
import { Typography } from '@mui/material';

type ContactPreviewProps = {
  contacts: IContactInfo | undefined;
}

const ContactPreview = ({ contacts }: ContactPreviewProps) => {
  const { t } = useTranslation('store');
  return (
      <div>
        <Typography variant={'h3'} mt={1} > {t('section.contact.title')}</Typography>
          <SubSectionTitle>{t('fields.contacts.emails')}</SubSectionTitle>
          {
              contacts ? (<ContactsEmail contacts={contacts } />) : (<></>)
          }
          <SubSectionTitle>{t('fields.contacts.phones')}</SubSectionTitle>
          {
              contacts ? (<ContactsPhones contacts={contacts } />) : (<></>)
          }
      </div>
  );
}

export default memo(ContactPreview);
