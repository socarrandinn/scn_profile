import React, { memo } from 'react';
import { IEmployeeContactInfo, ISocialMediaInfo } from 'modules/rrhh/employee/common/interfaces';
import ContactsPhones from 'modules/rrhh/employee/employee-detail/common/components/ContactsPreview/ContactsPhones';
import ContactsEmail from 'modules/rrhh/employee/employee-detail/common/components/ContactsPreview/ContactsEmail';
import { useTranslation } from 'react-i18next';
import ContactSocial from 'modules/rrhh/employee/employee-detail/common/components/ContactsPreview/ContactSocial';
import DetailSectionTitle from 'modules/common/components/Titles/DetailSectionTitle';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';

type ContactsPreviewProps = {
  contacts?: IEmployeeContactInfo;
  social?: ISocialMediaInfo;
  hideSocial?: boolean;
};

const ContactsPreview = ({ contacts, social, hideSocial }: ContactsPreviewProps) => {
  const { t } = useTranslation('employee');
  return (
    <div>
      <DetailSectionTitle>{t('section.contact.title')}</DetailSectionTitle>
      <SubSectionTitle>{t('fields.contacts.phones')}</SubSectionTitle>
      <ContactsPhones contacts={contacts} />
      <SubSectionTitle>{t('fields.contacts.emails')}</SubSectionTitle>
      <ContactsEmail contacts={contacts} />
      {!hideSocial && <ContactSocial social={social} />}
    </div>
  );
};

export default memo(ContactsPreview);
