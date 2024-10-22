import React, { memo, ReactNode } from 'react';
import { Content, Section } from './styled';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import Typography from '@mui/material/Typography';
import { AvatarProps, Box, Stack } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';
import HeaderDecorator from './HeaderDecorator';

import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import { IImageMedia } from 'modules/common/interfaces';

export type HeaderSummaryTabsProps = {
  title: string;
  subtitle?: any;
  logo?: IImageMedia;
  actions: JSX.Element;
  avatarProps?: AvatarProps;
  entityStyle?: { ICON: any; COLOR: string };
  isLoadingImage?: boolean;
  onImageSubmit?: any;
  badge?: React.ReactNode;
  icon?: ReactNode;
};

const HeaderSummaryTabs = ({
  logo,
  title,
  subtitle,
  actions,
  children,
  avatarProps,
  entityStyle,
  isLoadingImage,
  onImageSubmit,
  badge,
  icon,
}: ChildrenProps & HeaderSummaryTabsProps) => {
  return (
    <Section>
      <Stack gap={{ xs: 1, md: 3 }} flexDirection={{ xs: 'column', md: 'row' }}>
        <Box position={'relative'}>
          <AvatarEditable
            readOnly={!onImageSubmit}
            onSubmit={onImageSubmit}
            isLoading={isLoadingImage}
            avatar={logo}
            variant='rounded'
            {...avatarProps}
          >
            {icon || <CompareOutlinedIcon />}
          </AvatarEditable>
          {badge}
        </Box>

        <Content>
          <Box>
            <Typography variant='h1'>{title}</Typography>
            {subtitle && <Typography variant='subtitle1'>{subtitle}</Typography>}
          </Box>
          {actions}
        </Content>
        {!!entityStyle && <HeaderDecorator color={entityStyle.COLOR} icon={entityStyle.ICON} />}
      </Stack>
      <Box sx={{ marginTop: 'auto' }}>{children}</Box>
    </Section>
  );
};

export default memo(HeaderSummaryTabs);
