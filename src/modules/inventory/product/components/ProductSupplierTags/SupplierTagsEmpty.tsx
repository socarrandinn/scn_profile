import { Avatar, Stack, Typography } from '@mui/material';
import { SupplierIcon } from 'modules/inventory/common/components/Icons/SupplierIcon';
import { memo } from 'react';
import { useProductDetail } from '../../contexts/ProductDetail';
import { ButtonLink } from '@dfl/react-security';

const SupplierTagsEmpty = () => {
  const { product } = useProductDetail();
  return (
    <Stack flex={1} gap={1} justifyContent={'center'} alignItems={'center'}>
      <Avatar sx={{ width: 80, height: 80, backgroundColor: 'primary.main' }}>
        <SupplierIcon sx={{ color: 'background.paper', fontSize: 60 }} />
      </Avatar>
      <Typography variant='h1' color='initial'>
        El proveedor no tiene etiquetas definidas
      </Typography>
      <ButtonLink to={`/inventory/settings/suppliers/${product?.providers?.supplier?._id as string}/general`}>
        Ir al proveedor
      </ButtonLink>
    </Stack>
  );
};

export default memo(SupplierTagsEmpty);
