import { SkeletonList } from '@dfl/mui-react-common';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';
import { STOCK_REDUCTION_CAUSE_PERMISSIONS } from 'modules/inventory/settings/stock-reduction-cause/constants';
import { useFindOneStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/hooks/useFindOneStockReductionCause';
import { useFindOneWarehouseArea } from 'modules/inventory/settings/warehouse-area/hooks/useFindOneWarehouseArea';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { useFindOneStore } from 'modules/inventory/warehouse/hooks/useFindOneStore';
import { useTranslation } from 'react-i18next';

export const ProductCell = ({ value }: any) => {
  const { t } = useTranslation('stock');
  const { data, isLoading } = useFindOneProduct(value);

  if (isLoading) return <SkeletonList numberItemsToShow={1} />;
  if (!data) {
    return (
      <AvatarNameCell
        variant={'rounded'}
        name={t('emptyValue.notName')}
        secondary={t('emptyValue.notCode')}
        hideLink
        image={undefined}
      />
    );
  }

  return (
    <AvatarNameCell variant={'rounded'} name={data?.name} secondary={data?.code} hideLink image={data?.media?.[0]} />
  );
};
export const WarehouseAreaCell = ({ value }: any) => {
  const { data, isLoading } = useFindOneWarehouseArea(value);

  if (isLoading) return <SkeletonList numberItemsToShow={1} />;
  if (!data) return <></>;
  return <AvatarNameCell variant={'rounded'} name={data?.name} hideLink hideImage />;
};

export const WarehouseCell = ({ value }: any) => {
  const { data, isLoading } = useFindOneStore(value);

  if (isLoading) return <SkeletonList numberItemsToShow={1} />;
  if (!data) return <></>;
  return (
    <AvatarNameCell
      variant={'rounded'}
      name={data?.name}
      hideLink
      hideImage
      permissions={[WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW]}
    />
  );
};

export const ReductionCauseCell = ({ value }: any) => {
  const { data, isLoading } = useFindOneStockReductionCause(value);

  if (isLoading) return <SkeletonList numberItemsToShow={1} />;
  if (!data) return <></>;
  return (
    <AvatarNameCell
      variant={'rounded'}
      name={data?.name}
      hideLink
      hideImage
      permissions={[STOCK_REDUCTION_CAUSE_PERMISSIONS.STOCK_REDUCTION_CAUSE_VIEW]}
    />
  );
};
