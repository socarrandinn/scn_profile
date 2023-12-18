import { DetailStackItemRecord } from '@dfl/mui-react-common';
import { ISupplier } from '../interfaces';
import { renderContactList } from '../../../../common/components/ContactList/ContactList';

export const SUPPLIER_CONTACT_DETAILS_SUMMARY: DetailStackItemRecord[] = [
  /* {
    label: 'provider:fields:mainPhone',
    render: (provider: ISupplier) => provider?.contacts?.mainPhone,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'provider:fields:mainEmail',
    render: (provider: ISupplier) => provider?.contacts?.mainEmail,
    hideEmpty: true,
    translate: true,
  }, */
  {
    label: 'phones',
    render: (provider: ISupplier) => provider?.contacts?.phones && renderContactList(provider?.contacts?.phones),
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'emails',
    render: (provider: ISupplier) => provider?.contacts?.phones && renderContactList(provider?.contacts?.emails),
    hideEmpty: true,
    translate: true,
  }
];
