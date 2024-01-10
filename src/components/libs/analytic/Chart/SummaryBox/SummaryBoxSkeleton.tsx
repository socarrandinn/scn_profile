import { memo } from 'react';
import { BoxProps, Skeleton } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { CounterBoxS } from '../../CounterBox/CounterBox';

type SummaryBoxProps = {
  color?: 'warning' | 'secondary' | 'primary' | 'error' | 'success' | 'info';
  values?: Array<{ label: string; value?: number }>;
  currency?: boolean;
  variant?: 'outlined' | 'contented';
} & BoxProps;

const direction: any = {
  xs: 'column',
  md: 'row',
};

const paper = { display: 'flex', alignItems: 'center', width: '100%', minHeight: 183 };

const SummaryBoxSkeleton = ({ values = [], variant = 'outlined', color, ...props }: SummaryBoxProps) => {
  return (
    <FlexBox {...props}>
      <CounterBoxS sx={paper} variant={variant} color={color}>
        <FlexBox alignItems={{ md: 'center' }} flexWrap={'wrap'} flexDirection={direction}>
          <FlexBox flexDirection={'column'} mr={2}>
            <Skeleton width={'220px'} />
            <Skeleton width={'300px'} height={46} sx={{ mt: 2 }} />
          </FlexBox>
          <FlexBox flexWrap={'wrap'} mt={{ xs: 2, md: 0 }}>
            {values?.map((value, key) => {
              return <Skeleton key={key} variant='circular' width={115} height={115} sx={{ ml: 2 }} />;
            })}
          </FlexBox>
        </FlexBox>
      </CounterBoxS>
    </FlexBox>
  );
};

export default memo(SummaryBoxSkeleton);
