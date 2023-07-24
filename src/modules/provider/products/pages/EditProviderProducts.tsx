import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useFindOneProducts } from 'modules/provider/products/hooks/useFindOneProducts';
import ProductsCreate from 'modules/provider/products/containers/ProdutcsCreate';

const EditProviderProducts = () => {
  const { id } = useParams();
  const {
    data,
    isLoading,
  } = useFindOneProducts(id as string);
  useBreadcrumbName(data?._id || '', data?.name, isLoading);
  return (
    <ProductsCreate title={'edit'} initValue={data} />
  );
};
export default memo(EditProviderProducts);
