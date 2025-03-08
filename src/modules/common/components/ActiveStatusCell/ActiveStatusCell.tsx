import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  value: boolean;
};
const ActiveStatusCell = ({ value }: Props) => {
  const { t } = useTranslation('common');
  return <div>{value ? t('yes') : t('no')}</div>;
};

export default ActiveStatusCell;
