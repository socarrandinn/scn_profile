import { COUNTRIES } from 'constants/COUNTRIES';
import { provinces } from 'modules/common/constants/state-codes';

export const getCountryByCode = (code: string | null) => {
  return COUNTRIES?.find((item) => item?.code === code)?.name;
};

export const getProvinceByCode = (code: number): string | undefined => {
  return provinces?.find((item) => item?.code === code)?.name;
};

export const getMunicipalityName = (provinceCode: number, municipalityCode: number) => {
  const province = provinces.find((p) => p?.code === provinceCode);

  const municipality = province?.city?.find((m) => m.code === municipalityCode);

  return municipality?.name;
};
