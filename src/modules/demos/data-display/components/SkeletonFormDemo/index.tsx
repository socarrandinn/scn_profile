import { memo, useState } from 'react';
import { Box } from '@mui/material';
import { FlexBox, SkeletonForm, TextField } from '@dfl/mui-react-common';
import { DemoProps } from '../../../../../types';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';

const Demo = (props: DemoProps) => {
  const [itemsCount, setItemsCount] = useState(3);

  return (
    <FlexBox flexDirection={'column'} gap={4} alignItems={'center'} justifyContent={'center'}>
      <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <TextField
          sx={{ minWidth: 150 }}
          label={'Items to show'}
          value={itemsCount}
          type={'number'}
          inputProps={{ min: 3, max: 10 }}
          onChange={(event) => {
            setItemsCount(+event?.target?.value);
          }}
        />
      </FlexBox>
      <Box width={'100%'}>
        <SkeletonForm numberItemsToShow={itemsCount} />
      </Box>
    </FlexBox>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(withCodeSample(Demo));
