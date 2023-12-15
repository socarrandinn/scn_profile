import { memo } from 'react';
import { Content, ImageContent, Section } from './styled';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

type HeaderSummaryTabsProps = ChildrenProps & {
  title: string;
  subtitle: string;
  logo?: string;
  actions: JSX.Element;
};

const HeaderSummaryTabs = ({ logo, title, subtitle, actions, children }: HeaderSummaryTabsProps) => {
  return (
    <Section>
      <ImageContent src={logo}>
        <CompareOutlinedIcon />
      </ImageContent>
      <Content>
        <Box>
          <Typography variant='h1'>{title}</Typography>
          <Typography variant='subtitle1'>{subtitle}</Typography>
        </Box>
        {actions}
        <Box sx={{ marginTop: 'auto' }}>{children}</Box>
      </Content>
    </Section>
  );
};

export default memo(HeaderSummaryTabs);
