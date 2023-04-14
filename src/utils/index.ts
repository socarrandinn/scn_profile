import { AxiosResponse } from 'axios';
import { SearchResponseType } from '@dfl/react-security';

export const toMetaAndOperator = (filters: any[]) => ({
  type: 'AND',
  filters: filters?.filter((el) => !!el),
});

export const toMetaOrOperator = (filters: any[]) => ({
  type: 'OR',
  filters: filters?.filter((el) => !!el),
});

export const isLightColor = (color: string) => {
  const hex = color.replace('#', '');
  const cR = parseInt(hex.substring(0, 2), 16);
  const cG = parseInt(hex.substring(2, 2 + 2), 16);
  const cB = parseInt(hex.substring(4, 4 + 2), 16);
  const brightness = (cR * 299 + cG * 587 + cB * 114) / 1000;
  return brightness > 155;
};

export const searchResponseAdapter = (
  promise: Promise<AxiosResponse>,
  size: number,
): Promise<SearchResponseType<any>> => {
  return promise.then(({ data: { data, total } }) => {
    const hasMore = data.length === size;
    return { data, total, hasMore };
  });
};
