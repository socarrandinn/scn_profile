/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/25/23
 */
import React, { memo, useMemo } from 'react';
import DetailList from 'components/DetailList';
import { useTranslation } from 'react-i18next';
import { IAddress } from 'modules/common/interfaces';
import {
  findMunicipalityByStateAndMunicipality,
  findProvinceByStateCode,
} from '@dfl/location';

interface ViewModeProps {
  data?: IAddress;
  state?: string;
}

const AddressViewMode = ({ data, state: stateValue }: ViewModeProps) => {
  const { t } = useTranslation(['common', 'employee']);

  const addressData = useMemo(() => {
    const keys = data ? Object.keys(data) : [];
    const values = data ? Object.values(data) : [];

    const state = data?.state || '';

    return keys.map((key, index) => {
      if (key === 'state') {
        return {
          key,
          label: t(`${key}`),
          value: findProvinceByStateCode(values[index] as string)?.name
        }
      }
      if (key === 'municipality') {
        return {
          key,
          label: t(`${key}`),
          value: findMunicipalityByStateAndMunicipality(stateValue || state, values[index] as string)?.name
        }
      }
      return {
        key,
        label: t(`${key}`),
        value: values[index]
      }
    }) || [];
  }, [t, data, findProvinceByStateCode, findMunicipalityByStateAndMunicipality]);

  return (
  // @ts-ignore
      <DetailList data={addressData} />
  );
};

export default memo(AddressViewMode);
