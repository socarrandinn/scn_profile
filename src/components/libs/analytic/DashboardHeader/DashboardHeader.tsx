import { memo } from 'react';
import { Paper, Skeleton, Typography } from '@mui/material';
import { ChildrenProps, ConditionContainer, FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { FilterList } from '@dfl/mui-admin-layout';

type BoardHeaderProps = {
  title?: string | JSX.Element;
  subtitle?: string | Element;
  ns?: string;
  mb?: number | string;
  isLoading?: boolean;
  hasFilter?: boolean;
} & ChildrenProps;

const SubtitleEval = ({ subtitle, t }: { subtitle: string | Element | undefined; t: (v: string) => string }) => {
  if (!subtitle) return <></>;
  if (typeof subtitle === 'string') return <>{t(subtitle)}</>;
  return <>{subtitle}</>;
};
const DashboardHeader = ({ title, isLoading, subtitle, children, hasFilter, ns, mb }: BoardHeaderProps) => {
  const { t } = useTranslation(ns || 'conciliation');

  return (
    <Paper sx={{ padding: 2, mb: mb || 4 }}>
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
      <SubtitleEval subtitle={subtitle} t={t} />
    </Paper>
  );
};

export default memo(DashboardHeader);
