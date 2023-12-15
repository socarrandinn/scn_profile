import { memo } from 'react';
import { Content, ImageContent, Section } from './styled';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import Typography from '@mui/material/Typography';
import { AvatarProps, Box } from '@mui/material';
import { ChildrenProps, imageUrl } from '@dfl/mui-react-common';

type HeaderSummaryTabsProps = ChildrenProps & {
  title: string;
  subtitle?: string;
  logo?: string;
  actions: JSX.Element;
  avatarProps?: AvatarProps;
};

const HeaderSummaryTabs = ({ logo, title, subtitle, actions, children, avatarProps }: HeaderSummaryTabsProps) => {
  return (
    <Section>
      <ImageContent src={imageUrl(logo as string)} sx={avatarProps}>
        <CompareOutlinedIcon />
      </ImageContent>
      <Content>
        <Box>
          <Typography variant='h1'>{title}</Typography>
          {subtitle && <Typography variant='subtitle1'>{subtitle}</Typography>}
        </Box>
        {actions}
        <Box sx={{ marginTop: 'auto' }}>{children}</Box>
      </Content>
    </Section>
  );
};

export default memo(HeaderSummaryTabs);
