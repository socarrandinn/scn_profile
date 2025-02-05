import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { isEmpty } from 'lodash';
import { IAddress } from 'modules/common/interfaces';
import { toAddressString } from 'utils/address';

export const getArrayAddress = (address: IAddress): any[] => {
  if (isEmpty(address)) return [];

  const array = [
    {
      label: 'fields.address.address',
      value: toAddressString(address, ['city', 'state', 'zipCode', 'country']),
    },
    {
      label: 'fields.address.state',
      value: findProvinceByStateCode(address?.state || '')?.name,
    },
    {
      label: 'fields.address.municipality',
      value: findMunicipalityByStateAndMunicipality(address?.state || '', address?.city || '')?.name,
    },
    {
      label: 'fields.address.zipCode',
      value: address?.zipCode || '-',
    },
    {
      label: 'fields.address.country',
      value: address?.country || '-',
    },
    {
      label: 'common:fields.address.houseNumber',
      value: address?.houseNumber || '-',
    },
  ];
  return array;
};

export const getDoubleColumnArrayAddress = (address: IAddress): any[] => {
  if (isEmpty(address)) return [];

  const array = [
    {
      label: 'fields.address.address',
      value: toAddressString(address, ['city', 'state', 'zipCode', 'country']),
      label2: 'fields.address.state',
      value2: findProvinceByStateCode(address?.state || '')?.name,
    },
    {
      label: 'fields.address.municipality',
      value: findMunicipalityByStateAndMunicipality(address?.state || '', address?.city || '')?.name,
      label2: 'fields.address.zipCode',
      value2: address?.zipCode || '-',
    },
    {
      label: 'fields.address.country',
      value: address?.country || '-',
      label2: 'common:fields.address.houseNumber',
      value2: address?.houseNumber || '-',
    },
  ];
  return array;
};
