import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useToggle } from '@dfl/hook-utils';
import { Card, CardMedia } from '@mui/material';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ProductDetailMediaUpdateContainer from '../../containers/ProductTabs/ProductDetailMediaUpdateContainer';
import { IImageMedia } from 'modules/common/interfaces';

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
      {product?.media?.map((image: IImageMedia) => (
        <Card key={image._id} style={{ maxWidth: 200, margin: 8 }}>
          <CardMedia component='img' height='140' image={image.url} alt={`Image ${image.thumb}`} />
        </Card>
      ))}
    </FormPaper>
  );
};

export default memo(ProductGeneralMediaInformation);
