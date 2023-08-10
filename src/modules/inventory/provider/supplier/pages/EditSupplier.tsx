import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useFindOneProducts } from 'modules/inventory/provider/supplier/hooks/useFindOneProducts';
import SupplierCreate from 'modules/inventory/provider/supplier/pages/SupplierCreate';

const EditSupplier = () => {
  const { id } = useParams();
  const {
    data,
    isLoading,
  } = useFindOneProducts(id as string);
  useBreadcrumbName(data?._id || '', data?.name, isLoading);
  return (
    <SupplierCreate title={'edit'} initValue={data} />
  );
};
export default memo(EditSupplier);
