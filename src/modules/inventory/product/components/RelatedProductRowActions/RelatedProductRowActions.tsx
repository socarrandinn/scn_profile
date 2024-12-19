import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import useUpdateRelatedProducts from '../../hooks/useUpdateRelatedProducts';
import { RELATED_PRODUCTS_ACTION } from '../../constants/related-products.enum';
import { useProductDetail } from '../../contexts/ProductDetail';

type RelatedProductRowActionsProps = {
  rowId: string;
  related: string[];
};

const RelatedProductRowActions = ({ rowId }: RelatedProductRowActionsProps) => {
  const { id } = useProductDetail();
  const { isOpen, onClose, onOpen } = useToggle();
  const payload = useMemo(() => ({ id, related: [rowId] }), [id, rowId]);

  const { onSubmit, isLoading, error } = useUpdateRelatedProducts(payload, RELATED_PRODUCTS_ACTION.REMOVE, onClose);

  return (
    <>
      <Stack direction='row' spacing={1} justifyContent={'center'}>
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={onSubmit}
        />
      </Stack>
    </>
  );
};

export default memo(RelatedProductRowActions);
