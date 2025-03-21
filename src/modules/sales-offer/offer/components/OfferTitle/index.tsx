import { memo, useCallback } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type Props = {
  title: string;
};

const OfferTitle = ({ title }: Props) => {
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <FlexBox justifyItems={'center'} alignItems={'center'} mb={3} columnGap={2}>
      <ArrowBackIosNewIcon
        onClick={handleClose}
        sx={{
          cursor: 'pointer',
        }}
      />
      <Typography fontSize={24}>{title}</Typography>
    </FlexBox>
  );
};

export default memo(OfferTitle);
