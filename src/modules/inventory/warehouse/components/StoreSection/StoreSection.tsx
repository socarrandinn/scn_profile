import React, { memo } from 'react';
import { Paper, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { TurnedInNotOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import StoreIcon from '@mui/icons-material/Store';

export const PaperCategory = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: 20,
  position: 'relative',
  margin: '-16px -16px 0 -16px',
  '.category-label': {
    fontSize: 11,
    color: theme.palette.primary.contrastText,
    opacity: 0.8,
  },
  '.category-name': {
    fontSize: 22,
    color: theme.palette.primary.contrastText,
  },
  '.category-icon': {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    width: 70,
    '>div': {
      // position: 'absolute',
      right: 0,
      background: 'none',
      height: 'auto',
      width: 'auto',
      svg: {
        color: theme.palette.primary.contrastText,
        opacity: 0.3,
        fontSize: 40,
        height: 80,
        width: 80,
      },
    },
  },
  '.category-badged': {
    '.MuiSvgIcon-root': {
      fontSize: 20,
      color: theme.palette.primary.contrastText,
      opacity: 0.3,
    },
  },
}));

type StoreSectionProps = {
  name: string;
};

const StoreSection = ({ name }: StoreSectionProps) => {
  const { t } = useTranslation('warehouse');
  return (
    <PaperCategory elevation={0}>
      <div className={'category-icon'}>
        <StoreIcon fontSize='large' sx={{ color: 'white' }} />
      </div>
      <Typography className={'category-label'} variant={'subtitle1'} textTransform={'uppercase'}>
        {t('name_card_header')}
      </Typography>
      <Typography className={'category-name'} variant={'subtitle2'} textTransform={'uppercase'}>
        {name}
      </Typography>
      <FlexBox gap={1} className={'category-badged'}>
        <TurnedInNotOutlined />
        <TurnedInNotOutlined />
        <TurnedInNotOutlined />
      </FlexBox>
    </PaperCategory>
  );
};

export default memo(StoreSection);
