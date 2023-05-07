/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/25/23
 */
import React, { memo, useMemo } from 'react';
import DetailList from 'components/DetailList';
import { IEmployeeGeneralInfo } from 'modules/rrhh/employee/interfaces';
import { useTranslation } from 'react-i18next';
import { Chip, Stack } from '@mui/material';
import { format } from 'date-fns';

interface Item {
  key: string;
  label: string;
  value: any;
}

function filterByLabel(array: Item[], labels: string[]): Item[] {
  return array.filter((item) => labels.includes(item.key));
}

interface ViewModeProps {
  data?: IEmployeeGeneralInfo;
}

interface TagsProps {
  data?: [string];
}

const Tags = ({ data }: TagsProps) => {
  return (
    <Stack direction='row' spacing={1}>
      {data?.map((item, idx: number) => (
        <Chip key={idx} label={item} />
      ))}
    </Stack>
  );
};

const GeneralViewMode = ({ data }: ViewModeProps) => {
  const { t } = useTranslation('employee');
  const generalData = useMemo(() => {
    const keys = data ? Object.keys(data) : [];
    const values = data ? Object.values(data) : [];

    const items =
      keys.map((key, index) => {
        if (key === 'birthday') {
          return {
            key,
            label: t(`fields.general.${key}`),
            value: format(new Date(values[index]), 'dd/MM/yyyy'),
          };
        }
        if (key === 'diseases' || key === 'allergies') {
          return {
            key,
            label: t(`fields.general.${key}`),
            value: <Tags data={values[index]} />,
          };
        }
        return {
          key,
          label: t(`fields.general.${key}`),
          value: values[index],
        };
      }) || [];
    return filterByLabel(items, [
      'firstName',
      'lastName',
      'birthday',
      'ci',
      'gender',
      'diseases',
      'allergies',
      'notes',
    ]);
  }, [t, data]);

  return (
    // @ts-ignore
    <DetailList data={generalData} />
  );
};

export default memo(GeneralViewMode);
