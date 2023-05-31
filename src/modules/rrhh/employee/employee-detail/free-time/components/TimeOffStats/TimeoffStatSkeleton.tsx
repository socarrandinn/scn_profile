import { memo } from 'react';
import { Skeleton } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { FormPaper } from 'modules/common/components/FormPaper';

const TimeOffStatItemSkeleton = () => {
  return (
        <FlexBox flexDirection={'column'} alignItems={'center'} gap={1} flexWrap={'wrap'}>
            <Skeleton variant='rectangular' width={40} height={10}/>
            <Skeleton variant='rectangular' width={100} height={40}/>
            <Skeleton variant='rectangular' width={60} height={10}/>
        </FlexBox>
  );
}

const TimeOffStatSkeleton = () => {
  return (
        <FormPaper>
            <FlexBox gap={'80px'}>
                {Array.from(Array(3).keys()).map((el) => (
                    <TimeOffStatItemSkeleton key={el}/>
                ))}
            </FlexBox>
        </FormPaper>
  )
};

export default memo(TimeOffStatSkeleton);
