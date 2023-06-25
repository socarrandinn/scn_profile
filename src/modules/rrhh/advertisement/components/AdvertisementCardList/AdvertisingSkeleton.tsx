import React, { memo } from 'react';
import { Card, CardContent, Skeleton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FlexBox } from '@dfl/mui-react-common';

const TitleStyled = styled(FlexBox)(() => ({
  minHeight: '3.5rem',
}));

const AdvertisingSkeleton = () => {
  return (
    <Card sx={{ marginBottom: '1rem' }}>
      <TitleStyled alignItems='center' justifyContent='space-between' p={2}>
        <Skeleton sx={{ width: '60%' }} animation={false}/>
      </TitleStyled>
      <CardContent>
        <Skeleton animation={false}/>
        <Skeleton animation={false}/>

        <FlexBox alignItems='center' justifyContent='flex-end' pt={2}>
          <Typography component='div' variant='h1'>
            <Skeleton sx={{ width: '70px', minHeight: '45px' }} animation={false}/>
          </Typography>
        </FlexBox>
      </CardContent>
    </Card>
  );
};

export default memo(AdvertisingSkeleton);
