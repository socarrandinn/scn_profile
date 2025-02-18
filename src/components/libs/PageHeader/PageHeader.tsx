import { memo } from 'react';
import { Paper, Skeleton, Typography } from '@mui/material';
import { ChildrenProps, ConditionContainer, FlexBox } from '@dfl/mui-react-common';
import { FilterList } from '@dfl/mui-admin-layout';

type BoardHeaderProps = {
  title?: string | JSX.Element;
  subtitle?: string | Element;
  mb?: number | string;
  isLoading?: boolean;
  hasFilter?: boolean;
} & ChildrenProps;

const SubtitleEval = ({ subtitle }: { subtitle: string | Element | undefined }) => {
  if (!subtitle) {
    return <></>;
  }
  return <>{subtitle}</>;
};
const PageHeader = ({ title, isLoading, subtitle, children, hasFilter, mb }: BoardHeaderProps) => {
  return (
    <Paper sx={{ padding: 2, mb: mb ?? 4 }}>
      <FlexBox justifyContent={'space-between'} alignItems={'center'}>
        <ConditionContainer
          active={!isLoading}
          alternative={<Skeleton variant='text' sx={{ fontSize: '1rem', width: '60%', maxWidth: '300px' }} />}
        >
          <Typography variant={'h1'}>{title}</Typography>
        </ConditionContainer>
        {children}
        {hasFilter && <FilterList />}
      </FlexBox>
      {<SubtitleEval subtitle={subtitle} />}
    </Paper>
  );
};

export default memo(PageHeader);
