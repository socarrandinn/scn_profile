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

export const copyTextToClipboard = (text: string) => {
  if ('clipboard' in navigator) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve) => document.execCommand('copy', true, text));
};

export const getAbsoluteRoute = (path: string) => {
  const { protocol, host } = window.location || {};
  let result = `${protocol}//${host}`;
  if (path) {
    result += path;
  }
  return result;
};

export const getFullName = (firstName?: string, lastName?: string) => {
  let name = firstName || '';
  if (lastName) {
    name += ` ${lastName}`;
  }
  return name;
};

export const getFullUrl = (path: string) => {
  const cdn = process.env.REACT_APP_CDN_URL || 'http://localhost:9000/ms-auth/api/storage';
  const url = `${cdn}/${path}`;
  return url;
};
