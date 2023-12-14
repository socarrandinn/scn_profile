import { memo } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ButtonLink, PermissionCheck, RouterTab } from '@dfl/react-security';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';

export const PaperContainer = styled(Paper)(() => ({
  padding: '20px 20px 0 20px',
  marginBottom: 20,
}));

const BannerDetail = () => {
  const { t } = useTranslation('product');
  const { id, product } = useProductDetail();

  return (
    <PaperContainer>
      <FlexBox gap={4} flexDirection={{ xs: 'column', md: 'row' }}>
        <div>{/* <AvatarProduct product={product as IProductUpdate} readyOnly={!heCanChange} /> */}</div>
        <FlexBox flexDirection={'column'} gap={1}>
          <FlexBox gap={1} flexDirection={'column'}>
            <Typography variant={'h2'}>{product?.name}</Typography>
            <Typography variant={'body2'}>{product?.code}</Typography>
          </FlexBox>
          <FlexBox gap={1} mt={1} mb={2}>
            <Button variant={'outlined'} size={'small'} disabled>
              {t('common:export')}
            </Button>
            <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
              <Button variant={'outlined'} size={'small'} color={'error'} disabled>
                {t('terminate')}
              </Button>
            </PermissionCheck>
          </FlexBox>
          <RouterTab tabs={[]} prefix={`/inventory/products/${id}`} translationNs={'product'} />
        </FlexBox>
      </FlexBox>
    </PaperContainer>
  );
};

export default memo(BannerDetail);
