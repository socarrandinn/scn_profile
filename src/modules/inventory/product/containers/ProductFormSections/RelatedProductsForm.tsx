import { Grid } from '@mui/material';
import { SelectRelatedProducts } from 'modules/inventory/product/components/SelectRelatedProducts';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';

const RelatedProductsForm = () => {
  const { id } = useProductDetail();
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <SelectRelatedProducts
          label={'product.section.relatedProducts.relatedProductsField'}
          name='related'
          placeholder='product.section.relatedProducts.placeholder'
          id={id}
        />
      </Grid>
    </Grid>
  );
};

export default RelatedProductsForm;
