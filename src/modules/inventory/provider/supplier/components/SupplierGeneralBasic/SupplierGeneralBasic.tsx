import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { simpleColumns } from '../../constants/supplier.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { ISupplier } from '../../interfaces';
import SupplierDetailBasicUpdateContainer from '../../containers/SupplierDetailBasicUpdateContainer';
import { PercentValue } from 'components/libs/PercentValue';

const SupplierGeneralBasic = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, providerProducts, onOneClose, onOneToggle, state } = useProviderProductsDetail();
  const open = useMemo(() => state?.form_1 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_1'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_1'), [onOneToggle]);

  if (open) {
    return (
      <FormPaper
        nm
        title={t('fields.basicInformation')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
        <SupplierDetailBasicUpdateContainer
          initValue={{
            _id: providerProducts?._id,
            name: providerProducts?.name,
            commission: providerProducts?.commission,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(providerProducts as ISupplier) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(SupplierGeneralBasic);

const getArray = (data: ISupplier): any[] => {
  const array = [
    {
      label: 'fields.name',
      value: data?.name,
    },
    {
      label: 'fields.commission',
      value: <PercentValue value={Number(data?.commission).toFixed(2)} />,
    },
  ];
  return array;
};
