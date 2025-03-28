import { memo } from 'react';
import { Stack, styled, Typography } from '@mui/material';
import { ChildrenProps, ConditionContainer } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import LoadingAnimationIcon from 'modules/inventory/product-stock/components/Icons/LoadingAnimationIcon';
type OrderStatusImportLoadingProps = ChildrenProps & {
  isLoading: boolean;
};

const ContentLoading = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: 8,
  padding: '20px 0',
}));

const OrderStatusImportLoading = ({ isLoading, children }: OrderStatusImportLoadingProps) => {
  const { t } = useTranslation('subOrder');
  return (
    <ConditionContainer
      alternative={
        <ContentLoading>
          <LoadingAnimationIcon sx={{ fontSize: 74 }} />
          <Typography variant='h1' color='initial'>
            {t('statusImport.loading')}
          </Typography>
        </ContentLoading>
      }
      active={!isLoading}
    >
      {children}
    </ConditionContainer>
  );
};

export default memo(OrderStatusImportLoading);
