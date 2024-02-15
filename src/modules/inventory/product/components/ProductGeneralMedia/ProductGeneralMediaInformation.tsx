import { memo } from 'react';
import { Avatar, Box, Card } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { imageUrl, HandlerError } from '@dfl/mui-react-common';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { mapGetOneErrors } from 'constants/errors';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailMediaUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailMediaUpdateContainer';
import { IImageMedia } from 'modules/common/interfaces';
import ProductGeneralMediaSkeleton from 'modules/inventory/product/components/ProductGeneralMediaForm/ProductGeneralMediaFormSkeleton';

type ProductMediaBoxProps = {
  pictures: IImageMedia[];
};

const ProductMediaBox = ({ pictures }: ProductMediaBoxProps) => (
  <Box display='flex' flexDirection='row' alignItems='center'>
    {pictures?.map((image: IImageMedia) => (
      <Card key={image._id} style={{ maxWidth: 160, margin: 8 }}>
        <Avatar sx={{ height: '155px', width: '155px' }} alt={image?.thumb} src={imageUrl(image?.url)} />
      </Card>
    ))}
  </Box>
);

const ProductGeneralMediaInformation = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper title={t('section.media.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <ProductDetailMediaUpdateContainer
          initValue={{
            _id: product?._id,
            media: product?.media,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.media.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      {isLoading && <ProductGeneralMediaSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && product?.media?.length === 0 && t('section.media.message')}
      {!isLoading && !error && <ProductMediaBox pictures={product?.media as IImageMedia[]} />}
      {/* // product?.media?.map((image: IImageMedia) => (
        //   <Card key={image._id} style={{ maxWidth: 160, margin: 8 }}>
        //     <Avatar sx={{ height: '155px', width: '155px' }} alt={image?.thumb} src={imageUrl(image?.url)} />
        //   </Card>
        // ))} */}
    </FormPaper>
  );
};

export default memo(ProductGeneralMediaInformation);
