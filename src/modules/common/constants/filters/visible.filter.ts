import { FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';

export const STATUS: Record<string, string> = {
  ACTIVE: 'true',
  INACTIVE: 'false',
};

export const getVisibleFilter = (field?: string) => ({
  filter: 'common:fields.visible.title',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'visible',
  field: field || 'visible',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: field || 'visible', value });
  },
  options: Object.keys(STATUS).map((key) => ({
    value: STATUS[key],
    translate: true,
    label: `common:fields.visible.${key.toLocaleLowerCase()}`,
  })),
});
