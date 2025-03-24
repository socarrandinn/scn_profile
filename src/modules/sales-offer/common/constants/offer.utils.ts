import { TFunction } from 'i18next';

export const getGroupRulLabel = (sections: boolean[], t: TFunction) => {
  const active = sections?.filter(Boolean)?.length;
  const total = sections?.length;
  return `${active}/${total} ${t('offerOrder:_rule')}`;
};
