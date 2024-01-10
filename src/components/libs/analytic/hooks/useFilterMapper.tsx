import { useMemo } from 'react';
import { useSearchParamsChange } from '@dfl/react-security';
import { findProvinceByStateCode } from '@dfl/location';
import isEmpty from 'lodash/isEmpty';

const getName = (value: string | string[] | null | undefined, title: string | undefined = '') => {
  if (!isEmpty(value)) {
    if (Array.isArray(value) && value.length) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return `${title} / ${value.map((e) => findProvinceByStateCode(e)?.name || e)}`;
    }
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `${title} / ${findProvinceByStateCode(value as string)?.name || value}`;
  }
  return title;
};

const useFilterMapper = (filter: any, title?: string, key?: string) => {
  const { value } = useSearchParamsChange(key, true);
  const name = useMemo(() => getName(value, title), [title, value]);
  return {
    name,
  };
};

export { useFilterMapper, getName };
