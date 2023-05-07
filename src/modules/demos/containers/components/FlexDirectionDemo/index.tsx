import { memo } from 'react';
import Box from '@mui/material/Box';
import { FlexBox } from '@dfl/mui-react-common';
import { BoxProps } from '@mui/material';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';
import { DemoProps } from '../../../../../types';

const Item = (props: BoxProps) => {
  const { sx, ...other } = props || {};
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
};

const containerStyles = {
  p: 1,
  m: 1,
  bgcolor: 'background.paper',
  borderRadius: 1,
};

const Demo = (props: DemoProps) => {
  return (
    <Box
      sx={{
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <FlexBox flexDirection={'row'} sx={containerStyles}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </FlexBox>
      <FlexBox flexDirection={'row-reverse'} sx={containerStyles}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </FlexBox>
      <FlexBox flexDirection={'column'} sx={containerStyles} alignItems={'flex-start'}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </FlexBox>
      <FlexBox flexDirection={'column-reverse'} sx={containerStyles} alignItems={'flex-start'}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </FlexBox>
    </Box>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(withCodeSample(Demo));
