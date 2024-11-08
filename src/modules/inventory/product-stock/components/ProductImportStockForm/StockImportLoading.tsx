import { memo } from 'react';
import LoadingAnimationIcon from '../Icons/LoadingAnimationIcon';
import { Stack, styled, Typography } from '@mui/material';
import { ChildrenProps, ConditionContainer } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
type StockImportLoadingProps = ChildrenProps & {
  isLoading: boolean;
};

const ContentLoading = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: 8,
  padding: '20px 0',
}));

const StockImportLoading = ({ isLoading, children }: StockImportLoadingProps) => {
  const { t } = useTranslation('stock');
  return (
    <ConditionContainer
      alternative={
        <ContentLoading>
          <LoadingAnimationIcon sx={{ fontSize: 74 }} />
          <Typography variant='h1' color='initial'>
            {t('warehouse.import.loading')}
          </Typography>
        </ContentLoading>
      }
      active={!isLoading}
    >
      {children}
    </ConditionContainer>
  );
};

export default memo(StockImportLoading);
