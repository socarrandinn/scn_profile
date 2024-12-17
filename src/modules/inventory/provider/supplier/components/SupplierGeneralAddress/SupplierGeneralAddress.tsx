import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { IAddress } from 'modules/common/interfaces';
import { BasicTableDoubleColumnHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import SupplierDetailAddressUpdateContainer from '../../containers/SupplierDetailAddressUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import {
  getArrayAddress,
  getDoubleColumnArrayAddress,
} from 'modules/inventory/common/constants/common-address.datatable';
import { SUPPLIER_PERMISSIONS } from '../../constants';

const SupplierGeneralAddress = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, providerProducts, onOneClose, onOneToggle, state } = useProviderProductsDetail();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.address.address')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <SupplierDetailAddressUpdateContainer
          initValue={{
            _id: providerProducts?._id,
            address: providerProducts?.address,
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
      title={t('fields.address.address')}
      actions={
        <FormPaperAction
          onToggle={handleToggle}
          open={open}
          permissions={[SUPPLIER_PERMISSIONS.SUPPLIER_WRITE]}
        />
      }>
      <BasicTableDoubleColumnHeadless
        columns={simpleColumns}
        responsiveData={getArrayAddress(providerProducts?.address as IAddress) || []}
        doubleColumnData={getDoubleColumnArrayAddress(providerProducts?.address as IAddress) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(SupplierGeneralAddress);
