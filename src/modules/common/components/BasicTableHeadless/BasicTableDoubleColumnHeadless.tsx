import { memo, ReactNode } from 'react';
import BasicTableHeadless, { BasicTableProps } from './BasicTableHeadless';
import { doubleSimpleColumns } from 'modules/common/constants/simple.columns';
import { useMediaQuery, useTheme } from '@mui/material';

type BasicTableDoubleColumnHeadlessProps = {
  doubleColumnData: any[];
  responsiveData: any[];
  responsiveComponent?: ReactNode;
};
const BasicTableDoubleColumnHeadless = ({
  ...props
}: Omit<BasicTableProps, 'data'> & BasicTableDoubleColumnHeadlessProps) => {
  const { doubleColumnData, responsiveData, responsiveComponent, ...rest } = props;
  const theme = useTheme();
  const isResp = useMediaQuery(theme.breakpoints.down('md'));

  if (isResp) {
    return (
      <>
        {responsiveComponent || (
          <BasicTableHeadless
            columns={props.columns}
            data={responsiveData}
            isLoading={props.isLoading}
            error={props.error}
            minWidth={props.minWidth}
          />
        )}
      </>
    );
  }

  return (
    <BasicTableHeadless
      sxProps={{
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
