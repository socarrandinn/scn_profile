import { memo } from 'react';
import { Skeleton } from '@mui/material';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import { FormPaper } from 'modules/common/components/FormPaper';

const widths = ['50%', '40%', '60%', '45%'];

const OrderInfoSkeleton = ({ row = 4, children }: ChildrenProps & { row?: number }) => {
  const rows = [];
  for (let i = 0; i < row; i++) {
    rows.push(
      <FlexBox gap={3} mb={3} key={i}>
        <Skeleton width={'30%'} />
        <Skeleton animation='wave' width={widths[i % widths.length]} />
      </FlexBox>,
    );
  }
  return (
    <FormPaper nm title={<Skeleton height={34} width={200} />}>
      {children}
      {rows}
    </FormPaper>
  );
};

export default memo(OrderInfoSkeleton);
