import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { ProviderProductsDetail } from '../../context/ProviderProductDetail';
import { simpleColumns } from '../../constants/supplier.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { ISupplier } from '../../interfaces';
import SupplierDetailBasicUpdateContainer from '../../containers/SupplierDetailBasicUpdateContainer';
import { PercentValue } from 'components/libs/PercentValue';

const SupplierGeneralBasic = () => {
  const { t } = useTranslation('provider');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, providerProducts } = ProviderProductsDetail();

  if (isOpen) {
    return (
      <FormPaper
        nm
        title={t('fields.basicInformation')}
        actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
      >
        <SupplierDetailBasicUpdateContainer
          initValue={{
            _id: providerProducts?._id,
            name: providerProducts?.name,
            commission: providerProducts?.commission,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
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
