import { memo } from 'react';
import BasicTableHeadless, { BasicTableProps } from './BasicTableHeadless';
import { Stack, useMediaQuery, useTheme } from '@mui/material';

type BasicMultipleTableHeadlessProps = BasicTableProps & {
  columnsLabelKeys: string[][];
};

const BasicMultipleTableHeadless = ({ columnsLabelKeys, data, ...props }: BasicMultipleTableHeadlessProps) => {
  const theme = useTheme();
  const rest = useMediaQuery(theme.breakpoints.down('md'));
  const sectionedData = columnsLabelKeys.map((keys) => {
    return keys.map((key) => {
      const foundData = data.find((item) => item.label === key);
      return foundData ? { label: key, value: foundData.value } : { label: key, value: null };
    });
  });

  if (rest) {
    return <BasicTableHeadless columns={props.columns} data={data} isLoading={props.isLoading} error={props.error} />;
  }

  return (
    <Stack width={'100%'} flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 1, md: 3 }} sx={{ overflowX: 'auto' }}>
      {sectionedData?.map((sectionData, index) => (
        <BasicTableHeadless
          key={index}
          columns={props.columns}
          data={sectionData}
          isLoading={props.isLoading}
          error={props.error}
        />
      ))}
    </Stack>
  );
};

export default memo(BasicMultipleTableHeadless);
