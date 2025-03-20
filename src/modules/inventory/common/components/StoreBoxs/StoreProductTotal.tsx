import { memo, useMemo } from 'react';
import { IWarehouseDistribution } from '../../interfaces/IProductAnalytic';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ProductIcon } from '../Icons/ProductIcon';
import { PaperContent, TotalDividend } from './common';
import { ButtonLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';

type StoreProductTotalProps = {
  distributions: IWarehouseDistribution[];
};

const StoreProductTotal = ({ distributions }: StoreProductTotalProps) => {
  const { t } = useTranslation('warehouse');
  const productTotal = useMemo(() => distributions?.[0]?.of, [distributions]);
  const path = useMemo(
    () => distributions?.map((warehouse) => `warehouse=${warehouse?.warehouse}`).join('&'),
    [distributions],
  );
  return (
    <PaperContent
      sx={{
        width: { xs: '100%', md: 220 },
        minHeight: { xs: '100%', md: 180 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ListItem sx={{ padding: 0 }}>
        <ListItemIcon sx={{ minWidth: 35 }}>
          <ProductIcon />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ fontWeight: 600, fontSize: 16, lineHeight: 1.2 }}
          primary={t('distribution.productTotal')}
        />
      </ListItem>
      <TotalDividend mt={1} color={'primary'} fontWeight={800} textAlign='center' fontSize={{ xs: 40, md: 60 }}>
        {productTotal || 0}
      </TotalDividend>
      <ButtonLink to={`/inventory/products?page=0&${path}`}>{t('common:seeProducts')}</ButtonLink>
    </PaperContent>
  );
};

export default memo(StoreProductTotal);
