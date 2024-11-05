import { memo } from 'react';
import BasicTableHeadless, { BasicTableProps } from './BasicTableHeadless';
import { doubleSimpleColumns } from 'modules/common/constants/simple.columns';
import { useMediaQuery, useTheme } from '@mui/material';

type BasicTableDoubleColumnHeadlessProps = {
  doubleColumnData: any[];
  responsiveData: any[];
};
const BasicTableDoubleColumnHeadless = ({
  ...props
}: Omit<BasicTableProps, 'data'> & BasicTableDoubleColumnHeadlessProps) => {
  const { doubleColumnData, responsiveData, ...rest } = props;
  const theme = useTheme();
  const isResp = useMediaQuery(theme.breakpoints.down('md'));

  if (isResp) {
    return (
      <BasicTableHeadless
        columns={props.columns}
        data={responsiveData}
        isLoading={props.isLoading}
        error={props.error}
      />
    );
  }

  return (
    <BasicTableHeadless
      sxProps={{
        '& .MuiTableCell-root:nth-of-type(3)': {
          borderLeft: '1px solid #ccc',
        },
        '&  .MuiTableCell-root': {
          borderBottom: 'none',
        },
      }}
      {...rest}
      columns={doubleSimpleColumns}
      data={doubleColumnData}
    />
  );
};

export default memo(BasicTableDoubleColumnHeadless);
