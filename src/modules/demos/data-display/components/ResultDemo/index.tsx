import { memo } from 'react';
import { ErrorResult } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import { DemoProps } from '../../../../../types';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';

const ResultErrorDemo = (props: DemoProps) => {
  return (
    <Box>
      <ErrorResult title={'Título'} />
    </Box>
  );
};

ResultErrorDemo.defaultProps = {
  code,
};

export default memo(withCodeSample(ResultErrorDemo));
