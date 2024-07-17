import { memo } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type Props = {
  title: string;
};

const OfferTitle = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <FlexBox justifyItems={'center'} alignItems={'center'} mb={3} columnGap={2}>
      <ArrowBackIosNewIcon
        onClick={() => {
          navigate(-1);
        }}
        sx={{
          cursor: 'pointer',
        }}
      />
      <Typography fontSize={24}>{title}</Typography>
    </FlexBox>
  );
};

export default memo(OfferTitle);
