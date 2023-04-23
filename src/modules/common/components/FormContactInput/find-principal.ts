import { IContactCommon } from 'modules/common/interfaces/contact-common';

export const findPrincipal = (contacts: IContactCommon[]) => contacts.find((contact) => contact.principal);
