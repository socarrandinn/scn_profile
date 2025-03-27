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
  title?: string;
  message: string;
};

const ErrorNote = ({ title, message }: Props) => {
  return (
    <FlexBox
      bgcolor='#EDEEF0'
      borderRadius={2}
      p='14px'
      gap={1.5}
      position={'relative'}
      overflow={'hidden'}
      minHeight={59}
      alignItems={'center'}
      mt={2}
      mb={1}
      minWidth={'809px'}
    >
      <InfoOutlinedIcon sx={{ color: '#F94A44', fontSize: '25px' }} />
      <div>
        {title &&
          <Typography variant='body1' fontWeight={600} zIndex={2}>
            {title}
          </Typography>
        }
        <Typography variant='body1' zIndex={2}>
          {message}
        </Typography>
      </div>

      <FlexBox position={'absolute'} right={15} bottom={-25} gap={1} zIndex={1}>
        <InfoOutlinedIcon sx={{ color: '#F3736C', fontSize: '64px', opacity: 0.5 }} />
      </FlexBox>
    </FlexBox>
  );
};

export default memo(ErrorNote);
