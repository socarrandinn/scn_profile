import SelectLogistics from 'modules/inventory/provider/logistics/components/UpdateHandlingCostModal/SelectLogistics';
import { SelectSupplier } from 'modules/inventory/provider/supplier/components/SelectSupplier';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { memo } from 'react';

type SelectProviderByTypeProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  disabled?: boolean;
  type?: ROLE_PROVIDER_TYPE_ENUM | null;
};

const SelectProviderByType = ({ type, ...props }: SelectProviderByTypeProps) => {
  switch (type) {
    case ROLE_PROVIDER_TYPE_ENUM.LOGISTIC:
      return <SelectLogistics {...props} />;
    case ROLE_PROVIDER_TYPE_ENUM.PRODUCT:
      return <SelectSupplier {...props} />;

    default:
      return <></>;
  }
};

export default memo(SelectProviderByType);
