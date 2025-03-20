import { memo, useCallback, useMemo } from 'react';
import { Avatar, Box, Card } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { imageUrl, HandlerError } from '@dfl/mui-react-common';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { mapGetOneErrors } from 'constants/errors';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailMediaUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailMediaUpdateContainer';
import { IImageMedia } from 'modules/common/interfaces';
import ProductGeneralMediaSkeleton from 'modules/inventory/product/components/ProductGeneralMediaForm/ProductGeneralMediaFormSkeleton';
import { PRODUCT_PERMISSIONS } from '../../constants';

type ProductMediaBoxProps = {
  pictures: IImageMedia[];
  height?: string;
  width?: string;
};

export const ProductMediaBox = ({ pictures, height, width }: ProductMediaBoxProps) => (
  <Box display='flex' flexDirection='row' alignItems='center'>
    {pictures?.map((image: IImageMedia) => (
      <Card key={image._id} style={{ maxWidth: 160, margin: 8, borderRadius: 6 }}>
        <Avatar
          sx={{ height: width || '155px', width: height || '155px' }}
          alt={image?.thumb}
          src={imageUrl(image?.url)}
        />
      </Card>
    ))}
  </Box>
);

const ProductGeneralMediaInformation = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_5 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_5'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_5'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('section.media.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <ProductDetailMediaUpdateContainer
          initValue={{
            _id: product?._id,
            media: product?.media,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      mbHeader={'13.04px'}
      title={t('section.media.title')}
      actions={<FormPaperAction onToggle={handleToggle} open={open} permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE} />}
    >
      {isLoading && <ProductGeneralMediaSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && product?.media?.length === 0 && t('section.media.message')}
      {!isLoading && !error && (product?.media?.length as number) > 0 && (
        <ProductMediaBox pictures={product?.media as IImageMedia[]} />
      )}
    </FormPaper>
  );
};

export default memo(ProductGeneralMediaInformation);
