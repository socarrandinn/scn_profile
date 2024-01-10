import { memo } from 'react';
import ContactsEmail from 'modules/common/components/ContactPreview/ContactEmail';
import { useTranslation } from 'react-i18next';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import ContactsPhones from 'modules/common/components/ContactPreview/ContactPhone';
import { IContactInfo } from 'modules/common/interfaces/IContactInfo';
import { Typography } from '@mui/material';

type ContactPreviewProps = {
  contacts: IContactInfo | undefined;
}

const ContactPreview = ({ contacts }: ContactPreviewProps) => {
  const { t } = useTranslation('common');
  return (
      <div>
        <Typography variant={'h3'} > {t('contacts')}</Typography>
          <SubSectionTitle>{t('emails')}</SubSectionTitle>
          {
              contacts ? (<ContactsEmail contacts={contacts } />) : (<></>)
          }
          <SubSectionTitle>{t('phones')}</SubSectionTitle>
          {
              contacts ? (<ContactsPhones contacts={contacts } />) : (<></>)
          }
      </div>
  );
}

export default memo(ContactPreview);
