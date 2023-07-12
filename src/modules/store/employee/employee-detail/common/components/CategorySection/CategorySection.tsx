import React, { memo } from 'react'
import { ICategory } from 'modules/store/employee/settings/category/interfaces';
import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';
import { TurnedInNotOutlined } from '@mui/icons-material';

type CategorySectionProps = {
  category?: ICategory | null
}

export const PaperCategory = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: 20,
  position: 'relative',
  margin: '-16px -16px 0 -16px',
  '.category-label': {
    fontSize: 11,
    color: theme.palette.primary.contrastText,
    opacity: 0.8
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
      }
    }
  },
  '.category-badged': {
    '.MuiSvgIcon-root': {
      fontSize: 20,
      color: theme.palette.primary.contrastText,
      opacity: 0.3,
    }
  }
}));
const CategorySection = ({ category }: CategorySectionProps) => {
  const { t } = useTranslation('employee');
  return (
        <PaperCategory elevation={0}>
            {category?.icon && <div className={'category-icon'}><IconPreview value={category?.icon}/></div>}
            <Typography className={'category-label'} variant={'subtitle1'} textTransform={'uppercase'}>
                {t('fields.category')}
            </Typography>
            <Typography className={'category-name'} variant={'subtitle2'} textTransform={'uppercase'}>
                {category?.name}
            </Typography>
            <FlexBox gap={1} className={'category-badged'}>
                <TurnedInNotOutlined/>
                <TurnedInNotOutlined/>
                <TurnedInNotOutlined/>
            </FlexBox>
        </PaperCategory>
  );
}

export default memo(CategorySection);
