import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ManufactureDetail } from '../../context/ManufactureDetail';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { IManufacture } from '../../interfaces';
import { FormPaper } from 'modules/common/components/FormPaper';
import { ManufactureBand } from '../ManufactureBand';

const ManufactureGeneralDetails = () => {
  const { t } = useTranslation('manufacture');
  const { isLoading, error, manufacture } = ManufactureDetail();

  const getArray = (data: IManufacture): any[] => {
    const array = [
      {
        label: t('fields.name'),
        value: data?.name,
      },
      {
        label: t('fields.band'),
        value: <ManufactureBand bands={data?.brand || []} />,
      },
    ];
    return array;
  };

  return (
    <FormPaper title={t('basicInformation')}>
      <BasicTableHeadless
        isLoading={isLoading}
        error={error}
        columns={simpleColumns}
        data={getArray(manufacture as IManufacture)}
      />
    </FormPaper>
  );
};

export default memo(ManufactureGeneralDetails);
