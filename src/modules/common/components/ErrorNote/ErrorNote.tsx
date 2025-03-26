/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Typography } from '@mui/material';

type Props = {
  message?: string;
};

const ErrorNote = ({ message }: Props) => {
  if (!message) return null;

  return (
    <FlexBox
      bgcolor='#EDEEF0'
      borderRadius={2}
      p='15px'
      gap={1}
      position={'relative'}
      overflow={'hidden'}
      minHeight={59}
      alignItems={'center'}
      mt={2}
      mb={1}
    >
      <InfoOutlinedIcon sx={{ color: '#F94A44', fontSize: '20px' }} />
      <Typography fontSize={14} zIndex={2}>
        {message}
      </Typography>

      <FlexBox position={'absolute'} right={15} bottom={-25} gap={1} zIndex={1}>
        <InfoOutlinedIcon sx={{ color: '#F3736C', fontSize: '64px', opacity: 0.5 }} />
      </FlexBox>
    </FlexBox>
  );
};

export default memo(ErrorNote);
