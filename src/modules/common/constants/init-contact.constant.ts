import { IContactEmail, IContactPhone } from 'modules/common/interfaces';

export const phoneInitValue: IContactPhone = {
  value: '5354408269',

  label: 'mobile',

  principal: true,
};

export const emailInitValue: IContactEmail = {
  value: 'aasdasdsa@asdasd.com',

  label: 'work',

  principal: true,
};
