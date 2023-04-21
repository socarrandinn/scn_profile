import { IContactEmail, IContactPhone } from 'modules/common/interfaces';

export const phoneInitValue: IContactPhone = {
  value: 'movil',

  label: '',

  principal: true,
};

export const emailInitValue: IContactEmail = {
  value: '',

  label: 'work',

  principal: true,
};
