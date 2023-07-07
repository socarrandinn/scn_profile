import { memo } from 'react';
import ContactsEmail from 'modules/store/store/components/ContactPreview/ContactEmail';
import { useTranslation } from 'react-i18next';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import DetailSectionTitle from 'modules/common/components/Titles/DetailSectionTitle';
import ContactsPhones from 'modules/store/store/components/ContactPreview/ContactPhone';
import { IContactInfo } from 'modules/store/store/interfaces/IContactInfo';

type ContactPreviewProps = {
  contacts: IContactInfo | undefined;
}

const ContactPreview = ({ contacts }: ContactPreviewProps) => {
  const { t } = useTranslation('store');
  return (
      <div>
          <DetailSectionTitle>{t('section.contact.title')}</DetailSectionTitle>
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
