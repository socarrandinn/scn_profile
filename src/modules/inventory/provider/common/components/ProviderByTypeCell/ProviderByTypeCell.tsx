import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';
import { memo } from 'react';
import { ProviderCell } from '../ProviderCell';
import { useFindOneLogistics } from 'modules/inventory/provider/logistics/hooks/useFindOneLogistics';
import { IImageMedia } from 'modules/common/interfaces';
import { useFindOneProducts } from 'modules/inventory/provider/supplier/hooks/useFindOneProducts';

type ProviderByTypeCellProps = {
  type: PROVIDER_TYPE_ENUM;
  providerId: string;
};

const ProviderByTypeCell = ({ providerId, type }: ProviderByTypeCellProps) => {
  switch (type) {
    case PROVIDER_TYPE_ENUM.LOGISTIC:
      return <LogisticContainer providerId={providerId} type={type} />;

    case PROVIDER_TYPE_ENUM.SUPPLIER:
      return <ProductContainer providerId={providerId} type={type} />;

    default:
      return <LogisticContainer providerId={providerId} type={type} />;
  }
};

export default memo(ProviderByTypeCell);

const LogisticContainer = ({ providerId, type }: ProviderByTypeCellProps) => {
  const { data } = useFindOneLogistics(providerId);
  if (!data) return <></>;
  return (
    <ProviderCell
      name={data?.name}
      provider={data?._id as string}
      type={type}
      hideImage
      image={data?.avatar as IImageMedia}
    />
  );
};

const ProductContainer = ({ providerId, type }: ProviderByTypeCellProps) => {
  const { data } = useFindOneProducts(providerId);
  if (!data) return <></>;
  return (
    <ProviderCell
      name={data?.name}
      provider={data?._id as string}
      type={type}
      hideImage
      image={data?.avatar as IImageMedia}
    />
  );
};

export const renderProviderByTypeCell = ({ ...props }: ProviderByTypeCellProps) => {
  return <ProviderByTypeCell {...props} />;
};
