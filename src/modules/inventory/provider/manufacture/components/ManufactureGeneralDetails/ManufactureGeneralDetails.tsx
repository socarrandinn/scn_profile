import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ManufactureDetail } from '../../context/ManufactureDetail';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { IManufacture } from '../../interfaces';
import { FormPaper } from 'modules/common/components/FormPaper';
import { ManufactureBand } from '../ManufactureBand';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ManufactureEditBasicInfoContainer from '../../containers/ManufactureEditBasicInfoContainer';

const ManufactureGeneralDetails = () => {
  const { t } = useTranslation('manufacture');
  const { isLoading, error, manufacture } = ManufactureDetail();
  const { editIsOpen, closeEdit, openEdit } = ManufactureDetail();

  const handleToggle = () => {
    editIsOpen ? closeEdit() : openEdit();
  };

  if (editIsOpen) {
    return (
      <FormPaper title={t('basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={editIsOpen} />}>
        <ManufactureEditBasicInfoContainer initValue={manufacture as IManufacture} onClose={closeEdit} />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={editIsOpen} />}>
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

const getArray = (data: IManufacture): any[] => {
  const array = [
    {
      label: 'manufacture:fields.name',
      value: data?.name,
    },
    {
      label: 'manufacture:fields.band',
      value: <ManufactureBand bands={data?.brand || []} />,
    },
  ];
  return array;
};
