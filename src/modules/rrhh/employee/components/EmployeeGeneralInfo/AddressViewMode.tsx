/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/25/23
 */
import React, { memo, useMemo } from 'react';
import DetailList from 'components/DetailList';
import { useTranslation } from 'react-i18next';
import { IAddress } from 'modules/common/interfaces';

interface ViewModeProps {
  data?: IAddress
}

const AddressViewMode = ({ data }: ViewModeProps) => {
  const { t } = useTranslation(['common', 'employee']);

  const addressData = useMemo(() => {
    const keys = data ? Object.keys(data) : [];
    const values = data ? Object.values(data) : [];

    return keys.map((key, index) => {
      return {
        key,
        label: t(`${key}`),
        value: values[index]
      }
    }) || [];
  }, [t, data]);

  return (
  // @ts-ignore
      <DetailList data={addressData} />
  );
};

export default memo(AddressViewMode);
