import { EmptyFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';

export const transformWhitObjectId = (value: any, field: string) => {
  if (Array.isArray(value)) {
    return new OperatorFilter({
      type: 'OR',
      filters: value?.map((v) => new TermFilter({ field, value: v, objectId: true })),
    }).toQuery();
  }
  return new TermFilter({ field, value, objectId: true });
};

export const transformFilterNumber = (value: any, field: string) => {
  if (!value) return new EmptyFilter();
  return new TermFilter({ field, value });
};
